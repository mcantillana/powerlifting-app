import React, {Component} from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


import axios from '../../../axios';
import TablePagination from '../../../components/UI/Pagination/TablePagination';
import StatementItem from '../../../components/Account/StatementItem/StatementItem';
import classes from './Statement.module.css';


class Statement extends Component {

    constructor(props){
        super(props);
        this.state = {
            statements: [],
            loading: true,
            page: 0,
            rowsPerPage: 10,
            rows: 0
        }
    }
    componentDidMount(){
        axios.get('movimientos.json')
            .then(response => {
                let size = 0;
                if(response.data){
                    size = Object.getOwnPropertyNames(response.data).length;
                }
                return [response.data, size];
            })
            .then(([response, size]) => {
                const _keys = Object.keys(response);
                const newResponse = _keys.map(key => {
                    return {
                        id: key,
                        statement: response[key]
                    }
                });
                return [newResponse, size];
            })
            .then(([response, size])=> {
                this.setState({
                    statements: response,
                    loading: false,
                    rows: size
                });
            });
    }
     
    handleChangePage = (event, newPage) => {
        this.setState({
            page: newPage
        });
    }
    
    handleRowsPerPage = (event) => {
        this.setState({
            rowsPerPage: +event.target.value,
            page: 0
        });
    }

    eliminateItem = (statementItemId) => {
        let confirmation = window.confirm("Please confirm in order to remove this statement");
        if(confirmation){
            axios.delete('movimiento/'+statementItemId+'.json/').then(response => {
                this.setState((prevState) => {
                    return {
                        statements: prevState.statements.filter( st => st.id !== statementItemId )
                    }
                });
                alert("Movement eliminated successfully");
            })
            .catch(() => {
                alert("There was an error while eliminating the item, please verify it.")
            });
        }
    }

    render(){
        let numberRows = [5,10,25,50,this.state.rows];
        return(
            <div>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.Header} align="center"><span>Type</span></TableCell>
                                <TableCell className={classes.Header} align="center"><span>Amount</span></TableCell>
                                <TableCell className={classes.Header} align="center"><span>Options</span></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <StatementItem statementList = {this.state.statements} 
                                            loader = {this.state.loading} 
                                            pagina = {this.state.page} 
                                            filasPorPagina = {this.state.rowsPerPage}
                                            removeStatement = {this.eliminateItem}/>
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    classSection="PaginationStatement"
                    rows={this.state.rows}
                    rowsPage={this.state.rowsPerPage}
                    page={this.state.page}
                    numberRows={numberRows}
                    changePage={this.handleChangePage}
                    rowsPerPage={this.handleRowsPerPage}
                />
            </div>
        );
    }
}
export default Statement;