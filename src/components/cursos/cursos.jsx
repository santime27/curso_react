import './style.css'
import icon_cursos from './chalkboard-user-solid.svg'

export default function Cursos(){


    return  (<div>
                <div className='recuadro_cursos'>
                    <h1 className='encabezado_cursos'>Cursos</h1>
                    <img src={icon_cursos} alt="icono" className='icono_cursos'/>
                </div>
                <ul>
                    <li>Algorithmic Trading A-Z with Python, Machine Learning & AWS</li>
                    <li>Deep Learning con Python y Keras. Redes Neuronales Avanzado</li>
                    <li>Machine Learning con Python. Aprendizaje Automático Avanzado</li>
                    <li>Curso Power BI – Análisis de Datos y Business Intelligence</li>
                    <li>Kubernetes al completo</li>
                    <li>Docker y Docker Swarm</li>
                    <li>Smart Contracts y Blockchain con Solidity de la A a la Z</li>
                </ul>
            </div>
            )
}