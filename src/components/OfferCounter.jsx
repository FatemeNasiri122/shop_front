import { useEffect, useRef, useState } from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const OfferCounter = () => {
  const [second, setSecond] = useState(59);
  const [minute, setMinute] = useState(59);
  const [hour, setHour] = useState(5);
  const intervalRef = useRef();

  const stopTimer = () => {
    if (intervalRef.current) {
      debugger;
      clearInterval(intervalRef.current);
    }
  };

  const timer = () => {
    let s = 59;
    let m = 59;
    let h = 5;
    intervalRef.current = setInterval(() => {
      if (h === 0 && s <= 0 && m === 0) {
        s = 0;
        m = 0;
        h = 0;
        setHour(0);
        setMinute(0);
        setSecond(0);
        stopTimer();
        return;
      } else if (s === 0 && m === 0) {
        debugger;
        m = 0;
        s = 0;
        h = h - 1;
        setMinute(m);
        setSecond(s);
      } else if (s < 0 && m > 0) {
        s = 59;
        m = m - 1;
      }
      setMinute(m);
      setSecond(s);
      setHour(h);
      s = s - 1;
    }, 1000);
  };

  useEffect(() => {
    timer();
    return () => {
      debugger;
      stopTimer();
    };
  }, []);

  return (
    <span className="offer">
      <span>remaining time:</span>
      <span className="stepCounter">{hour < 10 ? `0${hour}` : hour}</span>
      <span>:</span>
      <span className="stepCounter">{minute < 10 ? `0${minute}` : minute}</span>
      <span>:</span>
      <span className="stepCounter">{second < 10 ? `0${second}` : second}</span>
      <AccessTimeIcon />
    </span>
  );
};

export default OfferCounter;
