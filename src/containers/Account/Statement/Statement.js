import React, {Component} from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';

import axios from '../../../axios';
import StatementItem from '../../../components/Account/StatementItem/StatementItem';
import classes from './Statement.module.css';


class Statement extends Component {

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
        let all = [5,10,25,50,100];
        return(
            <div>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.Header} align="center"><span>Tipo</span></TableCell>
                                <TableCell className={classes.Header} align="center"><span>Monto</span></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <StatementItem statementList = {statementsArray} loader = {this.state.loading}/>
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    component="div"
                    count={100}
                    rowsPerPage={10}
                    page={0}
                    rowsPerPageOptions={all}
                />
            </div>
        );
    }
}
export default Statement;