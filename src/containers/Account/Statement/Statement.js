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
            statements: null,
            loading: true,
            pagina: 0,
            filasPorPagina: 10,
            filas: 0
        }
    }
    componentDidMount(){
        axios.get('movimientos.json')
            .then(response => {
                this.setState({
                    statements: response.data, 
                    loading: false,
                    filas: Object.getOwnPropertyNames(response.data).length
                });
                
            });
    }

    handleChangePage = (event, nuevaPagina) => {
        this.setState({
            pagina: nuevaPagina
        });
    }
    
    handleRowsPerPage = (event) => {
        this.setState({
            filasPorPagina: +event.target.value,
            pagina: 0
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
        let numberRows = [5,10,25,50,this.state.filas];
        let statementsItems =     
            statementsArray.reverse()
                .slice(this.state.pagina*this.state.filasPorPagina, 
                        this.state.pagina*this.state.filasPorPagina + this.state.filasPorPagina)
                .map((st) => (
                    <TableRow key={st.id}>
                        <StatementItem type={st.statement.tipo} 
                                        amount={st.statement.amount}
                                        loader={this.state.loading}/>
                       {/*<TableCell align="center">{st.statement.tipo}</TableCell>
                        <TableCell align="center">{st.statement.amount}</TableCell>*/}
                    </TableRow>
            ));
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
                            {statementsItems}
                            {/*<StatementItem statementList = {statementsArray} 
                                            loader = {this.state.loading} 
                                            pagina = {this.state.pagina} 
                                            filasPorPagina = {this.state.filasPorPagina}/>*/}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    classSection="PaginationStatement"
                    rows={this.state.filas}
                    rowsPage={this.state.filasPorPagina}
                    page={this.state.pagina}
                    numberRows={numberRows}
                    changePage={this.handleChangePage}
                    rowsPerPage={this.handleRowsPerPage}
                />
            </div>
        );
    }
}
export default Statement;