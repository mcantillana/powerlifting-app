import {React} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import classes from './Weight.module.css';

const weight = (props) => {
    return(
        <div className={classes.Weight}>
            <Paper className={classes.Paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item xs zeroMinWidth>
                        <Typography className={classes.Data}>
                            <span>0</span>
                            <span>Kg.</span>
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

export default weight;