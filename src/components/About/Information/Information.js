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
                                <span>Disciplina de fuerza</span>
                                <h2>Conoce mas sobre <em>powerlifting</em></h2>
                                <p>Es una disciplina de fuerza, pues consiste en levantar el mayor peso posible en tres ejercicios diferentes. 
                                    Para realizar esta disciplina, el atleta debe tener un entrenamiento físico y mental compuesto por los siguientes ejercicios: <strong>Sentadillas, press de banca y peso muerto.</strong>
                                <br/><br/>El objetivo de cada uno de estos ejercicios es levantar el máximo peso posible mientras se ejecutan, 
                                    con un recorrido completo y según una normativa establecida. En competiciones profesionales, 
                                    el levantamiento válido más pesado es el que cuenta para cada prueba y el ganador es el que consiga mejor puntuación 
                                    por cada uno de los movimientos y por la suma de los tres.</p>
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