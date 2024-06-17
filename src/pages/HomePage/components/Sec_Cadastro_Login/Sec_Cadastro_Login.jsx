import "./sec_Cadastro_Login.css";
import { MaxContainer } from "./../../../../components/MaxContainer/MaxContainer";
import Button from "../../../../components/Button/Button";

export const Sec_Cadastro_Login = () => {
  return (
    <>
      <section id='sec-cadastro-login'>
        <MaxContainer>
          <div className='content'>
            <h2>Cadastre-se</h2>
            <div className='div-inputs'>
              <input
                type='text'
                className='input input-user'
                placeholder='E-mail ou nome de usuário'
              />
              <input type='password' className='input' placeholder='Senha' />
            </div>
            <p className='texto'>
              Esqueceu a senha? Clique <a href=''>aqui</a>
            </p>
            <Button />
          </div>
        </MaxContainer>
      </section>
    </>
  );
};
