import express, { type Request, type Response } from 'express';
import cors from 'cors'; // 1. Importar o cors
import fs from 'node:fs/promises';
import path from 'node:path';

const app = express();
const PORT = 3001;

// Configurar o CORS
app.use(cors({
  origin: 'http://localhost:5173', // Permite apenas o seu Front-end do Vite
  methods: ['GET', 'POST'],        // Define quais métodos são aceites
  allowedHeaders: ['Content-Type'] // Define quais cabeçalhos são aceites
}));

app.use(express.json());

app.get('/api/curriculo', async (req: Request, res: Response) => {
  try {
    // 1. Localiza o arquivo
    const caminhoDoArquivo = path.resolve('database.json');
    
    // 2. Lê o conteúdo do arquivo
    const dadosBrutos = await fs.readFile(caminhoDoArquivo, 'utf-8');
    
    // 3. Converte o texto para um objeto JavaScript (JSON)
    const dados = JSON.parse(dadosBrutos);

    // 4. Envia para o cliente
    return res.json(dados);
  } catch (error) {
    console.error("Erro ao ler o banco de dados:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  console.log(`📄 Dados disponíveis em http://localhost:3001/api/curriculo`);
});