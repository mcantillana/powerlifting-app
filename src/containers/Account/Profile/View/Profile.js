import React, {Component} from 'react';

import FormProfile from '../Form/Form';
import ProfileData from '../../../../components/User/ProfileData/ProfileData';
import Button from '../../../../components/UI/Button/Button';
import axios from '../../../../axios';

import Grid from '@material-ui/core/Grid';
import classes from './Profile.module.css';

class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            accountData:{
                email: '',
                idnumber: '',
                lastname: '',
                name:''
            },
            exist: false
        };
    }

    returnBack = () => {
        this.props.history.goBack();
    }

    componentDidMount(){
        axios.get('account/profile.json')
            .then(response => {
                const res = response.data;
                if(res){
                    /*const userData = res.map(key=> {
                        const profileData = res[key];
                        return profileData;
                    });
                    this.setState(
                        {
                            accountData: userData,
                            exist: true
                        }
                    );*/
                }
            });
    }

    render(){
        console.log(this.state.accoundData);
        let profileSection = <FormProfile/>;
        if(this.state.exist){
            
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