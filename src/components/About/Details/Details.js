import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    sectionHeading: {
        textAlign: 'center',
	    marginBottom: '80px',
        '& h2': {
            fontSize: '36px',
            fontWeight: '600',
            color: '#1E1E1E'
        },
        '& em': {
            fontStyle: 'normal',
	        color: '#FF0000'
        },
        '& span': {
            display: 'block',
            marginTop: '15px',
            textTransform: 'uppercase',
            fontSize: '15px',
            color: '#666',
            letterSpacing: '1px'
        }
    },
    details: {
        backgroundColor: '#F7F7F7',
        marginTop: '140px',
        marginBottom: '-140px',
        padding: '120px 0px',
    },
    detailItem: {
        '& img': {
            width: '100%',
	        overflow: 'hidden'
        },
        [theme.breakpoints.up('xs')]: {
            marginBottom: '30px'
        },
        [theme.breakpoints.up('sm')]: {
            marginBottom: '0px'
        },
    },
    downContent: {
        backgroundColor: '#FFF',
        padding: '30px',
        '& h4': {
            fontSize: '20px',
            fontWeight: '700',
            letterSpacing: '0.25px',
            marginBottom: '10px'
        },
        '& span': {
            color: '#FF0000',
            fontWeight: '600',
            fontSize: '14px',
            display: 'block',
            marginBottom: '15px'
        },
        '& p': {
            marginBottom: '20px'
        }
    }
}));
const Details = (props) => {
    const classes = useStyles();
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