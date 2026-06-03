import './Footer.css'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Fr4nc021' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/fr4nco021/' },
  { label: 'Instagram', href: 'https://instagram.com/codebyfranco' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__brand">
          <span className="site-footer__brand-code">CodeBy</span>
          <span className="site-footer__brand-name">Franco</span>
        </p>

        <p className="site-footer__tagline">Desenvolvido com dedicação e código</p>

        <p className="site-footer__copyright">
          © {year} Helena Franco. Todos os direitos reservados.
        </p>

        <nav className="site-footer__social" aria-label="Redes sociais">
          <ul className="site-footer__social-list">
            {socialLinks.map(({ label, href }, index) => (
              <li key={label}>
                {index > 0 && (
                  <span className="site-footer__dot" aria-hidden="true">
                    •
                  </span>
                )}
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
