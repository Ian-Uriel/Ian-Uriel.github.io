import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root'))

root.render(
    <main>
        <header>
            <nav>
                <ul>
                    <li><a href='#hero'>Inicio</a></li>
                    <li><a href='#sobre-mi'>Sobre Mi</a></li>
                    <li><a href=''>Habilidades</a></li>
                    <li><a href=''>Conocimientos</a></li>
                    <li><a href=''>Contacto</a></li>
                </ul>
            </nav>
        </header>
        <section id = 'hero'  >
            <h1>Ian Uriel Duhart</h1>
            <h2>Front End Developer</h2> 
        </section>
        <section id="sobre-mi">
            <div class="container">
                <div class="img-sobre-mi"></div>
                <div class="texto">
                    <h2>Hola !!!</h2>
                    <p>
                        <b>Bienvenid@</b> a mi Portafolio, estoy seguro de que soy una muy buena opción para tu empresa.
                        <br />
                        Si algo no sé... pregunto, investigo, aprendo y <b>lo desarrollo de la mejor manera.</b> Soy resolutivo y
                        persistente, <b>mis objetivos se cumplen</b> porque genero las condiciones para que se cumplan. Estaré
                        centrado en recibir todo el conocimiento necesario para <b>ser productivo lo antes posible.</b>
                        <br />
                        <br />
              
                        Tengo una propuesta para vos...
                        <br />
                        Te cambio <b>ACTITUD</b> por <b>HABILIDADES</b> 😉​.
                    </p>
                </div>
            </div>
        </section>
    </main>
)