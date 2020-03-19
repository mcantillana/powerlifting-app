import React from 'react';
import TablePagination from '@material-ui/core/TablePagination';

import classes from './TablePagination.module.css';
const tablePagination = (props) => {
    return(
        <TablePagination
            className={classes[props.classSection]}
            component="div"
            count={props.rows}
            rowsPerPage={props.rowsPage}
            page={props.page}
            rowsPerPageOptions={props.numberRows}
            onChangePage={props.changePage}
            onChangeRowsPerPage={props.rowsPerPage}
        />
    )
}
export default tablePagination;