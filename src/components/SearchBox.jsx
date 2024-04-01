import { FaSearchengin } from "react-icons/fa";

function SearchBox({ search , setSearch, searchHandler}) {
  return (
    <div>
        <input type="text" placeholder="Search title" value={search} onChange={(e) => setSearch(e.target.value.toLowerCase().trim())} />
        <button onClick={searchHandler}><FaSearchengin /></button>
    </div>
  )
}

export default SearchBox