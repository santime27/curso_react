import './style.css'
import icon from './person-digging-solid.svg'
export default function Experiencia(){
    return  <div className='experiencia'>
                <div className='experiencia_recuadro'>
                    <h1 className='experiencia_titulo'>Experiencia Laboral</h1>
                    <img src={icon} alt="icon" className='icono_experiencia'/>
                </div>
                
                <ul>
                    <li><b>Cargo:</b> Analista de datos</li>
                    <li><b>Empresa:</b>  Servicios y Mercadeo</li>
                    <li><b>Fecha de contratacion:</b> 12/09/2022</li>
                    <li><b>Fecha de culminación:</b> 02/02/2023</li>
                    <li><b>Funciones:</b>
                        <div className='lista_experiencia'>
                            <ul>
                                <li>Implementar soluciones de BI y data analytics en los diferentes frentes de negocio de la compañía.</li>
                                <li>Realizar integraciones con los distintos servicios de almacenamiento y CRM disponibles dentro
                                    de la compañía.
                                </li>
                                <li>Desarrollar modelos predictivos y de segmentación de clientes para optimizar la toma de decisiones y mejorar la eficiencia operativa
                                </li>
                                <li>Contribuir al desarrollo de estrategias comerciales sólidas basadas en datos que llevaron a una medicion efectiva de
                                    los ingresos economicos de la compañía.                                
                                </li>
                                <li>Contruir y mantener procesos de ETL desarrollados en Python utilizando la
                                    infraestructura Cloud de la compañia.</li>
                            </ul>
                        </div>
                    </li>
                    <li><b>Lider inmediato:</b>
                        <div className='lista_experiencia'>
                            <ul>
                                <li>Cristian Daniel Berrio Mejia</li>
                                <li>Lider de Analitica Servicios y Mercadeo</li>
                                <li>3175641752</li>
                                <li>Manizales caldas</li>
                            </ul>
                            
                        </div>
                    
                    </li>
                </ul>
                <div className='espaciador_horizontal'></div>
                <ul>
                    <li><b>Cargo:</b> Analista de programabilidad</li>
                    <li><b>Empresa:</b> Tigo</li>
                    <li><b>Fecha de contratacion:</b> 02/02/2023</li>
                    <li><b>Fecha de culminación:</b> Laborando actualmente </li>
                    <li><b>Funciones:</b></li>
                        <div className='lista_experiencia'>
                            <ul>
                                <li>Llevar a cabo labores de Ingenieria de datos con el objetivo de diseñar e Implementar
                                    soluciones que aborden las necesidades especificas de nuestros clientes.
                                </li>
                                <li>Desplegar y mantener multiples soluciones de software dentro de la infraestructura
                                    On-premise de la compañia. Utilizando principalmente la arquitectura de microservicios.
                                </li>
                                <li>
                                    Planificar y diseñar la estructura adecuada de componentes de bases de datos con el fin de garantizar
                                    la gestion eficiente y segura de la informacion de la compañia.
                                </li>
                                <li>
                                    Contribuir al desarrollo de modelos de aprendizaje automatico y tecnicas de estadistica avanzada
                                    con el fin de identificar patrones y tendencias que ayuden al cliente a tomar decisiones.                                 
                                </li>
                                <li>
                                    Abordar cada una de las necesidades y requerimientos del cliente dentro de una planificacion efectiva y
                                    organizada utilizando SCRUM como metodologia agil.
                                </li>
    
                            </ul>
                        </div>
                        <li><b>Lider inmediato:</b>
                            <div className='lista_experiencia'>
                                <ul>
                                    <li>Rigoberto Rengifo Urrego</li>
                                    <li>Lider Tecnico</li>
                                    
                                </ul>
                            </div>
                        </li>
                </ul>
           
                
                    
                
            </div>
}