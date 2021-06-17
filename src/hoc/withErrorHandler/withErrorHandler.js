import React from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

import Aux from '../Aux/Aux';
import useHttpErrorHandler from '../../hooks/http-error-handler';

const getModalStyle = () => {
    const top = 50;
    const left = 50;
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        width: 450,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const withErrorHandler = (WrappedComponent,  axios) => {
    return  props => {
        const classes = useStyles();
        const [modalStyle] = React.useState(getModalStyle);
        const [error, clearError] = useHttpErrorHandler(axios);
        console.log(error);
        console.log(clearError);
        return (
            <Aux>
                <Modal
                    open={false}
                    onClose={clearError}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <div style={modalStyle} className={classes.paper}>
                        <h2>ERROR</h2>
                        <p>
                            {error ? error.message : null}
                        </p>
                    </div>
                </Modal>
                <WrappedComponent {...props} />
            </Aux>
        );
    }
}

export default withErrorHandler;