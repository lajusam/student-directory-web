/**
 * Badge Component
 * A small pill-shaped badge used for attendance status and top performer indicator.
 *
 * Props:
 *   - label (string): Text displayed inside the badge
 *   - type  (string): "present" | "absent" | "topPerformer" — controls color scheme
 */
function Badge({ label, type = "present" }) {
  return (
    <span className={`badge badge--${type}`}>
      {label}
    </span>
  );
}

export default Badge;
