import { useState } from "react";
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query);
        }
    };

    return (
        <div className="search-container">
            <form onSubmit={handleSubmit} className="search-form">
                <input
                    className="search-input"
                    type="text"
                    placeholder="Buscar usuario en GitHub..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit" className="search-button">
                    Buscar
                </button>
            </form>
        </div>
    );
};

export default SearchBar;