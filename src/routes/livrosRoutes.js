import express from "express"
import LivroController from "../controllers/livrosController.js"

const router = express.Router()

router
    .get('/livros', LivroController.listarLivros)
    .get('/livros/busca', LivroController.listarLivroEditora)
    .get('/livros/:id', LivroController.listarLivrosId)
    .post('/livros', LivroController.cadastrarLivro)
    .put('/livros/:id', LivroController.atualizarLivro)
    .delete('/livros/:id', LivroController.deletarLivro)

export default router