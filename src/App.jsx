import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from './AppContext';
import Header from './layouts/Header';
import Main from './layouts/Main';
import Footer from './layouts/Footer';
import handleRedirectToTable from './utils/handleRedirectToTable';
import './App.css';

function App() {
  const { showFrame, showButton, setShowButton } = useContext(AppContext);
  const navigate = useNavigate();
  const baseURL = import.meta.env.BASE_URL;
  let timeout;

  const handleMouseMove = () => {
    if (!showButton && !showFrame) {
      setShowButton(true);
    } else {
      clearTimeout(timeout);
      setShowButton(true);
      timeout = setTimeout(() => {
        setShowButton(false);
      }, 1000);
    }
  };

  useEffect(() => {
    const redirectURL = handleRedirectToTable(baseURL);
    if (redirectURL) {
      navigate(redirectURL);
    }
  }, [baseURL, navigate]);

  return (
    <div onMouseMove={handleMouseMove} className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
