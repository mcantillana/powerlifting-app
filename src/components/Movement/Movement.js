import {React} from 'react';
import { useParams } from 'react-router-dom';

const Movement = (props) => {
    let { movement } = useParams();
    console.log(movement);
    return (
        <div>
            <h1>{movement}</h1>
        </div>
    )
};
export default Movement;