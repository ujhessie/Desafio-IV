import { Sec_Inicio } from "./components/Sec_Inicio/Sec_Inicio";
import { Sec_sobre } from "./components/Sec_Sobre/Sec_sobre";
import "./homePage.css";

export const HomePage = () => {
  return (
    <div>
      <Sec_Inicio />
      <Sec_sobre />
    </div>
  );
};
