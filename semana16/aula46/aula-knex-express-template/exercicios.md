### Exercício 1

a)
A resposta é exatamente igual ao que é devolvido no MySQL, ou seja, ele devolve o resultado da query e algumas outras informações (metadados) que criam os dados, e tudo isso, dentro de um array

b)
const getActorByName = async (nome: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE nome LIKE '%${nome}%'
  `)
  return result [0][0]
}

c)
const countActorsByGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) AS count FROM Actor WHERE gender = '${gender}'
  `)
  return result[0][0]
}

###Exercício 2

a)
const updateSalary = async ( salary: number, id: string): Promise<any> => {
  try {
    await connection('Actor')
    .update({salary: salary})
    .where("id", id)
    console.log(`Salário atualizado com sucesso!`)
  } catch (error) {
    throw new Error(error.sqlMessage)
  }
}

updateSalary(500000000, "004")

b)
const deleteActor = async (id: string): Promise<any> => {
  try {
    await connection("Actor")
    .delete()
    .where("id", id)
    console.log("Ator deletado com sucesso!")
  } catch (error) {
    throw new Error(error.sqlMessage)
  }
}

c)
const averageSalaryByGender = async (gender: string): Promise<any> => {
  try {
    const result = await connection("Actor")
    .avg("salary as average")
    .where({gender})

    console.log(result[0])
    return result[0]

  } catch (error) {
    throw new Error(error.sqlMessage)
  }
}

### Exercício 3 

a)
app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const actor = await getActorById(id)

    res.status(200).send(actor)

  } catch (error) {
    res.status(400).send(error.message,);
  }
})

b)
app.get("/actor", async (req: Request, res: Response) => {
  try {
    const count = await countActorByGender(req.query.gender as string)
    res.status(200).send({quantity: count})

  } catch (error) {
    res.status(400).send(error.message,);
  }
})

### Exercício 4

a)
app.post("/", async(req: Request, res: Response) => {
  try {
    const id = req.body.id
    const salary = req.body.salary
    const newSalary = Number(salary)

    await updateSalary(newSalary, id)
    res.status(200).send("O salário foi atualizado com sucesso!")

  } catch (error) {
    res.status(400).send(error.message)
  }
})

b)
app.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    await deleteActor(id)

    res.status(200).send("O ator foi deletado!")

  } catch (error) {
    res.status(400).send(error.message)
  }
}) 

### Exercício 5

const createMovies = async (
  id: number,
  nome: string,
  sinopse: string,
  data_lançamento: Date | string,
  avaliação: number,
  playing_limit_date: Date | string
): Promise<any> => {
  try {
    await connection
    .insert({
      id: id,
      nome: nome,
      sinopse: sinopse,
      data_lançamento: data_lançamento,
      avaliação: avaliação,
      playing_limit_date: playing_limit_date
    })
    .into('Filmes')

    console.log("Filme adicionado com sucesso!")
  } catch (error) {
    throw new Error(error.sqlMessage || error.message)
  }
}

app.post("/adicionar", async (req: Request, res: Response) => {
  try {
    await createMovies(
      req.body.id,
      req.body.nome,
      req.body.sinopse,
      req.body.data_lançamento,
      req.body.avaliação,
      req.body.playing_limit_date
    )

    res.status(200).send("Filme criado com sucesso!")
  } catch (error) {
    res.send(error.sqlMessage || error.message)
  }
})

### Exercício 6

const getAllMovies = async (): Promise<void> => {
  const result = await connection.raw(`
    SELECT* FROM Filmes LIMIT 15
  `)
  return result[0]
}

app.get("/movie/all", async (req: Request, res: Response) => {
  try {
    const allMovies = await getAllMovies()
    res.status(200).send({Filmes: allMovies})
  } catch (error) {
    res.send(error.sqlMessage || error.message)
  }
})

### Exercício 7

const getMovieByQuery = async (query: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Filmes WHERE nome Like '%${query}%' AND ORDER BY data_lançamento
  `)
  return result [0][0]
}

app.get("/movie/search", async (req: Request, res: Response) => {
  try {
    const movies = getMovieByQuery(req.query.query as string)
    res.status(200).send({movies: movies})
  } catch (error) {
    res.send(error.sqlMessage || error.message)
  }
})