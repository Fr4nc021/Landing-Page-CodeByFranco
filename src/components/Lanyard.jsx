/* eslint-disable react/no-unknown-property */
import { useEffect, useRef, useState } from 'react'
import { Canvas, extend, useFrame } from '@react-three/fiber'
import { Environment, Lightformer, Text, useGLTF, useTexture } from '@react-three/drei'
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
} from '@react-three/rapier'
import { MeshLineGeometry, MeshLineMaterial } from 'meshline'
import * as THREE from 'three'
import cardGLB from '../assets/card.glb'
import lanyardTexture from '../assets/lanyard.png'
import './Lanyard.css'

extend({ MeshLineGeometry, MeshLineMaterial })

function Band({ maxSpeed = 50, minSpeed = 0, isMobile = false }) {
  const band = useRef()
  const fixed = useRef()
  const j1 = useRef()
  const j2 = useRef()
  const j3 = useRef()
  const card = useRef()
  const cardVisual = useRef()

  const vec = new THREE.Vector3()
  const ang = new THREE.Vector3()
  const rot = new THREE.Vector3()
  const dir = new THREE.Vector3()
  const segmentProps = { type: 'dynamic', canSleep: true, colliders: false, angularDamping: 4, linearDamping: 4 }
  const { nodes, materials } = useGLTF(cardGLB)
  const [texture, profileTexture] = useTexture([lanyardTexture, '/id.png'])

  const [curve] = useState(
    () => new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]),
  )
  const [dragged, setDragged] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [flipped, setFlipped] = useState(false)

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1])
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1])
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1])
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.5, 0]])

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab'
      return () => {
        document.body.style.cursor = 'auto'
      }
    }
    return undefined
  }, [hovered, dragged])

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera)
      dir.copy(vec).sub(state.camera.position).normalize()
      vec.add(dir.multiplyScalar(state.camera.position.length()))
      ;[card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp())
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      })
    }

    if (fixed.current && j1.current && j2.current && j3.current && card.current && band.current?.geometry) {
      ;[j1, j2].forEach((ref) => {
        if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation())
        const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())))
        ref.current.lerped.lerp(ref.current.translation(), delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)))
      })
      curve.points[0].copy(j3.current.translation())
      curve.points[1].copy(j2.current.lerped)
      curve.points[2].copy(j1.current.lerped)
      curve.points[3].copy(fixed.current.translation())
      band.current.geometry.setPoints(curve.getPoints(isMobile ? 16 : 32))
      ang.copy(card.current.angvel())
      rot.copy(card.current.rotation())
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z })
    }

    if (cardVisual.current) {
      const targetRotation = flipped ? Math.PI : 0
      cardVisual.current.rotation.y = THREE.MathUtils.lerp(cardVisual.current.rotation.y, targetRotation, 0.15)
    }
  })

  curve.curveType = 'chordal'
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping
  profileTexture.colorSpace = THREE.SRGBColorSpace

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[2, 0, 0]} ref={card} {...segmentProps} type={dragged ? 'kinematicPosition' : 'dynamic'}>
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            ref={cardVisual}
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onPointerUp={(e) => {
              e.target.releasePointerCapture(e.pointerId)
              setDragged(false)
            }}
            onPointerDown={(e) => {
              e.target.setPointerCapture(e.pointerId)
              setDragged(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())))
            }}
            onClick={(e) => {
              e.stopPropagation()
              setFlipped((prev) => !prev)
            }}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                map={materials.base.map}
                map-anisotropy={16}
                clearcoat={isMobile ? 0 : 1}
                clearcoatRoughness={0.15}
                roughness={0.9}
                metalness={0.8}
              />
            </mesh>
            <mesh geometry={nodes.clip.geometry} material={materials.metal} material-roughness={0.3} />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />

            <group position={[0, 0, 0.02]}>
              <mesh position={[0, -0.15, 0]}>
                <planeGeometry args={[1.2, 1.65]} />
                <meshBasicMaterial color="#e5e4e2" transparent opacity={0.96} />
              </mesh>
              <mesh position={[0, 0.42, 0.01]}>
                <circleGeometry args={[0.24, 32]} />
                <meshBasicMaterial map={profileTexture} />
              </mesh>
              <Text position={[0, 0.05, 0.02]} fontSize={0.12} color="#0a0a0a" anchorX="center" anchorY="middle">
                Helena Franco
              </Text>
              <Text position={[0, -0.15, 0.02]} fontSize={0.07} color="#536878" anchorX="center" anchorY="middle">
                Desenvolvedora Front-end
              </Text>
              <Text position={[0, -0.65, 0.02]} fontSize={0.06} color="#536878" anchorX="center" anchorY="middle">
                Clique para virar
              </Text>
            </group>

            <group rotation={[0, Math.PI, 0]} position={[0, 0, -0.02]}>
              <mesh position={[0, -0.15, 0]}>
                <planeGeometry args={[1.2, 1.65]} />
                <meshBasicMaterial color="#0a0a0a" transparent opacity={0.98} />
              </mesh>
              <Text position={[0, 0.25, 0.02]} fontSize={0.09} color="#e5e4e2" anchorX="center" anchorY="middle">
                Contato
              </Text>
              <Text position={[0, 0.02, 0.02]} fontSize={0.065} color="#e5e4e2" anchorX="center" anchorY="middle">
                helena@email.com
              </Text>
              <Text position={[0, -0.18, 0.02]} fontSize={0.065} color="#e5e4e2" anchorX="center" anchorY="middle">
                linkedin.com/in/helena
              </Text>
              <Text position={[0, -0.6, 0.02]} fontSize={0.055} color="#c8ced3" anchorX="center" anchorY="middle">
                Clique novamente para voltar
              </Text>
            </group>
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          depthTest={false}
          resolution={isMobile ? [1000, 2000] : [1000, 1000]}
          useMap
          map={texture}
          repeat={[-4, 1]}
          lineWidth={1}
        />
      </mesh>
    </>
  )
}

export default function Lanyard({ position = [0, 0, 24], gravity = [0, -40, 0], fov = 20, transparent = true }) {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="lanyard-wrapper">
      <Canvas
        camera={{ position, fov }}
        dpr={[1, isMobile ? 1.5 : 2]}
        gl={{ alpha: transparent }}
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)}
      >
        <ambientLight intensity={Math.PI} />
        <Physics gravity={gravity} timeStep={isMobile ? 1 / 30 : 1 / 60}>
          <Band isMobile={isMobile} />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={10} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
        </Environment>
      </Canvas>
    </div>
  )
}

