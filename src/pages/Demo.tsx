import React, { useState, useTransition } from 'react';

const Demo = () => {
  const [isPending, startTransition] = useTransition();
  const [num, setNum] = useState(0);

  const handleClick = () => {
    setNum((num) => num + 1);

    startTransition(() => {
      setNum(10);
    });

    console.log(isPending, 'isPending');
  };

  return <div onClick={handleClick}>demo... {num}</div>;
};

export default Demo;
