import UserCard from '../usercard/UserCard';
import './UserCardsContainer.css';

const UserCardsContainer = ({ users, onLoadMore, isLoading }) => {
    return (
        <div className="cards-wrapper">
            {/* La grilla de tarjetas */}
            <div className="cards-grid">
                {users.map((user) => (
                    <UserCard key={user.id} {...user} />
                ))}
            </div>
            {users.length > 0 && (
                <button
                    className="load-more-btn"
                    disabled={isLoading}
                    onClick={onLoadMore}
                >
                    {isLoading ? "Buscando..." : "Cargar más"}
                </button>
            )}
        </div>
    );
};

export default UserCardsContainer;