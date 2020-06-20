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
            information: [],
            loader: true,
            exist: false
        };
    }   

    returnBack = () => {
        this.props.history.goBack();
    }

    componentDidMount(){
        axios.get('account/profile.json')
            .then(response => {
                let size = 0;
                let data = [];
                if(response.data) {
                    data = response.data;
                    size = Object.getOwnPropertyNames(response.data).length;
                }
                return [data, size];
            })
            .then(([response, size]) => {
                const _keys = Object.keys(response);
                const newResponse = _keys.map(key => {
                    return {
                        profile: response[key]
                    };
                });
                
                return [newResponse, size];
            })
            .then(([response, size]) => {
                let flag  = false;
                if(size > 0){
                    flag = false;
                }
                this.setState({
                    information: response[0],
                    loader: flag,
                    exist: (size > 0) ? true:false
                })
            });
    }

    render(){
        return(
            <div className={classes.Profile}>
                <Grid className={classes.Container} container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justify="center">
                    <Section profileData = {this.state.information} 
                    loader = {this.state.loader}
                    exist = {this.state.exist} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
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