import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';

import PowerlifterImage from '../../../assets/images/Powerlifter.jpg';

const useStyles = makeStyles((theme) => ({
    moreInfo: {
        marginTop: '140px',
    },
    leftImage: {
        '& img':{
            width: '100%',
            overflow: 'hidden'
        }    
    },
    moreInfoContent: {
        backgroundColor: '#F7F7F7',
    },
    rightContent: {
        '& span': {
            textTransform: 'uppercase',
            fontSize: '15px',
            color: '#666',
            letterSpacing: '1px',
            marginBottom: '10px',
            display: 'block'
        },
        '& h2': {
            fontSize: '36px',
            fontWeight: '600',
            marginBottom: '35px'
        },
        '& em': {
            fontStyle: 'normal',
            color: '#FF0000'
        },
        '& p': {
            marginBottom: '30px'
        },
        [theme.breakpoints.up('xs')]: {
            padding: '30px',
            marginRight: '0px',
            marginBottom: '30px'
        },
        [theme.breakpoints.up('sm')]: {
            padding: '45px 45px 45px 30px',
            marginRight: '30px',
            marginBottom: '0px'
        },
    }
}));
const Information = (props) => {
    const classes = useStyles();
    return(
        <div className={[classes.moreInfo, classes.aboutInfo].join(" ")}>
            <div className={classes.moreInfoContent}>
                <Grid container>
                        <Grid item md={6}>
                            <div className={classes.rightContent}>
                                <span>Disciplina de fuerza</span>
                                <h2>Conoce mas sobre <em>Powerlifting</em></h2>
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
                                <img src={PowerlifterImage} alt=""/>
                            </div>
                        </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Information;