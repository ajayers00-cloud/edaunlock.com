import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy information for the EDA Unlock iOS app.",
};

const supportEmail = "Eda.learning.hq@gmail.com";

export default function PrivacyPage() {
  return (
    <main className="privacy-main">
      <header className="site-header shell">
        <Link className="brand" href="/" aria-label="EDA Unlock support home"><span className="brand-mark">E</span><span>EDA Unlock</span></Link>
        <nav aria-label="Support navigation"><Link className="desktop-nav-link" href="/">Support home</Link><a href="/terms">Terms</a><a href={`mailto:${supportEmail}`}>Contact</a></nav>
      </header>
      <section className="privacy-hero shell">
        <p className="eyebrow"><span /> Privacy</p>
        <h1>Your learning stays<br />with you.</h1>
        <p>EDA Unlock is designed as a local-first utility. This page explains what the current iOS version stores, when information can leave your device, and the controls available to you.</p>
      </section>
      <div className="privacy-content shell">
        <aside className="privacy-meta">
          Effective<br /><strong>August 4, 2026</strong><br /><br />
          Version<br /><strong>2026-08-04.1</strong>
        </aside>
        <article className="privacy-copy">
          <section><h2>At a glance</h2><p>EDA Unlock does not require an online account and does not include advertising, tracking, third-party analytics, or an EDA-operated cloud service in this version. Your profile, settings, learning activity, and Screen Time configuration stay on your device unless you deliberately send a support email.</p></section>

          <section><h2>Information stored on your device</h2><p>The app stores the information needed for your chosen experience: an optional display name, local password verifier and login-throttle record, enabled learning banks, challenge settings, learning progress, answer and unlock history, optional bypass history, and the versions and acceptance time of the Terms and Privacy Policy you acknowledged.</p><p>These records are device-only and are excluded from backup and cross-device restore. EDA Unlock has no v1 account-recovery or migration service. A replacement, restored, or newly installed device therefore starts with a new profile.</p></section>

          <section><h2>Screen Time and protected selections</h2><p>If you activate protection, EDA Unlock uses Apple’s Family Controls, Device Activity, and Managed Settings frameworks. Apple gives the app opaque selection tokens for the apps, categories, and websites you choose. EDA Unlock uses those tokens only to operate your selected shields; it does not turn them into browsing history or read the contents of other apps.</p><p>The app and its Screen Time extensions share the minimum local operational state needed to apply a shield, run a challenge, and relock. When a shield is shown, the app may temporarily store the blocked app’s display name or a web domain so it can offer a return link. That origin record stays local, is not a bundle identifier or browsing history, expires within 15 minutes, and is removed on expiry, completion, bypass, or profile reset.</p></section>

          <section><h2>Passwords and device authentication</h2><p>EDA Unlock stores a salted password-derived verifier—not the plaintext password—in Apple’s Keychain. Login throttling is also stored in device-only protected storage. When Face ID, Touch ID, or the device passcode is offered for an authorized reset, iOS performs the check; EDA Unlock receives only the result and does not receive or store biometric data.</p></section>

          <section><h2>Feedback and question reports</h2><p>Send Feedback and Flag Question prepare an editable email addressed to <a href={`mailto:${supportEmail}`}>{supportEmail}</a>. Nothing is sent until you review the complete draft and choose Send in your email app.</p><p>A general feedback draft includes what you type plus the app version/build, build channel, iOS version, and generic device model. A question report also includes the question ID, bank, level, type, prompt, displayed choices, expected answer, source label, and review status. The app does not automatically attach your profile, password data, Screen Time selection, answer history, unlock history, or bypass history.</p><p>Your email provider handles delivery, and the recipient mailbox is operated through Google. Delivery may include your sender address and other information visible in the composer. Support messages are used only to respond, investigate content or rights reports, protect the service, and improve EDA Unlock.</p></section>

          <section><h2>Retention and deletion</h2><p>On-device records remain until you reset them or remove the app under iOS behavior. Support and question-report email is kept only while the request is being handled and for no more than 90 days after it is closed, unless law, a security or fraud investigation, or an active dispute requires longer. A verified deletion request will be handled within 30 days where legally permitted; provider backups may expire on the provider’s normal schedule.</p><ul><li>Change or remove protected selections inside EDA Unlock.</li><li>Pause the guard and revoke Screen Time permission through iOS Settings.</li><li>Reset learning progress while keeping the profile.</li><li>Use Reset Profile to remove EDA Unlock’s local profile, settings, histories, Screen Time selection, extension state, and credential.</li><li>Email <a href={`mailto:${supportEmail}?subject=EDA%20Unlock%20Deletion%20Request`}>{supportEmail}</a> to request deletion of a support message.</li></ul></section>

          <section><h2>Public support-site requests</h2><p>These Support, Privacy, and Terms pages use no account, advertising, analytics, or tracking cookies. Like ordinary web hosting, the hosting infrastructure necessarily processes the requested path, IP address, timestamp, and browser/network headers and may retain limited request and security logs for delivery, abuse prevention, and reliability. Those web requests are not linked to your local EDA Unlock profile.</p></section>

          <section><h2>Apple and other providers</h2><p>Apple independently processes information associated with App Store downloads, purchases, TestFlight, device services, and operating-system diagnostics under Apple’s policies. Your chosen email provider, Google as the recipient mailbox provider, and the support-site hosting infrastructure process information needed for their services under their own terms. EDA Unlock does not sell personal information or share it for advertising.</p></section>

          <section><h2>Children</h2><p>EDA Unlock is designed for a general audience. Some learning content may cover topics intended for more mature users. Parents and guardians should supervise younger users to decide what content is appropriate for them.</p></section>

          <section><h2>Changes and contact</h2><p>A material change to app data practices will require updated in-app notice and, where appropriate, renewed acknowledgement before that version is used. Questions, privacy requests, and content-rights concerns can be sent to <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.</p></section>
        </article>
      </div>
      <footer className="site-footer shell"><div className="brand"><span className="brand-mark">E</span><span>EDA Unlock</span></div><p>Choose the pause. Earn the unlock.</p><div><Link href="/">Support</Link><a href="/terms">Terms</a><a href={`mailto:${supportEmail}`}>Contact</a></div><p className="copyright">© 2026 Aiden Ayers</p></footer>
    </main>
  );
}
