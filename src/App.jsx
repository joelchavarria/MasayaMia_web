import './App.css'

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/masayamia.ni/',
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@masayamia.ni',
  },
]

const highlights = [
  'Café y cocina con sabor local',
  'Espacio para trabajar con tu laptop',
  'Somos pet friendly',
]

function SocialIcon({ label }) {
  if (label === 'Instagram') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.3" cy="6.7" r="1" />
      </svg>
    )
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path d="M14 3v10.4a4.6 4.6 0 1 1-3.4-4.4" />
      <path d="M14 6.2c1.2 2.4 3.1 3.7 5.4 3.9" />
    </svg>
  )
}

function App() {
  const currentYear = new Date().getFullYear()

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Masaya Mía inicio">
          <img src="/brand/icon-192.png" alt="" width="48" height="48" />
          <span>Masaya Mía</span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#experiencia">Experiencia</a>
          <a href="#comunidad">Comunidad</a>
          <a href="#ubicacion">Ubicación</a>
          <a href="#redes">Redes</a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-content">
          <img
            className="hero-logo"
            src="/brand/masaya-mia-logo.png"
            alt="Masaya Mía"
            width="344"
            height="344"
          />
          <p>Café · restaurante · Masaya, Nicaragua</p>
          <h1>Café, comunidad y un espacio para volver.</h1>
          <div className="hero-actions">
            <a href="https://maps.google.com/?q=Masaya%20M%C3%ADa%20caf%C3%A9%20Masaya%20Nicaragua">
              Cómo llegar
            </a>
            <a href="#redes">Seguir en redes</a>
          </div>
        </div>
      </section>

      <section className="intro" id="experiencia">
        <div>
          <p className="eyebrow">Estos somos</p>
          <h2>Un café nacido para sentirse cercano.</h2>
        </div>
        <p>
          Masaya Mía reúne café, comida y una experiencia tranquila para venir
          con familia, amistades, tu laptop o una buena conversación. Un rincón
          con identidad local, sabores generosos y ambiente relajado.
        </p>
      </section>

      <section className="visual-grid" aria-label="Experiencia Masaya Mía">
        <img src="/media/executive-plates.jpg" alt="Platos servidos en Masaya Mía" />
        <div className="feature-panel">
          <p className="eyebrow">Lo que encontrás</p>
          <ul>
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <img src="/media/coffee-dessert.jpg" alt="Café y postre en Masaya Mía" />
      </section>

      <section className="community" id="comunidad">
        <div className="community-copy">
          <p className="eyebrow">Más que café</p>
          <h2>Si tu oficina cabe en una mochila, este espacio es para ti.</h2>
          <p>
            Ven con tu laptop martes, miércoles y jueves de 8:00 a.m. a
            11:00 a.m. y recibí siempre el primer café gratis. Aplican
            restricciones.
          </p>
        </div>
        <div className="community-media">
          <video
            src="/media/remote-work.mp4"
            poster="/media/remote-work-promo.jpg"
            controls
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Persona trabajando con laptop en Masaya Mía"
          />
        </div>
      </section>

      <section className="cozy-plans" aria-label="Planes cozy en Masaya Mía">
        <div className="cozy-media">
          <video
            src="/media/cozy-plans.mp4"
            controls
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Planes cozy en Masaya Mía"
          />
        </div>
        <div>
          <p className="eyebrow">Días grises</p>
          <h2>Planes cozy para quedarse un rato más.</h2>
          <p>
            Chocolate caliente, café y un ambiente tranquilo para hacer pausa,
            conversar o simplemente disfrutar Masaya Mía con calma.
          </p>
        </div>
      </section>

      <section className="pet-friendly" aria-label="Masaya Mía es pet friendly">
        <div>
          <p className="eyebrow">Pet friendly</p>
          <h2>Tu compañía también es bienvenida.</h2>
          <p>
            En Masaya Mía creemos en los encuentros tranquilos, las conexiones
            nuevas y los planes que se disfrutan mejor acompañados.
          </p>
        </div>
        <img src="/media/pet-friendly.jpg" alt="Masaya Mía es pet friendly" />
      </section>

      <section className="location" id="ubicacion">
        <div>
          <p className="eyebrow">Visitanos</p>
          <h2>En el centro de Masaya.</h2>
          <p>
            Administración de Renta, 1/2 cuadra al norte. Contiguo a Farmacia,
            Masaya, Nicaragua.
          </p>
        </div>
        <div className="details">
          <div>
            <span>Horario</span>
            <strong>Todos los días · 7:30 a.m. - 9:00 p.m.</strong>
          </div>
          <div>
            <span>Teléfono</span>
            <strong>7631-8743</strong>
          </div>
          <a href="https://maps.google.com/?q=XWG3%2BG82%20Masaya%20M%C3%ADa%20caf%C3%A9">
            Abrir en Google Maps
          </a>
        </div>
      </section>

      <section className="social-section" id="redes">
        <p className="eyebrow">Seguinos</p>
        <h2>La vida de Masaya Mía también pasa en redes.</h2>
        <div className="social-links">
          {socialLinks.map((link) => (
            <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
              <SocialIcon label={link.label} />
              {link.label}
            </a>
          ))}
        </div>
      </section>

      <footer>
        <span>© {currentYear} Masaya Mía.</span>
        <span>Hecho para conectar la marca con quienes la buscan.</span>
      </footer>
    </main>
  )
}

export default App
