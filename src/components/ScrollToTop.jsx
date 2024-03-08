import { useState, useEffect } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useNavigate } from 'react-router-dom';

const ScrollToTop = () => {
  const nav = useNavigate();
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const backToTop = () => {
    document.documentElement.style.scrollBehavior = 'smooth';
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    backToTop();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [nav]);
  return (
    <>
      {showButton && (
        <button type="click" onClick={() => backToTop()} className="progress-container">
          <ArrowUpwardIcon sx={{ color: 'white' }} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
