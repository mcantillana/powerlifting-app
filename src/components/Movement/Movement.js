import {React} from 'react';
import { useParams } from 'react-router-dom';
import WeightData from '../../containers/WeightData/WeightData';

const Movement = (props) => {
    let { movement } = useParams();
    console.log(movement);
    return (
        <div>
            <h1>{movement}</h1>
            <WeightData/>
        </div>
    )
};
export default Movement;