import React from 'react';
import Grid from '@material-ui/core/Grid';

import classes from './Details.module.css';

const Details = (props) => {
    return (
        <div className={classes.details}>
            <Grid container>
                <Grid item md={12}>
                    <div className={classes.sectionHeading}>
                        <h2>Movimientos del <em>Powerlifting</em></h2>
                        <span>Existen 3 movimientos dentro de esta disciplina</span>
                    </div>
                </Grid>
                <Grid item md={4}>
                    <div className={classes.detailItem}>
                        <img src="assets/images/team_01.jpg" alt=""/>
                        <div className={classes.downContent}>
                            <h4>Sentadilla</h4>
                            <span>Piernas</span>
                            <p>Es un ejercicio, por lo general, dominante de rodilla. 
                                Esto quiere decir que la ejecución de la misma depende más de una flexión de rodilla que de una flexión de cadera</p>
                        </div>
                    </div>
                </Grid>
                <Grid item md={4}>
                    <div className={classes.detailItem}>
                        <img src="assets/images/team_02.jpg" alt=""/>
                        <div className={classes.downContent}>
                            <h4>Peso Muerto</h4>
                            <span>Espalda/Lumbar</span>
                            <p>Es un gran ejercicio para trabajar las piernas y glúteos al completo además de otros grupos musculares como el abdomen, 
                                espalda baja e incluso brazos. Se levanta la barra desde el suelo hasta la cintura.</p>
                        </div>
                    </div>
                </Grid>
                <Grid item md={4}>
                    <div className={classes.detailItem}>
                        <img src="assets/images/team_03.jpg" alt=""/>
                        <div className={classes.downContent}>
                            <h4>Bench Press</h4>
                            <span>Pectoral</span>
                            <p>Es un ejercicio compuesto que entrena los pectorales (músculos del pecho), los tríceps y los deltoides frontales (hombros). 
                            Es un gran potenciador de la masa muscular de la parte superior del cuerpo, e incluso un importante ejercicio para las mujeres 
                            que quieran entrenar su fuerza de empuje.</p>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Details;