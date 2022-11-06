export const SearchBox = ({ value, onSearchQueryChanged }) => {

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    onSearchQueryChanged(form.elements.searchQuery.value);
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="searchQuery" defaultValue={value} />
        <button type="submit">Search</button>
      </form>
    </>
  );
};
