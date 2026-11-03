import { useState, useMemo } from 'react';
import { Play, Youtube, Instagram, ArrowRight, Quote, MapPin, GraduationCap, Sparkles, Star, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from './ui.jsx';
import { videoTestimonials, YOUTUBE_CHANNEL, INSTAGRAM_PAGE } from '../data/videoTestimonials.js';
import { testimonials } from '../data/people.js';

// Written testimonial with compact photo avatar and verified review badge.
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
              width="68"
              height="68"
              style={t.photoPosition ? { objectPosition: t.photoPosition } : undefined}
            />
          </picture>
        </div>
      )}
      <div className="st-meta-wrap">
        <figcaption>
          <strong>{t.name}</strong>
          <span className="st-meta">
            {t.course && <span><GraduationCap size={13} aria-hidden="true" /> {t.course}</span>}
            {t.city && <span><MapPin size={13} aria-hidden="true" /> {t.city}</span>}
          </span>
        </figcaption>
        <div className="st-stars" aria-label="5 out of 5 stars">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} fill="#f5a524" color="#f5a524" aria-hidden="true" />
          ))}
          <span className="st-verified-badge">
            <CheckCircle2 size={11} aria-hidden="true" /> Verified
          </span>
        </div>
      </div>
      <div className="st-body">
        <Quote size={20} className="st-quote-icon" aria-hidden="true" />
        <blockquote>“{t.quote}”</blockquote>
      </div>
    </figure>
  );
}

// Lightweight video embed: supports HTML5 video/reels and YouTube Shorts.
// Shows the vertical thumbnail first and loads the player when clicked.
function VideoCard({ video }) {
  const [playing, setPlaying] = useState(false);
  const isVideo = Boolean(video.src);
  const isInstagram = video.type === 'instagram' || video.url?.includes('instagram.com');
  const [thumb, setThumb] = useState(
    video.poster || (video.id ? `https://i.ytimg.com/vi/${video.id}/oar2.jpg` : '')
  );

  return (
    <figure className="vt-card reveal">
      <div className="vt-frame">
        {playing ? (
          isVideo ? (
            <video
              src={video.src}
              poster={video.poster}
              controls
              autoPlay
              playsInline
              className="vt-player-video"
            />
          ) : (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          )
        ) : (
          <button type="button" className="vt-poster" onClick={() => setPlaying(true)} aria-label={`Play video: ${video.title}`}>
            <img
              src={thumb}
              alt={video.title}
              loading="lazy"
              decoding="async"
              onError={() => !video.poster && setThumb(`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`)}
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
        {isInstagram ? (
          <a href={video.url || `https://www.instagram.com/reel/${video.id}/`} target="_blank" rel="noopener noreferrer">
            <Instagram size={14} aria-hidden="true" style={{ display: 'inline', verticalAlign: '-2px', marginRight: '4px' }} />
            Watch on Instagram
          </a>
        ) : (
          <a href={video.url || `https://www.youtube.com/shorts/${video.id}`} target="_blank" rel="noopener noreferrer">
            <Youtube size={14} aria-hidden="true" style={{ display: 'inline', verticalAlign: '-2px', marginRight: '4px' }} />
            Watch on YouTube
          </a>
        )}
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
  const [filter, setFilter] = useState('all');

  const baseList = limit ? videoTestimonials.slice(0, limit) : videoTestimonials;

  const filteredList = useMemo(() => {
    if (filter === 'instagram') return baseList.filter((v) => v.type === 'instagram');
    if (filter === 'youtube') return baseList.filter((v) => v.type === 'youtube');
    if (filter === 'departure') return baseList.filter((v) => v.tag === 'Airport Send-off' || v.category === 'departure');
    if (filter === 'review') return baseList.filter((v) => v.tag === 'Student Review');
    return baseList;
  }, [baseList, filter]);

  if (!baseList.length) return null;

  return (
    <div className="vt">
      <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />

      <div className="vt-filters" role="tablist" aria-label="Filter student videos">
        <button
          type="button"
          className={`vt-pill ${filter === 'all' ? 'is-active' : ''}`}
          onClick={() => setFilter('all')}
        >
          <Sparkles size={14} aria-hidden="true" /> All Stories ({baseList.length})
        </button>
        <button
          type="button"
          className={`vt-pill ${filter === 'review' ? 'is-active' : ''}`}
          onClick={() => setFilter('review')}
        >
          Student Reviews ({baseList.filter((v) => v.tag === 'Student Review').length})
        </button>
        <button
          type="button"
          className={`vt-pill ${filter === 'departure' ? 'is-active' : ''}`}
          onClick={() => setFilter('departure')}
        >
          Airport Send-offs ({baseList.filter((v) => v.tag === 'Airport Send-off').length})
        </button>
        <button
          type="button"
          className={`vt-pill ${filter === 'instagram' ? 'is-active' : ''}`}
          onClick={() => setFilter('instagram')}
        >
          <Instagram size={14} aria-hidden="true" /> Instagram Reels ({baseList.filter((v) => v.type === 'instagram').length})
        </button>
        <button
          type="button"
          className={`vt-pill ${filter === 'youtube' ? 'is-active' : ''}`}
          onClick={() => setFilter('youtube')}
        >
          <Youtube size={14} aria-hidden="true" /> YouTube Shorts ({baseList.filter((v) => v.type === 'youtube').length})
        </button>
      </div>

      <div className="vt-grid">
        {filteredList.map((v) => <VideoCard key={v.id} video={v} />)}
      </div>

      {testimonials.length > 0 && (
        <div className={`st-list${testimonials.length > 1 ? ' is-multi' : ''}`}>
          {testimonials.map((t) => <StudentCard key={t.name} t={t} />)}
        </div>
      )}

      <div className="center mt-lg vt-actions">
        <a href={INSTAGRAM_PAGE} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
          <Instagram size={18} aria-hidden="true" /> Watch more reels on Instagram <ArrowRight size={16} aria-hidden="true" />
        </a>
        <a href={YOUTUBE_CHANNEL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
          <Youtube size={18} aria-hidden="true" /> YouTube Channel <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
