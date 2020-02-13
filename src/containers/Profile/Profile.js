import React, {Component} from 'react';
import ProfileData from '../../components/User/ProfileData/ProfileData';
import Button from '../../components/UI/Button/Button';

import Grid from '@material-ui/core/Grid';
import classes from './Profile.module.css';

class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            user:{
                nombres: 'Oscar Rolando',
                apellidos: 'Gamboa Acho',
                documento: '7925512',
                email: 'oscar@wagento.com'
            }
        };
    }

    returnBack = () => {
        this.props.history.goBack();
    }

    render(){
        return(
            <div className={classes.Profile}>
                <Grid className={classes.Container} container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justify="center">
                    { 
                        Object.keys(this.state.user).map(dataKey => {
                            return [...Array(this.state.user[dataKey] )].map((i) => {
                                return <ProfileData key={dataKey + i} 
                                                    dataName={dataKey} 
                                                    dataValue={this.state.user[dataKey]} />;
                            });
                        })
                    }
                </Grid>
                <Grid container className={classes.Buttons}
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center">
                    <Button btnType="ProfileBack" clicked={this.returnBack}>Atras</Button>
                </Grid>
            </div>
        );
    }
}

export default Profile;