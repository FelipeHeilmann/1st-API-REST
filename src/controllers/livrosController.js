import livros from "../models/Livro.js";

class LivroController{

    static listarLivros = async (req, res)=>{
        livros.find()
        .populate('autor')
        .exec((err, livros) => {
          res.status(200).json(livros)
    })
    }

    static listarLivrosId = async (req, res)=>{
        const id = req.params.id;

       livros.findById(id)
        .populate('autor', 'nome')
        .exec((err, livros) => {
        if(err) {
            res.status(400).send({message: `${err.message} - Id do livro não localizado.`})
        } else {
            res.status(200).send(livros);
        }
        })
    }

    static listarLivroEditora = (req,res)=>{
        const editora = req.query.editora
        livros.find({'editora': editora}, {}, (err, livros)=>{
            res.status(200).send(livros)
        })
    }

    static cadastrarLivro = (req, res)=>{
        let livro = new livros(req.body)
        livro.save((err)=>{
            if(err){
                res.status(500).send({message: `${err.message} falha ao cadastrar livro`})
            }
            else{
                res.status(201).send(livro.toJSON())
            }
        })
    }

    static atualizarLivro = (req,res)=>{
        const id = req.params.id

        livros.findByIdAndUpdate(id, {$set: req.body}, (err)=>{
            if(!err){
                res.status(200).send({message: `livro atualizado com sucesso`})
            }
            else{
                res.status(500).send({message: err.message})
            }
        })
    }

    static deletarLivro = (req,res)=>{
        const id = req.params.id

        livros.findByIdAndDelete(id, (err)=>{
            if(!err){
                res.status(200).send({message: `livro deletado com sucesso`})
            }
            else{
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default LivroController