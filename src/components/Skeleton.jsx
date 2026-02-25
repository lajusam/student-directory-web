/**
 * Skeleton — Shimmer placeholder displayed while content loads.
 *
 * Usage:
 *   <Skeleton variant="text" />           — single text line
 *   <Skeleton variant="title" />          — page heading
 *   <Skeleton variant="card" />           — student card placeholder
 *   <Skeleton variant="card" count={6} /> — 6 skeleton cards in grid
 */
function Skeleton({ variant = "text", count = 1 }) {
  if (variant === "card") {
    return Array.from({ length: count }, (_, i) => (
      <div className="skeleton-card" key={i}>
        <div style={{ display: "flex", gap: "8px" }}>
          <span className="skeleton skeleton--badge" />
          <span className="skeleton skeleton--badge" />
        </div>
        <div className="skeleton skeleton--title" />
        <div className="skeleton skeleton--text" />
        <div className="skeleton skeleton--text-sm" />
        <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
          <span className="skeleton skeleton--btn" />
          <span className="skeleton skeleton--btn" />
        </div>
      </div>
    ));
  }

  if (variant === "title") {
    return <div className="skeleton skeleton--title" />;
  }

  /* Default: text */
  return Array.from({ length: count }, (_, i) => (
    <div className="skeleton skeleton--text" key={i} />
  ));
}

export default Skeleton;
