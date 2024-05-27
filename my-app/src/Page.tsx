import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./ReduxState/state";
import { increment, incrementByAmount, decrementByAmount } from "./ReduxState/counter/counterSlice";
import { decrement } from "./ReduxState/counter/counterSlice";
const Page:React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div style={{margin : '0 auto', maxWidth: '500px'}}>
      <h1 style={{textAlign: 'center', width: '170px', fontWeight: 'bold'}}>{count}</h1>
      <div style={{justifyContent: 'space-between'}}>
        <button style={{margin: '10px'}} onClick={() => dispatch(incrementByAmount(20))}>increment</button>
        <button style={{margin: '10px'}} onClick={() => dispatch(decrementByAmount(2))}>decrement</button>
      </div>
    </div>
  );
};

export default Page;
