import React from 'react';
import Modal from '@material-ui/core/Modal';

import Aux from '../Aux/Aux';
import useHttpErrorHandler from '../../hooks/http-error-handler';

const withErrorHandler = (WrappedComponent,  axios) => {

    return  props => {
        const [error, clearError] = useHttpErrorHandler(axios);
        return (
            <Aux>
                <Modal
                    open={error}
                    onClose={clearError}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    {error ? error.message : null}
                </Modal>
                <WrappedComponent {...props} />
            </Aux>
        );
    }
}

export default withErrorHandler;