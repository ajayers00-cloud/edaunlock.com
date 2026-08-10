const supportEmail = "Eda.learning.hq@gmail.com";

const helpTopics = [
  {
    number: "01",
    title: "Set up protection",
    text: "Open Settings in EDA Unlock, choose the apps or websites you want to protect, then allow Screen Time access when iOS asks.",
  },
  {
    number: "02",
    title: "Tune your challenge",
    text: "Choose the enabled learning banks, challenge length, difficulty, cooldown, and unlock duration that work for you.",
  },
  {
    number: "03",
    title: "Recover access",
    text: "Use Emergency Bypass when you need immediate access. Reset Profile removes your local setup and lets you start again.",
  },
];

const faqs = [
  {
    question: "Why does EDA Unlock ask for Screen Time permission?",
    answer:
      "EDA Unlock uses Apple’s Family Controls framework to shield only the apps, categories, and websites you select. Permission is optional until you activate protection and can be revoked in iOS Settings.",
  },
  {
    question: "Do I need an online account?",
    answer:
      "No. Your profile and password are created locally on your device. This version has no account service, advertising, third-party analytics, cloud sync, or backup restore. Resetting or replacing the device starts a new profile.",
  },
  {
    question: "How do I change protected apps or learning banks?",
    answer:
      "Open Settings inside EDA Unlock. You can update your protected selection, enabled banks, challenge rules, and unlock behavior at any time.",
  },
  {
    question: "How do I report a question or problem?",
    answer:
      "Use the feedback action in the app or email support below. The app prepares an email draft for you to review before anything is sent.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header shell">
        <a className="brand" href="#top" aria-label="EDA Unlock support home">
          <span className="brand-mark">E</span>
          <span>EDA Unlock</span>
        </a>
        <nav aria-label="Support navigation">
          <a className="desktop-nav-link" href="#help">Help</a>
          <a className="desktop-nav-link" href="#faq">FAQ</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Official support</p>
          <h1>A clearer path to<br /><em>intentional access.</em></h1>
          <p className="hero-lede">
            Find quick answers for setup, Screen Time permission, challenges,
            protected apps, and local profile recovery.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href={`mailto:${supportEmail}?subject=EDA%20Unlock%20Support`}>
              Email support <span aria-hidden="true">→</span>
            </a>
            <span>Typical response: 1–2 business days</span>
          </div>
        </div>

        <div className="hero-art" aria-label="EDA Unlock learning challenge illustration">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="phone-card">
            <div className="phone-top"><span>9:41</span><span>● ●</span></div>
            <div className="mini-label">TODAY’S PAUSE</div>
            <div className="score-ring"><strong>3</strong><span>of 5</span></div>
            <p>One thoughtful answer<br />at a time.</p>
            <div className="answer-line active" />
            <div className="answer-line" />
            <div className="answer-line short" />
          </div>
          <div className="art-badge badge-a">62 banks</div>
          <div className="art-badge badge-b">On device</div>
        </div>
      </section>

      <section className="stats-strip" aria-label="EDA Unlock facts">
        <div className="shell stats-grid">
          <div><strong>62</strong><span>learning banks</span></div>
          <div><strong>15,000+</strong><span>questions</span></div>
          <div><strong>0</strong><span>accounts or cloud restores</span></div>
        </div>
      </section>

      <section className="help-section shell" id="help">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> Start here</p>
            <h2>Quick help for<br />common moments.</h2>
          </div>
          <p>EDA Unlock keeps control with the device owner. These three paths cover most setup and recovery questions.</p>
        </div>
        <div className="topic-grid">
          {helpTopics.map((topic) => (
            <article className="topic-card" key={topic.number}>
              <span className="topic-number">{topic.number}</span>
              <h3>{topic.title}</h3>
              <p>{topic.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="faq-wrap" id="faq">
        <div className="shell faq-grid">
          <div className="faq-intro">
            <p className="eyebrow light"><span /> Questions</p>
            <h2>Good to know.</h2>
            <p>Still stuck? Send us the device model, iOS version, and a short description of what happened.</p>
            <a href={`mailto:${supportEmail}?subject=EDA%20Unlock%20Support`}>{supportEmail} <span aria-hidden="true">→</span></a>
          </div>
          <div className="faq-list">
            {faqs.map((item) => (
              <details key={item.question}>
                <summary>{item.question}<span>+</span></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer shell">
        <div className="brand"><span className="brand-mark">E</span><span>EDA Unlock</span></div>
        <p>Choose the pause. Earn the unlock.</p>
        <div><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href={`mailto:${supportEmail}`}>Contact</a></div>
        <p className="copyright">© 2026 Aiden Ayers</p>
      </footer>
    </main>
  );
}
