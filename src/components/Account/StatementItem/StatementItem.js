import React from 'react';

import loader from '../../../assets/gif/loader.gif';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import Aux from './../../../hoc/Aux/Aux';
const statementItem = (props) => {
    let statementsItems =     
            props.statementList.map((st) => (
                <TableRow key={st.id}>
                    <TableCell align="center">{st.statement.tipo}</TableCell>
                    <TableCell align="center">{st.statement.amount}</TableCell>
                </TableRow>
            ));
        if( props.loader ){
            statementsItems = (
                <TableRow>
                    <TableCell align="center" colSpan={2}>
                        <img src = {loader} alt="Cargando..." width="60"/>
                    </TableCell>
                </TableRow>
            );
        }
        if( !props.loader && !props.statementList.length ){
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

export default statementItem;