
export default function handler(req, res) {
  const codigo = req.query.codigo
  res.status(200).json({
    id: codigo,
    nome: `Maria Luiza ${codigo}`,
    email: `luizamaria ${codigo}@gmail.com`
  })
}