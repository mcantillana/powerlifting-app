import React, {Component} from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import axios from '../../../axios';
import classes from './Statement.module.css';


class Extracto extends Component {

    constructor(props){
        super(props);
        this.state = {
            statements: null,
            loading: true
        }
    }
    componentDidMount(){
        axios.get('movimientos.json')
            .then(response => {
                this.setState({
                    statements: response.data, 
                    loading: false
                });
                
            });
    }
    render(){
        let statementsArray = [];
        for( let key in this.state.statements ){
            statementsArray.push({
                id: key,
                statement: this.state.statements[key]
            });
        };
        let statementsItems =     
            statementsArray.map((st) => (
                <TableRow key={st.id}>
                    <TableCell align="center">{st.statement.tipo}</TableCell>
                    <TableCell align="center">{st.statement.amount}</TableCell>
                </TableRow>
            ));
        if( this.state.loading ){
            statementsItems = (
                <TableRow>
                    <TableCell align="center" colSpan={2}>Cargando...</TableCell>
                </TableRow>
            )
        }
        return(
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.Header} align="center"><span>Tipo</span></TableCell>
                            <TableCell className={classes.Header} align="center"><span>Monto</span></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {statementsItems}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}
export default Extracto;