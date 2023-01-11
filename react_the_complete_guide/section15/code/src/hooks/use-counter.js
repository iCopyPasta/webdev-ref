import { useState, useEffect } from 'react';

// will be tied to component in which used
const useCounter = (forwards = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        if (forwards){
            setCounter((prevCounter) => prevCounter + 1);
        }
        else {    
            setCounter((prevCounter) => prevCounter - 1);
        }
      }, 1000);
  
      return () => clearInterval(interval);
    }, [forwards]);

    // array, number, object, etc.
    return counter;
};

export default useCounter;