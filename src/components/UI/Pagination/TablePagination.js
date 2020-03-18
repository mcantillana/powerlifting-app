import React from 'react';
import TablePagination from '@material-ui/core/TablePagination';

const tablePagination = (props) => {
    return(
        <TablePagination
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