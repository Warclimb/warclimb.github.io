// Importa las dependencias de React y ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// Define un componente React para la barra lateral
function Sidebar() {
  return (
    <div id="sidebar">
      <h2>Sidebar</h2>
      <p>Contenido de la barra lateral</p>
    </div>
  );
}

// Define un componente React para la parte central de la página
function Main() {
  return (
    <div id="main">
      <h1>Bienvenido a mi portafolio</h1>
      <p>Este es un ejemplo de cómo puedes utilizar React y Bootstrap para crear un sitio web moderno y atractivo.</p>
    </div>
  );
}

// Define un componente React para los proyectos
function Project(props) {
  return (
    <div className="project">
      <img src={props.image} alt={props.title} />
      <div className="overlay">
        <div className="overlay-text">
          <h4>{props.title}</h4>
          <p>{props.description}</p>
          <a href={props.link} className="btn">Ver proyecto</a>
        </div>
      </div>
    </div>
  );
}

// Renderiza los componentes en el DOM
ReactDOM.render(
  <Sidebar />,
  document.getElementById('sidebar-container')
);

ReactDOM.render(
  <Main />,
  document.getElementById('main-container')
);

ReactDOM.render(
  <div>
    <Project
      title="Proyecto 1"
      description="Descripción del proyecto 1"
      image="https://via.placeholder.com/400x250.png?text=Proyecto+1"
      link="#"
    />
    <Project
      title="Proyecto 2"
      description="Descripción del proyecto 2"
      image="https://via.placeholder.com/400x250.png?text=Proyecto+2"
      link="#"
    />
    <Project
      title="Proyecto 3"
      description="Descripción del proyecto 3"
      image="https://via.placeholder.com/400x250.png?text=Proyecto+3"
      link="#"
    />
  </div>,
  document.getElementById('projects-container')
);
