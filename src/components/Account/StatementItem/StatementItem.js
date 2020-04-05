import React,{Component} from 'react';

import loader from '../../../assets/gif/loader.gif';
import Aux from './../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

class StatementItem extends Component {
    eliminateItem = (id) => {
        console.log("test" + id);
    }
    render() {
        let statementsItems =     
        this.props.statementList.reverse()
            .slice(this.props.pagina*this.props.filasPorPagina, 
                    this.props.pagina*this.props.filasPorPagina + this.props.filasPorPagina)
            .map((st) => (
                <TableRow key={st.id}>
                    <TableCell align="center">{st.statement.tipo}</TableCell>
                    <TableCell align="center">{st.statement.amount}</TableCell>
                    <TableCell align="center">
                        <Button btnType="removeStatementItem" clicked = {() => this.eliminateItem(st.id)}>
                            Eliminate
                        </Button>
                    </TableCell>
                </TableRow>
        ));
    if( this.props.loader ){
        statementsItems = (
            <TableRow>
                <TableCell align="center" colSpan={2}>
                    <img src = {loader} alt="Cargando..." width="60"/>
                </TableCell>
            </TableRow>
        );
    }
    if( !this.props.loader && !this.props.statementList.length ){
        statementsItems = (
            <TableRow>
                <TableCell align="center" colSpan={2}>No existen depositos</TableCell>
            </TableRow>
        );
    }
    return (
        <Aux>
            {statementsItems}
        </Aux>
    );
    }
}
export default StatementItem;