import { useState } from 'react';
import { MapPin, ShieldCheck, HeartHandshake, Eye, Sparkles, MessageCircle, ArrowRight, Award } from 'lucide-react';
import { useEnquiry } from './EnquiryModal.jsx';
import { whatsappLink } from '../utils/contact.js';

export default function FounderMessage({ id = 'founder-message', compact = false }) {
  const { openEnquiry } = useEnquiry();
  const [activeTab, setActiveTab] = useState('all');

  const founderPhoto = '/assets/aistudio/WhatsApp_Image_2026-10-01_at_11.06.48_PM_989d1a41.jpeg';
  const coFounderPhoto = '/assets/aistudio/WhatsApp_Image_2026-11-04_at_1.17.24_AM_dfe3c6d8.jpeg';

  const leaders = [
    {
      id: 'founder',
      name: 'Vamshi Raj',
      role: 'Founder, Sri Vidhya Overseas',
      badge: 'Founder & Mentor',
      pillClass: '',
      photo: founderPhoto,
      photoPosition: 'center 18%',
      eyebrow: 'Founder’s Vision',
      heading: 'A Message from the Founder',
      pullQuote: '“Your dreams deserve the right direction. Let’s build your future together!”',
      intro: 'Hello! I’m Vamshi Raj, Founder of Sri Vidhya Overseas.',
      paragraphs: [
        'I believe that every student deserves the opportunity to dream big and achieve a successful future through quality education. My journey in the education field has strengthened my passion for guiding students and helping them explore opportunities beyond borders.',
        'I started Sri Vidhya Overseas with a simple vision: to make studying abroad easier, more accessible, and more transparent for students and their parents.',
        'For me, overseas education is not just about securing university admissions. It is about understanding each student’s dreams, choosing the right destination, providing honest guidance, and supporting them throughout their journey.',
        'At Sri Vidhya Overseas, I am committed to building trust, maintaining transparency, and delivering personal attention to every student who places their future in our hands.',
        'I want every student who walks through our doors to feel confident that they have the right guidance and support at every step.',
      ],
      closing: 'Your dreams deserve the right direction. Let’s build your future together!',
      signatureName: 'Vamshi Raj',
      signoffRole: 'Founder, Sri Vidhya Overseas',
      ctaText: 'Book Founder Consultation',
      ctaInterest: 'Founder Consultation',
      waPrompt: 'Hi Vamshi sir, I read your message on Sri Vidhya Overseas and would like to consult on my study abroad journey.',
    },
    {
      id: 'cofounder',
      name: 'Pruthvi Raj Azmeera',
      role: 'Co-Founder – Sri Vidhya Overseas',
      badge: 'Co-Founder & Mentor',
      pillClass: 'cofounder',
      photo: coFounderPhoto,
      photoPosition: 'center 20%',
      eyebrow: 'Co-Founder’s Vision',
      heading: 'A Message from the Co-Founder',
      pullQuote: '“Together, we work towards one vision: Making global education accessible and helping students turn their dreams into reality.”',
      intro: 'Hello! I’m Pruthvi Raj Azmeera, Co-Founder of Sri Vidhya Overseas.',
      paragraphs: [
        'As Co-Founder of Sri Vidhya Overseas, I am committed to helping students explore international education opportunities and make informed decisions about their future.',
        'I believe in building trust, providing reliable guidance, and creating opportunities that help students achieve their academic and career ambitions.',
        'Together, we work towards one vision: Making global education accessible and helping students turn their dreams into reality.',
      ],
      closing: 'Together, we work towards one vision: Making global education accessible and helping students turn their dreams into reality.',
      signatureName: 'Pruthvi Raj Azmeera',
      signoffRole: 'Co-Founder – Sri Vidhya Overseas',
      ctaText: 'Connect with Co-Founder',
      ctaInterest: 'Co-Founder Consultation',
      waPrompt: 'Hi Pruthvi sir, I read your message on Sri Vidhya Overseas and would like to consult on my study abroad journey.',
    },
  ];

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

  const visibleLeaders = activeTab === 'all' ? leaders : leaders.filter((l) => l.id === activeTab);

  return (
    <section id={id} className="founder-section" aria-labelledby="leadership-heading">
      <div className="container">
        {/* Section Header */}
        <div className="founder-header">
          <div className="founder-header-eyebrow">
            <Sparkles size={14} aria-hidden="true" />
            <span>Leadership &amp; Vision</span>
          </div>
          <h2 id="leadership-heading" className="founder-header-title">
            Guidance from Our Leadership
          </h2>
          <p className="founder-header-sub">
            Built on trust, transparency, and personal mentorship. Hear directly from the founders of Sri Vidhya Overseas about our commitment to your future.
          </p>
        </div>

        {/* Leadership Switcher Tabs */}
        <div className="founder-tabs-wrap" role="tablist" aria-label="Leadership messages selector">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'all'}
            className={`founder-tab-btn ${activeTab === 'all' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            <Sparkles size={15} aria-hidden="true" />
            <span>Both Leaders</span>
            <span className="founder-tab-role">All</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'founder'}
            className={`founder-tab-btn ${activeTab === 'founder' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('founder')}
          >
            <img src={founderPhoto} alt="Vamshi Raj" className="founder-tab-avatar" />
            <span>Vamshi Raj</span>
            <span className="founder-tab-role">Founder</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'cofounder'}
            className={`founder-tab-btn ${activeTab === 'cofounder' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('cofounder')}
          >
            <img src={coFounderPhoto} alt="Pruthvi Raj Azmeera" className="founder-tab-avatar" />
            <span>Pruthvi Raj Azmeera</span>
            <span className="founder-tab-role">Co-Founder</span>
          </button>
        </div>

        {/* Founder & Co-Founder Cards Stack */}
        <div className="founder-cards-stack">
          {visibleLeaders.map((leader) => (
            <article key={leader.id} id={`leader-${leader.id}`} className="founder-card reveal">
              {/* Left Column: Portrait & Credentials */}
              <div className="founder-media-col">
                <div className="founder-img-wrapper">
                  <img
                    src={leader.photo}
                    alt={`${leader.name}, ${leader.role}`}
                    className="founder-img"
                    style={{ objectPosition: leader.photoPosition }}
                    loading="lazy"
                    width="720"
                    height="936"
                  />
                  <span className="founder-verified-badge">
                    <Award size={16} aria-hidden="true" />
                    <span>{leader.badge}</span>
                  </span>
                </div>

                <div className="founder-profile-meta">
                  <div className="founder-name-head">
                    <h3 className="founder-name-title">{leader.name}</h3>
                    <span className={`founder-badge-pill ${leader.pillClass}`}>{leader.badge.split(' ')[0]}</span>
                  </div>
                  <p className="founder-role-sub">{leader.role}</p>
                  <div className="founder-loc-row">
                    <MapPin size={15} aria-hidden="true" />
                    <span>Warangal &amp; Hyderabad, Telangana</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Letter & Vision */}
              <div className="founder-letter-col">
                <div className="founder-eyebrow">
                  <span className="founder-eyebrow-icon">
                    <Sparkles size={14} aria-hidden="true" />
                  </span>
                  <span>{leader.eyebrow}</span>
                </div>

                <h3 className="founder-heading">
                  {leader.heading}
                </h3>
                <div className="founder-byline">
                  <strong>{leader.name}</strong> | {leader.role}
                </div>

                {/* Featured Quote Highlight */}
                <blockquote className="founder-pull-quote">
                  <p className="founder-pull-quote-text">
                    {leader.pullQuote}
                  </p>
                </blockquote>

                {/* Complete Founder Letter Body */}
                <div className="founder-body">
                  <p>
                    <strong>{leader.intro}</strong>
                  </p>
                  {leader.paragraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

                {/* Sign-off & Actions */}
                <div className="founder-signoff">
                  <div className="founder-sign-text">
                    <span className="founder-warm-regards">Warm regards,</span>
                    <span className="founder-signature-render">{leader.signatureName}</span>
                    <span className="founder-sign-role">{leader.signoffRole}</span>
                  </div>

                  <div className="founder-actions">
                    <button
                      type="button"
                      className="btn btn-accent"
                      onClick={() => openEnquiry({ interest: leader.ctaInterest })}
                    >
                      {leader.ctaText} <ArrowRight size={16} aria-hidden="true" />
                    </button>
                    <a
                      href={whatsappLink(leader.waPrompt)}
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
          ))}
        </div>

        {/* 3 Core Shared Pillars */}
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
