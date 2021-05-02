import React from 'react';
import image1 from '../../assets/images/power_1.png';
import image2 from '../../assets/images/power_2.png';
import image3 from '../../assets/images/power_3.png';
import classes from './About.module.css';

const About = (props) => {
    return(
        <section className={classes.WhyUs} data-section="section2">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                    <div className={classes.sectionHeading}>
                        <h2>Why choose Grad School?</h2>
                    </div>
                    </div>
                    <div class="col-md-12">
                    <div id={classes.tabs}>
                        <ul>
                        <li><a href='#tabs-1'>Best Education</a></li>
                        <li><a href='#tabs-2'>Top Management</a></li>
                        <li><a href='#tabs-3'>Quality Meeting</a></li>
                        </ul>
                        <section className={classes.tabsContent}>
                            <article id='tabs-1'>
                                <div class="row">
                                <div class="col-md-6">
                                    <img src={image1} alt=""/>
                                </div>
                                <div class="col-md-6">
                                    <h4>Best Education</h4>
                                    <p>Grad School is free educational HTML template with Bootstrap 4.5.2 CSS layout. Feel free to use it for educational or commercial purposes. You may want to make <a href="https://paypal.me/templatemo" target="_parent" rel="sponsored">a little donation</a> to TemplateMo. Please tell your friends about us. Thank you.</p>
                                </div>
                                </div>
                            </article>
                            <article id='tabs-2'>
                                <div class="row">
                                <div class="col-md-6">
                                    <img src={image2} alt=""/>
                                </div>
                                <div class="col-md-6">
                                    <h4>Top Level</h4>
                                    <p>You can modify this HTML layout by editing contents and adding more pages as you needed. Since this template has options to add dropdown menus, you can put many HTML pages.</p> 
                                    <p>Suspendisse tincidunt, magna ut finibus rutrum, libero dolor euismod odio, nec interdum quam felis non ante.</p>
                                </div>
                                </div>
                            </article>
                            <article id='tabs-3'>
                                <div class="row">
                                <div class="col-md-6">
                                    <img src={image3} alt=""/>
                                </div>
                                <div class="col-md-6">
                                    <h4>Quality Meeting</h4>
                                    <p>You are NOT allowed to redistribute this template ZIP file on any template collection website. However, you can use this template to convert into a specific theme for any kind of CMS platform such as WordPress. For more information, you shall <a rel="nofollow" href="https://templatemo.com/contact" target="_parent">contact TemplateMo</a> now.</p>
                                </div>
                                </div>
                            </article>
                        </section>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;