export default function cliente(req, res) {
  
  if(req.method === "GET") {
    handleGet(req, res)
  } else {
    res.status(405).send()
  }
}

function handleGet(req, res) {
  res.status(200).json({ 
    id: 4,
    name: 'Thomas Shelby',
    idade: 45
  })
}