import { useNavigate } from "react-router-dom";
import './NotFound.less';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">Oops! This page doesn't exist.</p>
        <p className="not-found-description">
          The page you're looking for might have been moved or doesn't exist anymore.
        </p>
        <button
          onClick={() => navigate('/')}
          className="not-found-button"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
