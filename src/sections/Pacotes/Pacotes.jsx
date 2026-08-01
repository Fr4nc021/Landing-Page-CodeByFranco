import './Pacotes.css'

const solutions = [
  {
    id: 'ecommerce',
    image: '/logo/trabalhos/e-comerce.jpg',
    category: 'E-commerce',
    name: 'E-commerce',
    subtitle:
      'Catálogo online e vitrine digital para apresentar produtos e converter visitantes em clientes.',
    features: [
      'Catálogo de produtos profissional',
      'Design alinhado à sua marca',
      '100% responsivo',
      'Integração WhatsApp & Instagram',
      'SEO básico',
      'Painel para atualizar conteúdos',
    ],
    cta: 'Quero um e-commerce',
  },
  {
    id: 'gestao',
    image: '/logo/trabalhos/sistemas.png',
    category: 'Sistema de gestão',
    name: 'Sistema de gestão',
    subtitle:
      'Software sob medida para organizar operações, reduzir tarefas manuais e ganhar controle do negócio.',
    features: [
      'Fluxos sob medida para sua operação',
      'Automação de processos',
      'Painéis e relatórios claros',
      'Controle de acessos',
      'Integrações com ferramentas atuais',
      'Suporte e evolução contínua',
    ],
    cta: 'Quero um sistema',
    featured: true,
  },
]

export default function Pacotes() {
  return (
    <section className="pacotes" id="pacotes" aria-labelledby="pacotes-heading">
      <div className="pacotes__inner">
        <header className="pacotes__header">
          <span className="pacotes__label">Soluções</span>
          <h2 id="pacotes-heading" className="pacotes__title">
            Escolha a solução{' '}
            <span className="pacotes__title-accent">certa.</span>
          </h2>
          <p className="pacotes__description">
            Do catálogo online ao sistema de gestão — propostas sob medida, sem pacote engessado.
          </p>
        </header>

        <ul className="pacotes__grid">
          {solutions.map(
            ({ id, image, category, name, subtitle, features, cta, featured }) => (
              <li
                key={id}
                className={`pacotes__card${featured ? ' pacotes__card--featured' : ''}`}
              >
                <div className="pacotes__card-media">
                  <img
                    src={image}
                    alt={`Ilustração de ${name}`}
                    className="pacotes__card-image"
                  />
                </div>

                <div className="pacotes__card-content">
                  <span className="pacotes__card-category">{category}</span>
                  <h3 className="pacotes__card-name">{name}</h3>
                  <p className="pacotes__card-subtitle">{subtitle}</p>

                  <a
                    href="#contato"
                    className={`pacotes__cta${featured ? ' pacotes__cta--gradient' : ''}`}
                  >
                    {cta}
                  </a>

                  <ul className="pacotes__features">
                    {features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ),
          )}
        </ul>

        <aside className="pacotes__note" aria-label="Solução sob medida">
          <p className="pacotes__note-text">
            <span className="pacotes__note-highlight">Projeto sob medida</span>
            Cada negócio tem um contexto. Conversamos sobre o objetivo e montamos a melhor
            combinação — sem trancar o valor na vitrine.
          </p>
        </aside>
      </div>
    </section>
  )
}
