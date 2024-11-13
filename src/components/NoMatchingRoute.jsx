import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AppContext } from '../AppContext';
import computeHeight from '../utils/computeHeight';
import './NoMatchingRoute.css';

function NoMatchingRoute() {
  const { showFrame, isLandscape } = useContext(AppContext);

  return (
    <div
      className="no-matching-route"
      style={computeHeight(showFrame, isLandscape, '40.5dvh', '43.5dvh', '73.5dvh', '76.5dvh')}
    >
      <h2>Nothing to see here!</h2>
      <p className="back-to-start">
        <Link to="/dummyTable">Go to the starting page</Link>
      </p>
    </div>
  );
}

export default NoMatchingRoute;