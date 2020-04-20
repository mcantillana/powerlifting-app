import React, {Component} from 'react';
import ProfileData from '../../../components/User/ProfileData/ProfileData';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios';

import Grid from '@material-ui/core/Grid';
import classes from './Profile.module.css';

class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            accountData:{},
            exist: false
        };
    }

    returnBack = () => {
        this.props.history.goBack();
    }

    componentDidMount(){
        axios.get('account/user.json')
            .then(response => {
                if(response.data){
                    const userData = response.data;
                    this.setState(
                        {
                            accountData: userData,
                            exist: true
                        }
                    );
                }
            });
    }

    render(){
        let profileSection = <Button>Agregar</Button>;
        if(this.state.exist){
            profileSection = Object.keys(this.state.accountData).map(dataKey => {
                return [...Array(this.state.accountData[dataKey] )].map((i) => {
                    return <ProfileData key={dataKey + i} 
                                        dataName={dataKey} 
                                        dataValue={this.state.accountData[dataKey]} />;
                });
            })
        }
        return(
            <div className={classes.Profile}>
                <Grid className={classes.Container} container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justify="center">
                    {profileSection}
                </Grid>
                <Grid container className={classes.Buttons}
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center">
                    <Button btnType="back" clicked={this.returnBack}>Atras</Button>
                </Grid>
            </div>
        );
    }
}

export default Profile;