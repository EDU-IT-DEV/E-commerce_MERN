import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const LoadingToRedirect = () => {
  const [count, setCount] = useState(5);
  let history = useHistory();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);
    // redirect once count is equal to 0
    count === 0 && history.push("/"); // useEffect will run until count is 0, then it will be redirected to home "/".
    //cleanup
    return () => clearInterval(interval);
  }, [count, history]);

  return (
    <div className="container p-5 text-center">
      <p>Redirectin you in {count} seconds</p>
    </div>
  );
};

export default LoadingToRedirect;
