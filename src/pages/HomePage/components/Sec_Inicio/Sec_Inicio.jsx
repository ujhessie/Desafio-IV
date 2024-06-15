import { Header } from "../../../../components/Header/Header";
import "./sec_Inicio.css";
import { MaxContainer } from "./../../../../components/MaxContainer/MaxContainer";
import  Button  from "../../../../components/Button/Button";

export const Sec_Inicio = () => {
  return (
    <>
      <Header />
      <section id='hero-section'>
        <MaxContainer>
          <div className='content-sec-inicio'>
            <h1>Desvende os Desafios das ONGs e Faça a Diferença.</h1>
            <p className='subtitulo'>
              Um jogo transformador que coloca você no centro das ações
              humanitárias.
            </p>
            <div className='ctas'>
              <div>Jogue</div>
              <div>Entenda</div>
              <div>Apoie</div>
            </div>

            < Button />
          </div>
        </MaxContainer>
      </section>
    </>
  );
};
