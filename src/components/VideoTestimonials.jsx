import { useState } from 'react';
import { Play, Youtube, ArrowRight, Quote, MapPin, GraduationCap } from 'lucide-react';
import { SectionHeading } from './ui.jsx';
import { videoTestimonials, YOUTUBE_CHANNEL } from '../data/videoTestimonials.js';
import { testimonials } from '../data/people.js';

// Written testimonial with the student's photo.
function StudentCard({ t }) {
  return (
    <figure className="st-card reveal">
      {t.photo && (
        <div className="st-photo">
          <picture>
            {t.photoWebp && <source srcSet={t.photoWebp} type="image/webp" />}
            <img
              src={t.photo}
              alt={`${t.name}, ${t.course}${t.city ? `, ${t.city}` : ''}`}
              loading="lazy"
              decoding="async"
              width={t.photoSize?.[0]}
              height={t.photoSize?.[1]}
              style={t.photoPosition ? { objectPosition: t.photoPosition } : undefined}
            />
          </picture>
        </div>
      )}
      <div className="st-body">
        <Quote size={34} className="st-quote-icon" aria-hidden="true" />
        <blockquote>{t.quote}</blockquote>
        <figcaption>
          <strong>{t.name}</strong>
          <span className="st-meta">
            {t.course && <span><GraduationCap size={15} aria-hidden="true" /> {t.course}</span>}
            {t.city && <span><MapPin size={15} aria-hidden="true" /> {t.city}</span>}
          </span>
        </figcaption>
      </div>
    </figure>
  );
}

// Lightweight YouTube embed: shows the vertical thumbnail first and only loads the
// YouTube player when the visitor presses play (keeps pages fast).
function VideoCard({ video }) {
  const [playing, setPlaying] = useState(false);
  const [thumb, setThumb] = useState(`https://i.ytimg.com/vi/${video.id}/oar2.jpg`);

  return (
    <figure className="vt-card reveal">
      <div className="vt-frame">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button type="button" className="vt-poster" onClick={() => setPlaying(true)} aria-label={`Play video: ${video.title}`}>
            <img
              src={thumb}
              alt=""
              loading="lazy"
              decoding="async"
              onError={() => setThumb(`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`)}
            />
            <span className="vt-shade" />
            <span className="vt-tag">{video.tag}</span>
            <span className="vt-play">
              <Play size={26} fill="currentColor" aria-hidden="true" />
            </span>
          </button>
        )}
      </div>
      <figcaption>
        <p>{video.title}</p>
        <a href={`https://www.youtube.com/shorts/${video.id}`} target="_blank" rel="noopener noreferrer">
          Watch on YouTube
        </a>
      </figcaption>
    </figure>
  );
}

export default function VideoTestimonials({
  eyebrow = 'Student stories',
  title = 'Hear it from our students',
  subtitle = 'Real students and families sharing their journey with Sri Vidhya Overseas — tap any video to play.',
  limit,
}) {
  const list = limit ? videoTestimonials.slice(0, limit) : videoTestimonials;
  if (!list.length) return null;

  return (
    <div className="vt">
      <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className="vt-grid">
        {list.map((v) => <VideoCard key={v.id} video={v} />)}
      </div>
      {testimonials.length > 0 && (
        <div className={`st-list${testimonials.length > 1 ? ' is-multi' : ''}`}>
          {testimonials.map((t) => <StudentCard key={t.name} t={t} />)}
        </div>
      )}
      <div className="center mt-lg">
        <a href={YOUTUBE_CHANNEL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
          <Youtube size={18} aria-hidden="true" /> More stories on our YouTube channel <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
