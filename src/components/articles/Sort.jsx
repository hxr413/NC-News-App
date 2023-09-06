export default function Sort({ setSort, setOrder }) {
  const handleSort = (event) => setSort(event.target.value);
  const handleOrder = (event) => setOrder(event.target.value);

  /*
  <button onClick={() => setSortOrder('asc')}>Ascending</button>

  const setSortOrder = (direction) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("order", direction);
    setSearchParams(newParams);
  };
  */

  return (
    <div className="sortArticles">
      <p>
        Sort by
        <span>
          <select name="sort" onClick={handleSort}>
            <option value="created_at">Date</option>
            <option value="comment_count">Comments</option>
            <option value="votes">Votes</option>
          </select>
        </span>
      </p>
      <p>
        Order by
        <span>
          <select name="order" onClick={handleOrder}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </span>
      </p>
    </div>
  );
}
