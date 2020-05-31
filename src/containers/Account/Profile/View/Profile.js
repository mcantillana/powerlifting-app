import React, {Component} from 'react';

import FormProfile from '../Form/Form';
import Information from '../../../../components/User/Information/Information';
import Button from '../../../../components/UI/Button/Button';
import axios from '../../../../axios';
import loader from '../../../../assets/gif/loader.gif';

import Grid from '@material-ui/core/Grid';
import classes from './Profile.module.css';

class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            information: {},
            exist: false
        };
    }

    returnBack = () => {
        this.props.history.goBack();
    }

    componentDidMount(){
        axios.get('account/profile.json')
            .then(response => {
                const data = response.data;
                if(data){
                    const profileData = Object.keys(data).map(key => {
                        return {
                            profile: data[key]
                        }
                    });
                    this.setState({
                        exist: true,
                        information: profileData[0]
                    });
                }
            });
    }

    isEmptyInformation (info) {
        return Object.keys(info).length === 0;
    }

    render(){
        let profileSection = <FormProfile/>;
        let information = this.state.information;
        if(this.isEmptyInformation(information) && !this.state.exist) {
            profileSection = <img src = {loader} alt="Cargando..." width="60"/>;
        }

        if(this.state.exist){
            profileSection = <Information info = {this.state.information} />
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