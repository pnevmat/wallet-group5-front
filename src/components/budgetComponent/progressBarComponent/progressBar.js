import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const ProgressBar = ({props}) => {
    console.log('Progress bar props: ', props);
    const barStyles = makeStyles({
        root: {
            display: 'inline-block',
            width: '93%',
            background: '#ffffff'
        },
        bar1Determinate: {
            height: '10px',
            background: '#24CCA7'
        },
        overspent: {
            height: '10px',
            background: '#FF6596'
        }
    });

    const classes = barStyles();
    const [progress, setProgress] = useState(0);
    console.log('Progress value of progressBar: ', progress);

    useEffect(() => {
        setProgress((oldProgress) => {
            if (oldProgress > props.planAmmount) {
                
                return props.planAmmount;
            }
            
            const diff = (props.factAmmount * 100) / props.planAmmount;
            
            return Math.min(oldProgress + diff, props.planAmmount);
        });
  
      return () => {
      };
    }, []);

    return (
        <div className={classes.root}>
            <LinearProgress className={props.planAmmount >= props.factAmmount ? classes.bar1Determinate : classes.overspent} variant="determinate" value={progress} />
        </div>
    );
};

export default ProgressBar;