import "./Init.css";
import TypeWriter from "../TypeWriter/TypeWriter";
import Particles from "../Particles/Particles";
const Init = () => {
  return (
    <section className="init">
      <div className="init__Front">
        <p>My Image here</p>
        <h1>Ignacio Consuegra</h1>
        <TypeWriter
          texts={["Ignacio Consuegra", "React Developer", "Html", "Css", "Js"]}
        />
      </div>
      <div className="init__Back">
        <Particles/>
      </div>
    </section>
  );
};
export default Init;
