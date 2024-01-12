import React, { useState, useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

const ProgressBar = ({ props }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    setProgress(() => {
      const diff = (props.factAmount * 100) / props.planAmount + 100;

      return Math.min(diff, props.planAmount);
    });

    return () => {};
  }, [props.planAmount, props.factAmount]);

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
          props.planAmount >= props.factAmount
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
