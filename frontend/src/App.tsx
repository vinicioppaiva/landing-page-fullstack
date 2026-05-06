import { useCurriculo } from './hooks/useCurriculo';
import './App.css';

function App() {
  const { dados, loading } = useCurriculo();
  console.log("Dados da API:", dados);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
        <p>Renderizando Projeto Técnico...</p>
      </div>
    );
  }

  return (
    <div className="app-container">
      {/* HEADER / HERO SECTION */}
      <header className="hero-section">
        <div className="blueprint-overlay"></div>
        <div className="content">
          <span className="tag-dev">{"<Engineer />"}</span>
          <h1 className="name">{dados?.perfil.nome}</h1>
          <h2 className="title-tech">{dados?.perfil.titulo}</h2>
          <p className="bio">{dados?.perfil.objetivo}</p>
          
          <div className="tech-pills">
            {dados?.tecnologias.backend.map(tech => (
              <span key={tech} className="pill">{tech}</span>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;