import React, { useState, useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

const ProgressBar = ({ props }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    setProgress(() => {
      const diff = (props.factAmmount * 100) / props.planAmmount + 100;

      return Math.min(diff, props.planAmmount);
    });

    return () => {};
  }, [props.planAmmount, props.factAmmount]);

  return (
    <div
      style={{
        display: 'inline-block',
        width: '93%',
        background: '#ffffff',
      }}
    >
      <LinearProgress
        style={
          props.planAmmount >= props.factAmmount
            ? { height: '10px', background: '#24CCA7' }
            : { height: '10px', background: '#FF6596' }
        }
        variant="determinate"
        value={progress}
      />
    </div>
  );
};

export default ProgressBar;
