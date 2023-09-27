import './style.css'
import foto from './foto.jpg';
export default function Card(){

    return  <div>
                <div className='separador'></div>
                <div className='rectangulo_encabezado'></div>
                <img src={foto} alt="imagenCV" className='fotocv'/>
                <div className='rectangulo_nombre'>
                    <h1 className='nombre'>Santiago Meneses Garcia</h1>
                </div>
                <div className='informacion'>
                    <h1 id='titulo_informacion_contacto'>Informacion de contacto</h1>
                    <ul>
                        <li>Ciudad: Medellin</li>
                        <li>Telefono: 3024459655</li>
                        <li>Email: santimene_27@hotmail.com</li>
                        <li>Fecha de nacimiento: 14 de agosto de 1996 <b>( 27años )</b></li>
                        
                    </ul>
                </div>
                
                
            </div>
            }

