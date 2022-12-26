import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(e.target.elements.query.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" placeholder="Search movie" />
      <button type="submit">Search</button>
    </form>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
