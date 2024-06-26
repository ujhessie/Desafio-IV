/* eslint-disable react/prop-types */
import "./button.css";

const Button = ({ botao, rota }) => {
  return (
    <div className='div-botao'>
      <a className="botao" type='submit'href={rota} >{botao}</a>
    </div>
  );
}

export default Button;
