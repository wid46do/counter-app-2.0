import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../actions/actions";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../counter.css'
import { Button } from "react-bootstrap";

export default function Counter({max, min, step}){
    const dispatch = useDispatch();
    const count = useSelector((state) => state.count);
    return(
        <div className="counter-app d-flex justify-content-center">
            <div className="Counter rounded p-5 shadow-lg bg-body rounded">
                <h4 className="fw-bold">Counter App</h4>
                <div className="number d-flex justify-content-center">
                    <p className="count fw-bold">{count}</p>
                </div>
                <div className="row mx-0">
                    <Button className="col" variant="primary" onClick={() => increment(dispatch, max, step, count)}>+</Button>
                    <Button className="col mx-3" variant="secondary" onClick={() => decrement(dispatch, min, step, count)}>-</Button>
                    <Button className="col" variant="success"onClick={() => reset(dispatch, min)}>Reset</Button>
                </div>
            </div>
        </div>
    )
}