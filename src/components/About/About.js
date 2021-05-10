import React from 'react';
import Grid from '@material-ui/core/Grid';

import classes from './About.module.css';

const About = (props) => {
    return(
        <div>
          <div className={classes.pageHeading}> {/* header-text */}
              <Grid container>
                  <Grid item md={12}>
                      <h1>About Us</h1>
                      <span>We have over 20 years of experience</span>
                  </Grid>
              </Grid>
          </div>
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
        </div>
    );
};

export default About;