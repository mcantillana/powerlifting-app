import {React}  from 'react';
import Aux from '../../hoc/Aux/Aux';
import Weight from '../../components/Weight/Weight';
import DisciplineBuilder from '../../components/Weight/DisciplinesBuilder/DisciplinesBuilder';
const PanelLifting = (props) => {
    return (
        <Aux>
            <Weight/>
            <DisciplineBuilder/>
        </Aux>
    );
}
export default PanelLifting;