export const SearchBox = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
          />
          <button type="button">Search</button>
    </div>
  );
};
