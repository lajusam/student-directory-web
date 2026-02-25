/**
 * SearchInput Component
 * A reusable controlled text input with a search icon.
 *
 * Props:
 *   - value       (string): Current input value
 *   - onChange     (func):   Callback fired on every keystroke
 *   - placeholder  (string): Placeholder text
 */
function SearchInput({ value, onChange, placeholder = "Search…" }) {
  return (
    <div className="search-input">
      {/* Magnifying glass icon (pure CSS via ::before on the wrapper) */}
      <span className="search-input__icon" aria-hidden="true">🔍</span>
      <input
        type="text"
        className="search-input__field"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
      />
    </div>
  );
}

export default SearchInput;
