const Search = (props) => {
    return (
        <div className="search-wrapper">
            <input
                className="form-control search-box"
                value={props.value}
                onChange={(event) => props.setSearchValue(event.target.value)}
                placeholder="Type to search"
            />
        </div>
    );
};

export default Search;
    