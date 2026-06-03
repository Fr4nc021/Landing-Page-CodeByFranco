import './Contato.css'

const EMAIL = 'contato.codebyfranco@gmail.com'
const WHATSAPP_URL = 'https://wa.me/5554991613379'
const WHATSAPP_ORCAMENTO_URL = `${WHATSAPP_URL}?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.`

const channels = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    value: 'Fale agora',
    href: WHATSAPP_URL,
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    id: 'instagram',
    label: 'Instagram',
    value: '@codebyfranco',
    href: 'https://instagram.com/codebyfranco',
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: 'email',
    label: 'Email',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    external: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 7 10-7" />
      </svg>
    ),
  },
]

export default function Contato() {
  return (
    <section className="contato" id="contato" aria-labelledby="contato-heading">
      <div className="contato__inner">
        <div className="contato__panel">
          <header className="contato__hero">
            <span className="contato__label">Contato</span>
            <h2 id="contato-heading" className="contato__title">
              Vamos criar algo{' '}
              <span className="contato__title-accent">extraordinário.</span>
            </h2>
            <p className="contato__description">
              Conte sua ideia e receba um orçamento personalizado em poucas horas.
            </p>
            <a
              href={WHATSAPP_ORCAMENTO_URL}
              className="contato__cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar orçamento
              <span className="contato__cta-arrow" aria-hidden="true">
                →
              </span>
            </a>
          </header>

          <ul className="contato__channels">
            {channels.map(({ id, label, value, href, external, icon }) => (
              <li key={id}>
                <a
                  className={`contato__channel contato__channel--${id}`}
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <span className="contato__channel-icon">{icon}</span>
                  <span className="contato__channel-label">{label}</span>
                  <span className="contato__channel-value">{value}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
