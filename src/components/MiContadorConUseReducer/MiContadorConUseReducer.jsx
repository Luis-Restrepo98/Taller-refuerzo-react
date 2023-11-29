import React, {useReducer} from 'react'


const contadorReducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENTAR':
        return { contador: state.contador + 1 };
      case 'DISMINUIR':
        return { contador: state.contador - 1 };
      default:
        return state;
    }
  };



const MiContadorConUseReducer = () => {
    const [state, dispatch] = useReducer(contadorReducer, {contador: 0});
  return (
    <>
        <button onClick={() => dispatch({type: "DISMINUIR"})}>-</button>
        <span>{state.contador}</span>
        <button onClick={() => dispatch({type: "INCREMENTAR"})}>+</button>
    </>
  )
};

export default MiContadorConUseReducer