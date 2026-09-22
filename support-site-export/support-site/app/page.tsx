import release from "../content/release.json";

const supportEmail = "Eda.learning.hq@gmail.com";

const helpTopics = [
  {
    number: "01",
    title: "Set up protection",
    text: "Start with Screen Time Guard on Home. Allow Screen Time access, choose the apps, categories, or websites to guard, select a learning bank, then activate protection.",
  },
  {
    number: "02",
    title: "Tune your challenge",
    text: "In Library, activate up to four question banks. Questions alternate between active banks, each with its own progress. Use Configure to adjust your challenge and cooldown.",
  },
  {
    number: "03",
    title: "Recover access",
    text: "Emergency Bypass is optional and off by default. If enabled, use the authentication offered in the app. Reset Profile removes your local setup and history; it does not restore them.",
  },
];

const faqs = [
  {"question": "Can I use more than one question bank?", "answer": "Yes. Activate up to four banks in Library. With more than one active bank, questions alternate every question and progress is tracked separately for each bank. Library shows which banks are active."},
  {"question": "How do starting grades and difficulty work?", "answer": "When selecting a K–12 bank in Library or during first setup, choose your starting grade. After that, progression is automatic: four consecutive correct answers advance the level and three consecutive wrong answers lower it, within the bank’s available levels. There is no manual move-up or move-down prompt."},
  {"question": "How long does an unlock last?", "answer": "New profiles start with a 30-minute cooldown and a target of two correct answers. You can adjust the available settings in Configure. Existing profiles keep their saved settings; special challenge modes can use different targets."},
  {"question": "What happens when I answer incorrectly?", "answer": "In the redirected unlock challenge, your wrong choice appears yellow and the correct answer appears green. Read the explanation, then choose Next Question. The challenge uses the question’s authored choices, from two to four, and adjusts or scrolls longer content."},
  {"question": "Why does an unlock challenge differ from practice?", "answer": "The compact challenge opened from a guarded app uses supported multiple-choice questions. Board-style activities such as Chess and Sudoku use the full practice experience. Available question formats can differ between these two paths."},
  {"question": "Will EDA send me back to the guarded app?", "answer": "After a successful challenge, the guard is temporarily lowered. In this build, switch back to the app you wanted to use yourself; automatic return to every guarded app is not available."},
  {"question": "Is Emergency Bypass always available?", "answer": "No. It is optional and off by default. If enabled, it requires the authentication offered by the app. It is not a guarantee of immediate access. Keep another safe way to reach emergency communications."},
  {"question": "Who is EDA Unlock for?", "answer": "EDA Unlock is intended for adults age 18 and older. K–12 labels describe educational material and starting levels, not an app intended for children. See the Terms for content and Screen Time limitations."},
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
      "Use Edit Guarded Apps at the top of Configure to change protected items. Choose learning banks in Library. Once initial setup is complete, the Screen Time Guard checklist moves from Home to the bottom of Configure.",
  },
  {
    question: "How do I report a question or problem?",
    answer:
      "Use Chat for feedback, Flag Question to report a question, or email support below. Review the editable email draft and choose Send; nothing is sent automatically.",
  },
];

export default function Home() {
  return (
    <main id="main-content">
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
            <span>Include your app version and iOS version</span>
          </div>
        </div>

        <div className="hero-art" aria-label="EDA Unlock learning challenge illustration">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="phone-card">
            <div className="phone-top"><span>9:41</span><span>● ●</span></div>
            <div className="mini-label">UNLOCK CHALLENGE</div>
            <div className="mini-progress">Science <span>0 / 2 correct</span></div>
            <p>Which planet is closest to the Sun?</p>
            <div className="answer-line">A <span>Venus</span></div>
            <div className="answer-line active">B <span>Mercury</span></div>
            <div className="answer-line">C <span>Earth</span></div>
            <div className="answer-line">D <span>Mars</span></div>
            <div className="mini-caption">Illustrative challenge</div>
          </div>
          <div className="art-badge badge-a">{release.bankCount} banks</div>
          <div className="art-badge badge-b">On device</div>
        </div>
      </section>

      <section className="stats-strip" aria-label="EDA Unlock facts">
        <div className="shell stats-grid">
          <div><strong>{release.bankCount}</strong><span>learning banks</span></div>
          <div><strong>{release.authoredQuestionCount.toLocaleString("en-US")}</strong><span>authored questions</span></div>
          <div><strong>0</strong><span>accounts or cloud restores</span></div>
        </div>
      </section>

      <p className="release-note shell">Library counts reflect version {release.appVersion}, build {release.build}. Generated practice variations are separate from authored questions.</p>

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
                <summary>{item.question}<span aria-hidden="true">+</span></summary>
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
