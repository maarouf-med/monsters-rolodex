import "./search-box.styles.css";

const SearchBox = (props) => {
  const { className, placeholder, onchangeHundler } = props;
  return (
    <input
      className={className}
      type="search"
      placeholder={placeholder}
      onChange={onchangeHundler}
    />
  );
};

export default SearchBox;
