import React, { useEffect, useState } from "react";

const Self = () => {
  const [cnt, setCnt] = useState(0);
  
//   useEffect(() => {

//   }, [cnt]);
  return (
    <div>
        <h1>{cnt}</h1>
      <button onClick={() => setCnt(cnt + 1)}>Click</button>
    </div>
  );
};

export default Self;
