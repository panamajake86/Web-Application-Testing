import React from 'react';
import useLocalStorage from "./useLocalStorage";

const useBalls = () => {
    const [ball, setBall] = useLocalStorage("ball", 0);
  
    React.useEffect(() =>{
      const body = window.document.body;
      ball ? body.classList.add('ball') : 
      body.classList.remove('ball');
    }, [ball]);
    return [ball, setBall];
  };
  
  export default useBalls;