import { useEffect, useState } from 'react'
import './Header.css'

const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Pacotes', href: '#pacotes' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className={`header-pill${menuOpen ? ' header-pill--open' : ''}`}>
        <div className="header-top">
          <a className="header-brand" href="#" onClick={closeMenu}>
            <img src="/logo/Logo.png" alt="CodeByFranco" className="header-brand__logo" />
          </a>

          <button
            type="button"
            className="header-menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="header-nav"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="header-menu-toggle__bar" aria-hidden="true" />
            <span className="header-menu-toggle__bar" aria-hidden="true" />
            <span className="header-menu-toggle__bar" aria-hidden="true" />
          </button>
        </div>

        <nav className="header-nav" id="header-nav" aria-label="Navegação principal">
          <ul className="header-links">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a href={href} onClick={closeMenu}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contato" className="header-cta" onClick={closeMenu}>
          Orçamento
        </a>
      </div>
    </header>
  )
}
