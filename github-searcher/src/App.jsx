import SearchBar from './components/searchbar/SearchBar'
import UserCardsContainer from './components/usercardscontainer/UserCardsContainer'
import { useState } from 'react'
import axios from 'axios';

function App() {

  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [currentQuery, setCurrentQuery] = useState("");


  const handleSearch = async (query) => {
    setCurrentQuery(query);
    setPage(1);

    try {
      const response = await fetch(`https://api.github.com/search/users?q=${query}`);
      const data = await response.json();

      setUsers(data.items);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  }

  const handleLoadMore = async () => {

    setLoading(true);

    try {
      const nextPage = page + 1;
      const response = await axios.get(`https://api.github.com/search/users?q=${currentQuery}&page=${nextPage}`);

      setUsers([...users, ...response.data.items]);
      setPage(nextPage);
    } catch (error) {
      console.error("Error buscando más usuarios", error);
    } finally {
      setLoading(false);
    }

  }
  return (
    <div className='app'>
      <h1>GitHub Profile Searcher</h1>
      <hr />
      <SearchBar onSearch={handleSearch} />
      <UserCardsContainer
        users={users}
        onLoadMore={handleLoadMore}
        isLoading={loading}
      />
    </div>
  )
}

export default App
