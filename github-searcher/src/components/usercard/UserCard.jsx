import './UserCard.css';

const UserCard = ({ login, avatar_url }) => {
    return (
        <div className="card">
            <h2 className="card-name">{login || "Sin nombre"}</h2>

            <img
                src={avatar_url}
                alt={`Avatar de ${login}`}
                className="card-img"
            />

            <div className="card-buttons">
                <a
                    href={`https://github.com/${login}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-github"
                >
                    Perfil GitHub
                </a>
                <a
                    href={`https://github.com/${login}?tab=repositories`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-repos"
                >
                    Ver Repos
                </a>
            </div>
        </div>
    );
};

export default UserCard;