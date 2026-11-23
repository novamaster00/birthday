import { useEffect } from "react";

const scrapbookCopy = {
  album:
    "Happy Birthday, my love! May life always surprise you with beautiful moments, endless happiness, and dreams that come true. I'm so grateful that this world gave me you. Here's to a lifetime of love, laughter, and togetherness.",
  firstMemory:
    "Somewhere between the little moments and the unspoken feelings, you quietly became my favourite part of this life. Perhaps love was never meant to be found in grand gestures or perfect words, but in the way your eyes find mine, in the warmth of your presence, and in the little ways you make my heart feel at home.Because somewhere in this vast, beautiful world, my heart found its favourite place — and it happens to be wherever you are. ♡",
  secondMemory:
    `I don't know where this journey called life is meant to take us, or if there's even a final destination waiting at the end. Maybe it's not about reaching somewhere, but about all the roads we travel, the stories we collect, and the little moments we make ours along the way. All I know is... 
    तू मंज़िल और तू ही उस मंज़िल के आगे का रास्ता...♡ 
    And if I get to walk through this beautiful uncertainty called life, I hope it's always with you, because with you, even the journey feels like everything I have ever wished for ♡.`,
  letter:
    "I hope we get to experience all the little things life has waiting for us, growing together, making memories, and finding happiness in the simplest moments. I want to be beside you through every season, every dream, and every version of ourselves. And if I had to choose all over again, in a thousand different ways, I'd still choose you. Always. ♡",
};

function useSectionReveals() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    document.documentElement.classList.add("motion-ready");
    const sections = document.querySelectorAll<HTMLElement>(".scrapbook-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-visible", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -4% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);
}

function HeartDecoration({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`heart-sticker ${className}`}
      viewBox="0 0 32 30"
      focusable="false"
    >
      <path d="M16 28 3.8 16.1C-3.4 7.4 7.2-2.4 16 6.4 24.8-2.4 35.4 7.4 28.2 16.1L16 28Z" />
    </svg>
  );
}

function StarSticker({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`star-sticker ${className}`}
      viewBox="0 0 40 40"
      focusable="false"
    >
      <path d="m20 2 4.8 12.1L38 15l-9.1 8.1 2.6 13L20 29.4 8.5 36l2.6-12.9L2 15l13.1-.9L20 2Z" />
    </svg>
  );
}

function CameraSticker({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`camera-sticker ${className}`}
      viewBox="0 0 180 118"
      focusable="false"
    >
      <path
        className="camera-body"
        d="M19 29h34l12-14h51l12 14h34a8 8 0 0 1 8 8v55a9 9 0 0 1-9 9H18a9 9 0 0 1-9-9V38a9 9 0 0 1 10-9Z"
      />
      <path className="camera-top" d="M68 15h47l8 14H56l12-14Z" />
      <rect className="camera-flash" x="25" y="39" width="24" height="13" rx="3" />
      <circle className="camera-lens-outer" cx="93" cy="65" r="29" />
      <circle className="camera-lens-inner" cx="93" cy="65" r="20" />
      <circle className="camera-lens-glint" cx="87" cy="59" r="5" />
      <path className="camera-slot" d="M29 85h18" />
    </svg>
  );
}

function TeddySticker() {
  return (
    <svg aria-hidden="true" className="teddy-sticker" viewBox="0 0 80 90" focusable="false">
      <circle className="teddy-fur" cx="21" cy="21" r="13" />
      <circle className="teddy-ear" cx="21" cy="21" r="6" />
      <circle className="teddy-fur" cx="59" cy="21" r="13" />
      <circle className="teddy-ear" cx="59" cy="21" r="6" />
      <ellipse className="teddy-fur" cx="40" cy="33" rx="24" ry="23" />
      <ellipse className="teddy-muzzle" cx="40" cy="42" rx="12" ry="9" />
      <circle className="teddy-eye" cx="31" cy="33" r="2.4" />
      <circle className="teddy-eye" cx="49" cy="33" r="2.4" />
      <path className="teddy-nose" d="M37 39q3-4 6 0l-3 4-3-4Z" />
      <ellipse className="teddy-fur" cx="40" cy="70" rx="22" ry="18" />
      <circle className="teddy-fur" cx="18" cy="66" r="9" />
      <circle className="teddy-fur" cx="62" cy="66" r="9" />
      <path
        className="teddy-ribbon"
        d="m40 52 8 6-8 6-8-6 8-6Zm-8 6-9-5v10l9-5Zm16 0 9-5v10l-9-5Z"
      />
    </svg>
  );
}

function PolaroidPhoto({
  src,
  alt,
  caption,
  className = "",
}: {
  src: string;
  alt: string;
  caption: string;
  className?: string;
}) {
  return (
    <figure className={`polaroid ${className}`}>
      <img src={src} alt={alt} loading="lazy" decoding="async" />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

function BirthdaySection() {
  return (
    <section className="scrapbook-section birthday-section" aria-label="Birthday envelope">
      <div className="birthday-composition reveal-item">
        <div className="birthday-paper birthday-paper--back" />
        <div className="birthday-paper birthday-paper--left" />
        <div className="birthday-envelope">
          <span className="envelope-flap" />
          <div className="birthday-letter" >
            <div>
            <span className="birthday-greeting">Happy Birthday</span>
            </div>
            <div>
              <span className="birthday-greeting">Nirmal</span>
            </div>
            <HeartDecoration className="heart-sticker--letter" />
            <span className="birthday-letter-mark">♡</span>
            <HeartDecoration className="heart-sticker--side heart-sticker--one" />
            <HeartDecoration className="heart-sticker--side heart-sticker--two" />
          </div>
        </div>
        <CameraSticker className="camera-sticker--birthday" />
        {/* Bouquet image */}
        <img
          src="/bouquet.png"
          alt="Birthday bouquet"
          className="bouquet-image"
          loading="lazy"
          decoding="async"
        />
      </div>
      <a className="birthday-caption" href="#anniversary-album">
        click me!
      </a>
    </section>
  );
}

function AlbumSection() {
  return (
    <section
      className="scrapbook-section album-section"
      id="anniversary-album"
      aria-label="Open anniversary photo album"
    >
      <div className="album-spread reveal-item">
        <article className="album-page album-page--left">
          <div className="album-number-lockup">
            <span className="album-number">23</span>
          </div>
          <p className="album-paragraph">{scrapbookCopy.album}</p>
          <span className="album-page-number">your Krupali</span>
        </article>
        <div className="album-binding" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <article className="album-page album-page--right">
          <div className="album-decorative-tape" aria-hidden="true">
            <span />
            <span />
          </div>
          <PolaroidPhoto
            className="album-polaroid"
            src="/book_photo.jpeg"
            alt="A couple sharing a quiet laugh together in a garden"
            caption="always beside you"
          />
          <HeartDecoration className="heart-sticker--album" />
          <StarSticker className="star-sticker--album" />
        </article>
      </div>
    </section>
  );
}



function MemoriesSection() {
  return (
    <section className="scrapbook-section memories-section" aria-label="Collected memories">
      <div className="memories-rows">
        <div className="memories-row memories-row--first">
          <div className="memory-photo-wrap memory-photo-wrap--portrait reveal-item">
            <div className="memory-envelope-paper" aria-hidden="true">
              <span />
            </div>
            <PolaroidPhoto
              className="memory-polaroid memory-polaroid--portrait"
              src="/potrait_1.jpeg"
              alt="Two partners standing close together in a green garden"
              caption="a moment i cherish"
            />
          </div>
          <p className="memory-copy reveal-item">{scrapbookCopy.firstMemory}</p>
        </div>
        <div className="memories-row memories-row--second">
          <p className="memory-copy reveal-item">{scrapbookCopy.secondMemory}</p>
          <div className="memory-photo-wrap memory-photo-wrap--landscape reveal-item">
            <PolaroidPhoto
              className="memory-polaroid memory-polaroid--landscape"
              src="/potrait_2.jpeg"
              alt="Two partners laughing together on a garden bench"
              caption="one of those days to keep"
            />
            <span className="masking-tape masking-tape--upper" aria-hidden="true" />
            <span className="masking-tape masking-tape--lower" aria-hidden="true" />
            <StarSticker className="star-sticker--memory" />
          </div>
        </div>
      </div>
    </section>
  );
}

function postagePath() {
  const width = 1000;
  const height = 620;
  const radius = 15;
  const step = radius * 2;
  let path = `M ${radius} 0`;

  for (let x = radius; x + step <= width - radius; x += step) {
    const middle = x + radius;
    path += ` Q ${middle} 0 ${middle} ${radius} Q ${middle} 0 ${x + step} 0`;
  }
  path += ` L ${width} ${radius}`;

  for (let y = radius; y + step <= height - radius; y += step) {
    const middle = y + radius;
    path += ` Q ${width} ${middle} ${width - radius} ${middle} Q ${width} ${middle} ${width} ${y + step}`;
  }
  path += ` L ${width - radius} ${height}`;

  for (let x = width - radius; x - step >= radius; x -= step) {
    const middle = x - radius;
    path += ` Q ${middle} ${height} ${middle} ${height - radius} Q ${middle} ${height} ${x - step} ${height}`;
  }
  path += ` L 0 ${height - radius}`;

  for (let y = height - radius; y - step >= radius; y -= step) {
    const middle = y - radius;
    path += ` Q 0 ${middle} ${radius} ${middle} Q 0 ${middle} 0 ${y - step}`;
  }
  return `${path} L 0 ${radius} Q 0 0 ${radius} 0 Z`;
}

function LetterSection() {
  return (
    <section className="scrapbook-section letter-section" aria-label="A letter with a photograph">
      <div className="letter-composition">
        <div className="stamp-paper reveal-item">
          <svg
            className="stamp-paper-shape"
            viewBox="0 0 1000 620"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d={postagePath()} />
          </svg>
          <div className="letter-paper-content">
            <div className="letter-top-decorations" aria-hidden="true">
              <span className="letter-ribbon">
                <span />
                <span />
              </span>
              <StarSticker className="star-sticker--letter" />
            </div>
            <p className="letter-salutation">Dear Nirmal,</p>
            <p className="letter-body-copy">{scrapbookCopy.letter}</p>
            <p className="letter-body-copy letter-body-copy--hope">{scrapbookCopy.letterHope}</p>
            <p className="letter-signoff">With Love Krupali.</p>
            <TeddySticker />
            <CameraSticker className="camera-sticker--letter" />
          </div>
        </div>
        <div className="letter-photo-wrap reveal-item">
          <PolaroidPhoto
            className="letter-polaroid"
            src="/last_pic.jpeg"
            alt="A couple smiling at one another beneath the trees"
            caption="always, us"
          />
          <HeartDecoration className="heart-sticker--letter-photo" />
          <StarSticker className="star-sticker--photo" />
        </div>
      </div>
    </section>
  );
}

export function Scrapbook() {
  useSectionReveals();

  return (
    <>
    <main className="scrapbook">
      <BirthdaySection />
      <AlbumSection />
      <MemoriesSection />
      <LetterSection />
    </main>
    </>
  );
}
