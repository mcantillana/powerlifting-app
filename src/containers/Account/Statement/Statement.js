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
        console.log("pagina: "+this.state.pagina);
        console.log("rowsperpage: "+this.state.filasPorPagina);
        let statementsArray = [];
        for( let key in this.state.statements ){
            statementsArray.push({
                id: key,
                statement: this.state.statements[key]
            });
        };
        let all = [2,5,10,25,50,this.state.filas];
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
                            <StatementItem statementList = {statementsArray} 
                                            loader = {this.state.loading}/>
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    component="div"
                    count={this.state.filas}
                    rowsPerPage={this.state.filasPorPagina}
                    page={this.state.pagina}
                    rowsPerPageOptions={all}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleRowsPerPage}
                />
            </div>
        );
    }
}
export default Statement;