// A portrait can replace this illustration without changing the page layout.
export default function DataArtwork() {
  return (
    <div
      className="data-art"
      aria-label="Abstract illustration of a neural network"
    >
      <span className="art-letter" aria-hidden="true">
        AI
      </span>
      <svg viewBox="0 0 520 440" className="network" aria-hidden="true">
        <defs>
          <pattern
            id="dots"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1" fill="#1f1f1f" opacity=".12" />
          </pattern>
        </defs>
        <rect x="40" y="20" width="440" height="400" fill="url(#dots)" />
        <g stroke="#1f1f1f" strokeWidth="1.2" opacity=".3">
          {[110, 220, 330].flatMap((y) =>
            [75, 170, 265, 360].map((y2) => (
              <path key={`${y}-${y2}`} d={`M110 ${y}L260 ${y2}`} />
            )),
          )}
          {[75, 170, 265, 360].flatMap((y) =>
            [140, 300].map((y2) => (
              <path key={`${y}-${y2}`} d={`M260 ${y}L410 ${y2}`} />
            )),
          )}
        </g>
        <g stroke="#1f1f1f" strokeWidth="2">
          {[110, 220, 330].map((y) => (
            <circle key={y} cx="110" cy={y} r="13" fill="#fff" />
          ))}
          {[75, 170, 265, 360].map((y) => (
            <circle key={y} cx="260" cy={y} r="17" fill="#fc3314" />
          ))}
          {[140, 300].map((y) => (
            <circle key={y} cx="410" cy={y} r="22" fill="#1f1f1f" />
          ))}
        </g>
        <path
          d="m432 48 12-12 12 12m-24 14 12-12 12 12m-24 14 12-12 12 12"
          fill="none"
          stroke="#fc3314"
          strokeWidth="4"
        />
      </svg>
      <div className="art-caption">
        <span className="status-dot" /> Curiosity → data → discovery
      </div>
    </div>
  );
}
