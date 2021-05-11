import React from 'react';
import Grid from '@material-ui/core/Grid';


import classes from './Information.module.css';

const Information = (props) => {
    return(
        <div className={[classes.moreInfo, classes.aboutInfo].join(" ")}>
            <Grid container>
                <Grid item md={12}>
                    <div className={classes.moreInfoContent}>
                        <Grid item md={6}>
                            <div className={classes.rightContent}>
                                <span>our solid background on finance</span>
                                <h2>Get to know about <em>our company</em></h2>
                                <p>Fusce nec ultrices lectus. Duis nec scelerisque risus. Ut id tempor turpis, ac dignissim ipsum. Nulla ullamcorper, ipsum vel condimentum congue, mi odio vehicula tellus, sit amet malesuada justo sem. 
                                <br/><br/>Pellentesque in sagittis lacus, vel auctor sem. Quisque eu quam eleifend, ullamcorper dui nec, luctus quam.</p>
                            </div>
                        </Grid>
                        <Grid item md={6}>
                            <div className={classes.leftImage}>
                                <img src="assets/images/about-image.jpg" alt=""/>
                            </div>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Information;