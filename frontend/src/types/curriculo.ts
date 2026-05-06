export interface CurriculoData {
  perfil: {
    nome: string;
    titulo: string;
    objetivo: string;
  };
  tecnologias: {
    backend: string[];
    frontend: string[];
  };
  certificacoes: Array<{
    nome: string;
    instituicao: string;
    conclusao: string;
  }>;
}