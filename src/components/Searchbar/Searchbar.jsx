import { BsSearch } from 'react-icons/bs';

export const Searchbar = ({ onSubmit, value }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(e.target.elements.query.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="query"
        defaultValue={value}
        placeholder="Enter the title of the movie."
      />
      <button type="submit">
        <BsSearch />
        Search
      </button>
    </form>
  );
};
