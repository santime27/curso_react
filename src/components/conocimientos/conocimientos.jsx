import './style.css'
import tools_icon from './tools.svg'
import python_logo from './python.svg'
import sql_logo from './sql.svg'
import js_logo from './js.svg'
import react_logo from './react.svg'
export default function Conocimientos(){
    return  <div>
                <div className='recuadro_conocimientos'>
                    <h1 className='emcabezado_conocimientos'>Conocimientos y Habilidades</h1>
                    <img src={tools_icon} alt="icono" className='conocimientos_icono' />
                </div>
                <div>                    
                    <img src={python_logo} alt="python_logo" className='logo_habilidad'/>
                    <h1 className='titulo_conocimiento'><b>Python</b></h1>
                    <img src={sql_logo} alt="python_logo" className='logo_habilidad'/>
                    <h1 className='titulo_conocimiento'><b>SQL</b></h1>
                    <img src={js_logo} alt="python_logo" className='logo_habilidad'/>
                    <h1 className='titulo_conocimiento'><b>JavaScript</b></h1>
                    <img src={react_logo} alt="python_logo" className='logo_habilidad'/>
                    <h1 className='titulo_conocimiento'><b>React</b></h1>             
                </div>
            </div>
}