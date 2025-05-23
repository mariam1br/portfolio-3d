import { useState, useEffect } from 'react';
import '../../styles/loader.css';

const Loader = ({ setLoading }) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(prevProgress => {
          const newProgress = prevProgress + 1;
          if (newProgress >= 100) {
            setTimeout(() => setLoading(false), 500);
          }
          return newProgress;
        });
      }
    }, 20); // Adjust speed here
    
    return () => clearTimeout(timer);
  }, [progress, setLoading]);
  
  return (
    <div className="loader-container">
      <div className="loader-content">
        <h1 className="purple-gradient">Mariam Ibrahim</h1>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <p>{progress}%</p>
      </div>
    </div>
  );
};

export default Loader;