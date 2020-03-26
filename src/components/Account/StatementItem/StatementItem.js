import React from 'react';

import loader from '../../../assets/gif/loader.gif';
import TableCell from '@material-ui/core/TableCell';

import Aux from './../../../hoc/Aux/Aux';
const statementItem = (props) => {
    /*let statementsItems =     
            props.statementList.reverse()
                .slice(props.pagina*props.filasPorPagina, props.pagina*props.filasPorPagina + props.filasPorPagina)
                .map((st) => (
                    <TableRow key={st.id}>
                        <TableCell align="center">{st.statement.tipo}</TableCell>
                        <TableCell align="center">{st.statement.amount}</TableCell>
                    </TableRow>
            ));*/

        let statementsItems = (
            <Aux>
                <TableCell align="center">{props.type}</TableCell>
                <TableCell align="center">{props.amount}</TableCell>
            </Aux>
        );
        if( props.loader ){
            statementsItems = (
                    <TableCell align="center" colSpan={2}>
                        <img src = {loader} alt="Cargando..." width="60"/>
                    </TableCell>
            );
        }
        /*if( !props.loader && !props.statementList.length ){
            statementsItems = (

                    <TableCell align="center" colSpan={2}>No existen depositos</TableCell>

            );
        }*/
    return statementsItems;
}

export default statementItem;