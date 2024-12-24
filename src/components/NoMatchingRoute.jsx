import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { AppContext } from '../AppContext';
import computeHeight from '../utils/computeHeight';
import './NoMatchingRoute.css';

function NoMatchingRoute() {
  const { showFrame, isLandscape } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div
      className="no-matching-route"
      style={computeHeight(showFrame, isLandscape, '40.5dvh', '43.5dvh', '73.5dvh', '76.5dvh')}
    >
      <h2>Nothing to see here!</h2>
      <p className="back-link">
        {/* Navigate to the previous page */}
        <button onClick={() => navigate(-1)}>Go Back</button>
      </p>
    </div>
  );
}

export default NoMatchingRoute;