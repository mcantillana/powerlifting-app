import React from 'react';
import Grid from '@material-ui/core/Grid';

import classes from './Details.module.css';

const Details = (props) => {
    return (
        <div className={classes.team}>
            <Grid container>
                <Grid item md={12}>
                    <div className={classes.sectionHeading}>
                        <h2>Our team <em>members</em></h2>
                        <span>Suspendisse a ante in neque iaculis lacinia</span>
                    </div>
                </Grid>
                <Grid item md={4}>
                    <div className={classes.teamItem}>
                        <img src="assets/images/team_01.jpg" alt=""/>
                        <div className={classes.downContent}>
                            <h4>William Smith</h4>
                            <span>Co-Founder</span>
                            <p>In sem sem, dapibus non lacus auctor, ornare sollicitudin lacus. Aliquam ipsum urna, semper quis.</p>
                        </div>
                    </div>
                </Grid>
                <Grid item md={4}>
                    <div className={classes.teamItem}>
                        <img src="assets/images/team_02.jpg" alt=""/>
                        <div className={classes.downContent}>
                            <h4>Mary Houston</h4>
                            <span>Chief Marketing Officer</span>
                            <p>In sem sem, dapibus non lacus auctor, ornare sollicitudin lacus. Aliquam ipsum urna, semper quis.</p>
                        </div>
                    </div>
                </Grid>
                <Grid item md={4}>
                    <div className={classes.teamItem}>
                        <img src="assets/images/team_03.jpg" alt=""/>
                        <div className={classes.downContent}>
                            <h4>Paul Walker</h4>
                            <span>Financial Analyst</span>
                            <p>In sem sem, dapibus non lacus auctor, ornare sollicitudin lacus. Aliquam ipsum urna, semper quis.</p>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Details;