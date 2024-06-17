import { Sec_Inicio } from "./components/Sec_Inicio/Sec_Inicio";
import { Sec_sobre } from "./components/Sec_Sobre/Sec_sobre";
import { Sec_Video } from "./components/Sec_Video/Sec_Video";
import "./homePage.css";

export const HomePage = () => {
  return (
    <div>
      <Sec_Inicio />
      <Sec_sobre />
      <Sec_Video/>
    </div>
  );
};
