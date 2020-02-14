import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import classes from './Extracto.module.css';

const extracto = (props) => {
    return(
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.Header} align="center"><span>Monto</span></TableCell>
                        <TableCell className={classes.Header} align="center"><span>Transaccion</span></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align="right">200</TableCell>
                        <TableCell align="right">Deposito</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right">10</TableCell>
                        <TableCell align="right">Retiro</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right">330</TableCell>
                        <TableCell align="right">Deposito</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default extracto;