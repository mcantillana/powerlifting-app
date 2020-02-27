import React from 'react';
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
                    <TableCell align="center" colSpan={2}>Cargando...</TableCell>
                </TableRow>
            )
        }
    return (
        <Aux>
            {statementsItems}
        </Aux>
    );
}

export default statementItem;