import Card from "./components/encabezado/head";
import Estudios from "./components/estudios_profesionales/mid";
import Cursos from "./components/cursos/cursos";
import Experiencia from "./components/experiencia/exp";
import Conocimientos from "./components/conocimientos/conocimientos";
import Perfil from "./components/perfil/perfil";



function App() {
  return (
    <div className="App">
        <Card/>
        <Estudios/>
        <Cursos/>
        <Conocimientos/>
        <Experiencia/>
        <Perfil/>

    </div>
  );
}

export default App;
