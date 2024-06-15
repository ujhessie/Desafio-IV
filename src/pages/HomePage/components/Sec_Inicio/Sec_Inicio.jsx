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
            <div className='logins'>
              <a href='#' className='google'>
                ENTRAR COM GOOGLE
              </a>
              <a href='#' className='facebook'>
                ENTRAR COM FACEBOOK
              </a>
            </div>

            <h2 className='logo-2'>Voluntarygame [Logo]</h2>

            <p className='text'>
              Embarque em uma jornada transformadora com &apos;Desafios
              Humanitários&apos;. Este jogo inovador coloca você no coração das
              operações das ONGs, enfrentando os desafios reais que essas
              organizações encontram diariamente. Desde a mobilização de
              voluntários até a arrecadação de fundos, cada nível do jogo revela
              as complexidades e as recompensas do trabalho humanitário. Através
              de uma narrativa envolvente e mecânicas de jogo realistas,
              &apos;Desafios Humanitários&apos; não só entretem, mas também
              educa e inspira. Descubra como suas ações podem fazer a diferença
              no mundo real e apoie as causas que importam. Junte-se a nós e
              veja como é ser um herói do cotidiano!
            </p>

            <p>[botão aqui]</p>
          </div>
        </MaxContainer>
      </section>
    </>
  );
};
