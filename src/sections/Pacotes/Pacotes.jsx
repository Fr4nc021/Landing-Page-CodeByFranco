import './Pacotes.css'

const plans = [
  {
    id: 'essencial',
    name: 'Pacote Essencial',
    subtitle: 'Para quem precisa marcar presença online com elegância.',
    price: '490',
    features: [
      'Landing page profissional',
      'Design personalizado',
      '100% responsivo',
      'Domínio .com.br (2 anos)',
      'Hospedagem inclusa',
      'Integração WhatsApp & Instagram',
      'Links diversos',
      'Entrega em até 7 dias',
    ],
    popular: false,
  },
  {
    id: 'pro',
    name: 'Pacote Pro',
    subtitle: 'Solução completa para destacar sua marca. Do seu serviços ao seu espaço.',
    price: '790',
    features: [
      'Tudo do Essencial',
      'Domínio incluso (3 anos)',
      'Seção Sobre Nós',
      'Galeria',
      'Serviços',
      'SEO básico',
      'Animações modernas',
      'Até 5 seções personalizadas',
    ],
    popular: true,
  },
]

export default function Pacotes() {
  return (
    <section className="pacotes" id="pacotes" aria-labelledby="pacotes-heading">
      <div className="pacotes__inner">
        <header className="pacotes__header">
          <span className="pacotes__label">Pacotes</span>
          <p className="pacotes__title-accent">Landing page</p>
          <h2 id="pacotes-heading" className="pacotes__title">
            Escolha o plano{' '}
            <span className="pacotes__title-accent">perfeito.</span>
          </h2>
          <p className="pacotes__description">
            Soluções pensadas para cada estágio do seu negócio.
          </p>
        </header>

        <ul className="pacotes__grid">
          {plans.map(({ id, name, subtitle, price, features, popular }) => (
            <li
              key={id}
              className={`pacotes__card${popular ? ' pacotes__card--popular' : ''}`}
            >
              {popular && (
                <span className="pacotes__badge">
                  <span aria-hidden="true">✦</span> Mais escolhido
                </span>
              )}

              <h3 className="pacotes__card-name">{name}</h3>
              <p className="pacotes__card-subtitle">{subtitle}</p>

              <p className="pacotes__card-price">
                <span className="pacotes__card-currency">R$</span>
                <span className="pacotes__card-amount">{price}</span>
              </p>

              <a
                href="#contato"
                className={`pacotes__cta${popular ? ' pacotes__cta--gradient' : ''}`}
              >
                Quero esse pacote
              </a>

              <ul className="pacotes__features">
                {features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <aside className="pacotes__note" aria-label="Combinação de pacotes">
          <p className="pacotes__note-text">
            <span className="pacotes__note-highlight">Planos de Landing page!</span>{' '}
            Você pode combinar com os outros pacotes para criar uma solução completa para o seu
            negócio.
          </p>
        </aside>
      </div>
    </section>
  )
}
