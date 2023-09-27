import './style.css'
import icon from './graduation-cap-solid.svg'
export default function Estudios(){
        return  <div>
            
                    <div className='recuadro_estudios'>
                        <img src={icon} alt="icon" className='icono_estudio' />
                        <h1 className='encabezado_estudios'>Estudios Profesionales</h1>
                    </div>
                    <div>
                        <ul>
                            <h1 className='estudios'><b>Tecnologia en Electronica</b></h1>
                            <ul>
                                <li>Instituto Tecnologico Metropolitano (ITM)</li>
                                <li>Culminado</li>
                                <li>2020</li>
                            </ul>
                            <h1 className='estudios'><b>Ingenieria Electronica</b></h1>
                            <ul>
                                <li>Instituto Tecnologico Metropolitano (ITM)</li>
                                <li>En formacion</li>
                                <li>8 semestre</li>
                            </ul>
                            
                        </ul>
                    </div>
                </div>


}