import React from 'react';
import useLocalStorage from "./useLocalStorage";

const useStrikes = () => {
    const [strike, SetStrike] = useLocalStorage("strike", 0);
  
    React.useEffect(() =>{
      const body = window.document.body;
      strike ? body.classList.add('strike') : 
      body.classList.remove('strike');
    }, [strike]);
    return [strike, SetStrike];
  };
  
  export default useStrikes;