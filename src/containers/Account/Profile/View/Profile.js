import React, {Component} from 'react';

import Button from '../../../../components/UI/Button/Button';
import axios from '../../../../axios';
import Section from '../../../../components/User/Section/Section';

import Grid from '@material-ui/core/Grid';
import classes from './Profile.module.css';

class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            information: {}
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
                        information: profileData[0]
                    });
                }
            });
    }

    isEmptyInformation (info) {
        return Object.keys(info).length === 0;
    }

    render(){
        return(
            <div className={classes.Profile}>
                <Grid className={classes.Container} container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justify="center">
                    <Section profileData = {this.state.information}/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
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