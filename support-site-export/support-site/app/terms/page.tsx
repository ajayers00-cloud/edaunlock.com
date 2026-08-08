import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use and important content notices for the EDA Unlock iOS app.",
};

const supportEmail = "Eda.learning.hq@gmail.com";

export default function TermsPage() {
  return (
    <main className="privacy-main">
      <header className="site-header shell">
        <Link className="brand" href="/" aria-label="EDA Unlock support home"><span className="brand-mark">E</span><span>EDA Unlock</span></Link>
        <nav aria-label="Support navigation"><Link className="desktop-nav-link" href="/">Support home</Link><a href="/privacy">Privacy</a><a href={`mailto:${supportEmail}`}>Contact</a></nav>
      </header>

      <section className="privacy-hero shell">
        <p className="eyebrow"><span /> Terms of Use</p>
        <h1>Know the limits<br />before you unlock.</h1>
        <p>These Terms explain EDA Unlock&apos;s purpose, the limits of its Screen Time controls, and the important boundaries around its educational content.</p>
      </section>

      <div className="privacy-content shell">
        <aside className="privacy-meta">
          Effective<br /><strong>August 4, 2026</strong><br /><br />
          Version<br /><strong>2026-08-04.1</strong>
        </aside>

        <article className="privacy-copy">
          <section>
            <h2>Agreement and App Store license</h2>
            <p>These Terms are between you and the App Store seller or developer responsible for EDA Unlock. By choosing “I Agree” in the app or by continuing to use it, you agree to these Terms. If you do not agree, do not use the app.</p>
            <p>These Terms supplement Apple&apos;s <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">Standard Licensed Application End User License Agreement</a>, which governs the App Store license. Apple is not a party to these supplemental Terms and is not responsible for EDA Unlock or its question content. The Standard EULA and any rights that cannot be waived under applicable law control if there is a conflict.</p>
            <p>When you accept, EDA Unlock stores this Terms version and the acceptance date and time on your device. It uses that local record to determine whether updated Terms need your review and does not automatically send the record to an EDA Unlock server.</p>
          </section>

          <section>
            <h2>Audience</h2>
            <p>EDA Unlock is designed for a general audience. The learning library covers a broad range of educational and professional topics, some of which may be intended for mature users. Parents and guardians should supervise younger users and determine which content is appropriate for them.</p>
          </section>

          <section className="terms-notice">
            <h2>Important safety and professional-content notice</h2>
            <p>The question library is for general education only. It is not medical, emergency, legal, tax, financial, investment, accounting, or other professional advice. Do not rely on EDA Unlock for patient care, emergencies, filings, deadlines, contracts, transactions, investments, or other real-world professional decisions.</p>
          </section>

          <section>
            <h2>What EDA Unlock does</h2>
            <p>EDA Unlock is a local-first self-control and study utility. It lets a device owner voluntarily use Apple Screen Time features to place friction before selected apps, categories, or websites. A learning challenge or the optional emergency bypass can create a temporary unlock.</p>
            <p>EDA Unlock is not parental surveillance, enterprise device management, addiction treatment, an emergency-safety system, or guaranteed access-control software.</p>
          </section>

          <section>
            <h2>Screen Time and emergency limits</h2>
            <p>EDA Unlock relies on Apple&apos;s Family Controls, Screen Time, Device Activity, Managed Settings, device permissions, and iOS behavior. Those systems may be unavailable, delayed, changed, interrupted, or revoked. EDA Unlock does not guarantee that a shield will always be applied, that it will be immediate, or that a temporary unlock will relock at an exact time.</p>
            <p>The device owner can revoke authorization, change iOS settings, delete the app, or use Apple recovery controls. EDA Unlock provides helpful friction, not tamper-proof enforcement.</p>
            <p>Do not rely on EDA Unlock where delayed access to your phone could create danger, including while driving, operating machinery, caring for another person, or responding to an emergency. Maintain another safe way to reach emergency communications. In an emergency, call your local emergency-services number.</p>
          </section>

          <section>
            <h2>Education and certification limits</h2>
            <p>Questions, explanations, scores, streaks, levels, and progress indicators are for general learning and personal reflection. They are not proof of knowledge, competence, qualification, or professional readiness.</p>
            <p>EDA Unlock is not an accredited school, testing organization, certification provider, or continuing-education provider. It does not provide professional, licensing, certification, or continuing-education credit and does not guarantee exam passage, admission, employment, professional competence, or any other outcome.</p>
          </section>

          <section>
            <h2>Medical and emergency-care content</h2>
            <p>Medical, nursing, pharmacy, fitness, nutrition, EMT, paramedic, first-aid, and emergency-care material is general educational information. It is not medical advice, diagnosis, treatment, prescribing guidance, patient-specific clinical decision support, or a substitute for current accredited training.</p>
            <p>Do not use EDA Unlock to make decisions about a patient, medication, dosage, diagnosis, treatment, or emergency response. Do not delay or disregard professional care because of anything in the app. Consult an appropriately licensed healthcare professional before making medical decisions. In an emergency, contact local emergency services and follow current instructions from qualified responders.</p>
          </section>

          <section>
            <h2>Legal and tax content</h2>
            <p>Legal and tax material is general educational information, not legal advice, tax advice, filing guidance, or an interpretation of your rights or obligations. Using EDA Unlock does not create an attorney-client, accountant-client, tax-preparer, or other professional relationship.</p>
            <p>Laws, regulations, filing rules, deadlines, and interpretations vary by jurisdiction and change over time. Verify current official sources and consult a qualified professional familiar with your circumstances.</p>
          </section>

          <section>
            <h2>Financial and investment content</h2>
            <p>Financial, accounting, investing, trading, risk, real-estate, and business material is educational only. It is not personalized financial, investment, securities, accounting, or fiduciary advice and is not an offer, recommendation, endorsement, or solicitation to buy or sell anything.</p>
            <p>EDA Unlock does not consider your goals, finances, tax position, risk tolerance, or circumstances. Investments can lose some or all of their value. Consult an appropriately qualified professional and review current official materials before making financial decisions.</p>
          </section>

          <section>
            <h2>Accuracy and changing information</h2>
            <p>EDA Unlock may make reasonable efforts to review and correct content, but it does not guarantee that every question, answer, explanation, date, source label, or jurisdiction is complete, current, or error-free. Professional standards, laws, medical guidance, tax rules, technologies, and market practices can change.</p>
            <p>A content status such as “reviewed” does not mean that a government agency, licensing body, examination owner, or other third party approved the material. Verify safety-sensitive and time-sensitive information using current authoritative sources.</p>
          </section>

          <section>
            <h2>No affiliation or endorsement</h2>
            <p>EDA Unlock is an independent product. References to third-party names, products, standards, professional bodies, regulators, schools, examinations, or trademarks identify subject matter only.</p>
            <p>EDA Unlock is not sponsored, endorsed, approved, certified, or operated by Apple, Microsoft, an examination owner, a certification body, a professional association, a regulator, a school, or another referenced organization. All third-party trademarks belong to their respective owners.</p>
          </section>

          <section>
            <h2>Alcohol and poker content</h2>
            <p>Alcohol, bartending, wine, and poker material is presented for general education. EDA Unlock does not offer real-money gambling and does not encourage underage drinking, excessive alcohol consumption, wagering, or unlawful conduct. You are responsible for following applicable age restrictions and local law.</p>
          </section>

          <section>
            <h2>Responsible use and intellectual property</h2>
            <p>Your right to use EDA Unlock is personal, limited, and subject to the applicable App Store license. Do not use the app unlawfully or unlawfully copy, scrape, extract, republish, sell, sublicense, disrupt, reverse engineer, or misuse the app or question library. These restrictions apply only to the extent permitted by law and do not transfer ownership of the app or third-party materials to you.</p>
            <p>Report a content-rights concern to <a href={`mailto:${supportEmail}?subject=EDA%20Unlock%20Content%20Rights`}>{supportEmail}</a> with enough information to identify the material and explain the concern.</p>
          </section>

          <section>
            <h2>Feedback, support, and privacy</h2>
            <p>Feedback is optional. When you send feedback or flag a question, EDA Unlock prepares an email that you can review and edit before sending. Your email provider handles delivery under its own terms. Do not include passwords, confidential records, unnecessary medical or financial details, or information you do not have permission to share.</p>
            <p>By submitting feedback, you permit the App Store seller or developer to use it as reasonably needed to respond, investigate reported content, correct the library, and improve EDA Unlock. There is no obligation to implement or pay for a suggestion.</p>
            <p>The current app does not require an online account and does not include advertising, tracking, third-party analytics, EDA Unlock cloud sync, or backup restore. V1 profile and progress records are device-only. Read the <a href="/privacy">Privacy notice</a> for details about local storage, temporary shield-origin data, optional email, provider handling, retention, deletion controls, and Apple services.</p>
          </section>

          <section>
            <h2>TestFlight, availability, and changes</h2>
            <p>A TestFlight or other prerelease build may contain defects, incomplete features, inaccurate content, or behavior that changes before release. Do not rely on a prerelease build for safety-critical, medical, legal, tax, financial, or emergency purposes. Beta access may end without notice and is also subject to Apple&apos;s TestFlight terms.</p>
            <p>Features, compatibility, question content, and availability may change to correct errors, improve safety, comply with law, or respond to Apple platform changes. Material changes to these Terms will be identified with a new version and presented for acceptance where required.</p>
          </section>

          <section>
            <h2>Ending use, warranties, and responsibility</h2>
            <p>You may end your use by resetting your local profile, stopping use, and deleting the app. V1 state is device-only and is not designed to migrate or restore. Resetting or deleting EDA Unlock does not necessarily delete records independently held by Apple, an email provider, the support mailbox provider, or web-hosting infrastructure.</p>
            <p>Subject to the Apple Standard EULA and to the fullest extent permitted by law, EDA Unlock is provided “as is” and “as available.” No guarantee is made of uninterrupted operation, error-free content, a particular educational result, continuous Screen Time protection, exact relocking, or suitability for professional or safety-critical use.</p>
            <p>Nothing in these Terms excludes a warranty, remedy, liability, or consumer right that applicable law does not permit to be excluded. Matters these supplemental Terms do not address remain subject to the Apple Standard EULA and applicable law.</p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>Questions about these Terms or EDA Unlock can be sent to <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.</p>
          </section>
        </article>
      </div>

      <footer className="site-footer shell"><div className="brand"><span className="brand-mark">E</span><span>EDA Unlock</span></div><p>Choose the pause. Earn the unlock.</p><div><Link href="/">Support</Link><a href="/privacy">Privacy</a><a href={`mailto:${supportEmail}`}>Contact</a></div><p className="copyright">© 2026 Aiden Ayers</p></footer>
    </main>
  );
}
