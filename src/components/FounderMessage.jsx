import { MapPin, ShieldCheck, HeartHandshake, Eye, Sparkles, Phone, MessageCircle, ArrowRight, Award } from 'lucide-react';
import { useEnquiry } from './EnquiryModal.jsx';
import { telLink, whatsappLink } from '../utils/contact.js';

export default function FounderMessage({ id = 'founder-message', compact = false }) {
  const { openEnquiry } = useEnquiry();
  const founderPhoto = '/assets/aistudio/WhatsApp_Image_2026-10-01_at_11.06.48_PM_989d1a41.jpeg';

  const pillars = [
    {
      icon: Eye,
      title: 'Complete Transparency',
      desc: 'Written cost sheets, direct tuition payments to universities, and zero hidden charges or surprise commissions.',
    },
    {
      icon: HeartHandshake,
      title: 'Personalized Attention',
      desc: 'Direct mentorship tailored to each student’s academic aptitude, career aspirations, and family budget.',
    },
    {
      icon: ShieldCheck,
      title: 'Parent Trust & Care',
      desc: 'Active involvement of parents from first consultation through visa filing, flight departure, and university hostel settlement.',
    },
  ];

  return (
    <section id={id} className="founder-section" aria-labelledby="founder-heading">
      <div className="container">
        <article className="founder-card reveal">
          {/* Left Column: Founder Portrait & Credentials */}
          <div className="founder-media-col">
            <div className="founder-img-wrapper">
              <img
                src={founderPhoto}
                alt="Vamshi Raj, Founder of Sri Vidhya Overseas"
                className="founder-img"
                loading="lazy"
                width="720"
                height="936"
              />
              <span className="founder-verified-badge">
                <Award size={16} aria-hidden="true" />
                <span>Founder &amp; Mentor</span>
              </span>
            </div>

            <div className="founder-profile-meta">
              <div className="founder-name-head">
                <h3 className="founder-name-title">Vamshi Raj</h3>
                <span className="founder-badge-pill">Leadership</span>
              </div>
              <p className="founder-role-sub">Founder, Sri Vidhya Overseas</p>
              <div className="founder-loc-row">
                <MapPin size={15} aria-hidden="true" />
                <span>Warangal &amp; Hyderabad, Telangana</span>
              </div>
            </div>
          </div>

          {/* Right Column: Founder's Letter & Vision */}
          <div className="founder-letter-col">
            <div className="founder-eyebrow">
              <span className="founder-eyebrow-icon">
                <Sparkles size={14} aria-hidden="true" />
              </span>
              <span>Leadership &amp; Vision</span>
            </div>

            <h2 id="founder-heading" className="founder-heading">
              A Message from the Founder
            </h2>
            <div className="founder-byline">
              <strong>Vamshi Raj</strong> | Founder, Sri Vidhya Overseas
            </div>

            {/* Featured Quote Highlight */}
            <blockquote className="founder-pull-quote">
              <p className="founder-pull-quote-text">
                &ldquo;Your dreams deserve the right direction. Let&rsquo;s build your future together!&rdquo;
              </p>
            </blockquote>

            {/* Complete Founder Letter */}
            <div className="founder-body">
              <p>
                <strong>Hello! I&rsquo;m Vamshi Raj, Founder of Sri Vidhya Overseas.</strong>
              </p>
              <p>
                I believe that every student deserves the opportunity to dream big and achieve a successful
                future through quality education. My journey in the education field has strengthened my passion
                for guiding students and helping them explore opportunities beyond borders.
              </p>
              <p>
                I started Sri Vidhya Overseas with a simple vision: to make studying abroad easier, more
                accessible, and more transparent for students and their parents.
              </p>
              <p>
                For me, overseas education is not just about securing university admissions. It is about
                understanding each student&rsquo;s dreams, choosing the right destination, providing honest
                guidance, and supporting them throughout their journey.
              </p>
              <p>
                At Sri Vidhya Overseas, I am committed to building trust, maintaining transparency, and
                delivering personal attention to every student who places their future in our hands.
              </p>
              <p>
                I want every student who walks through our doors to feel confident that they have the right
                guidance and support at every step.
              </p>
            </div>

            {/* Sign-off & Actions */}
            <div className="founder-signoff">
              <div className="founder-sign-text">
                <span className="founder-warm-regards">Warm regards,</span>
                <span className="founder-signature-render">Vamshi Raj</span>
                <span className="founder-sign-role">Founder, Sri Vidhya Overseas</span>
              </div>

              <div className="founder-actions">
                <button
                  type="button"
                  className="btn btn-accent"
                  onClick={() => openEnquiry({ interest: 'Founder Consultation' })}
                >
                  Book Founder Consultation <ArrowRight size={16} aria-hidden="true" />
                </button>
                <a
                  href={whatsappLink('Hi Vamshi sir, I read your message on Sri Vidhya Overseas and would like to consult on my study abroad journey.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  <span>WhatsApp Directly</span>
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* 3 Core Pillars below the message card */}
        <div className="founder-pillars-grid">
          {pillars.map((pillar) => {
            const IconComp = pillar.icon;
            return (
              <div key={pillar.title} className="founder-pillar-card reveal">
                <div className="founder-pillar-icon-box">
                  <IconComp size={20} aria-hidden="true" />
                </div>
                <h3 className="founder-pillar-title">{pillar.title}</h3>
                <p className="founder-pillar-desc">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
