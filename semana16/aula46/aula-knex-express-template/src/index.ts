import knex from "knex";
import express, { Express, request, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

/**************************************************************/

dotenv.config();

/**************************************************************/

const connection = knex({   
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

/**************************************************************/

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

/**************************************************************/

// app.get('/all', testEndpoint)

// async function testEndpoint(req:Request, res:Response): Promise<void>{
//   try {
//     const result = await connection.raw(`
//       SELECT * FROM Actor
//     `)

//     res.status(200).send(result[0])
//   } catch (error) {
//     res.status(400).send(error.message)
//   }
// }

// const getActorByName = async (nome: string): Promise<any> => {
//   const result = await connection.raw(`
//     SELECT * FROM Actor WHERE nome LIKE '%${nome}%'
//   `)
//   return result [0][0]
// }

// app.get("/:nome", async(req: Request, res: Response) => {
//   try {
//     const nome = req.params.nome
//     const myActor = await getActorByName(nome)
//     res.status(200).send({Actor: myActor})
//   } catch (error) {
//     res.status(400).send(error.message)
//   }
// })

// const countActorsByGender = async (gender: string): Promise<any> => {
//   const result = await connection.raw(`
//     SELECT COUNT(*) AS count FROM Actor WHERE gender = '${gender}'
//   `)
//   return result[0][0]
// }

// countActorsByGender("male")

// app.get("/gender", async(req: Request, res: Response) => {
//   try {
//     const gender = req.query.gender as string
//     const countGender = await countActorsByGender(gender)
//     res.status(200).send({Actor: countGender})
//   } catch (error) {
//     res.status(400).send(error.message)
//   }
// })

// const updateSalary = async ( salary: number, id: string): Promise<any> => {
//   try {
//     await connection('Actor')
//     .update({salary: salary})
//     .where("id", id)
//     console.log(`Salário atualizado com sucesso!`)
//   } catch (error) {
//     throw new Error(error.sqlMessage)
//   }
// }

// updateSalary(100000, "001")

// app.post("/", async(req: Request, res: Response) => {
//   try {
//     const id = req.body.id
//     const salary = req.body.salary
//     const newSalary = Number(salary)

//     await updateSalary(newSalary, id)
//     res.status(200).send("O salário foi atualizado com sucesso!")

//   } catch (error) {
//     res.status(400).send(error.message)
//   }
// })

// const deleteActor = async (id: string): Promise<any> => {
//   try {
//     await connection("Actor")
//     .delete()
//     .where("id", id)
//     console.log("Ator deletado com sucesso!")
//   } catch (error) {
//     throw new Error(error.sqlMessage)
//   }
// }

// deleteActor("Tony Ramos")

// app.delete("/:id", async (req: Request, res: Response) => {
//   try {
//     const id = req.params.id
//     await deleteActor(id)

//     res.status(200).send("O ator foi deletado!")

//   } catch (error) {
//     res.status(400).send(error.message)
//   }
// }) 

// const averageSalaryByGender = async (gender: string): Promise<any> => {
//   try {
//     const result = await connection("Actor")
//     .avg("salary as average")
//     .where({gender})

//     console.log(result[0])
//     return result[0]

//   } catch (error) {
//     throw new Error(error.sqlMessage)
//   }
// }

// averageSalaryByGender("female")

// app.get("/average/salary/:gender", async (req: Request, res: Response) => {
//   try {
//     const gender = req.params.gender
//     const averageSalary = averageSalaryByGender(gender)

//     res.status(200).send({Gender: gender, Average_Salary: averageSalary})

//   } catch (error) {
//     res.status(400).send(error.message)
//   }
// })

// const getActorById = async (id: string): Promise<any> => {
//     const result = await connection.raw(`
//       SELECT * FROM Actor WHERE id = '${id}'
//     `)
//     return result [0][0]
//   }

// app.get("/actor/:id", async (req: Request, res: Response) => {
//   try {
//     const id = req.params.id
//     const actor = await getActorById(id)

//     res.status(200).send(actor)

//   } catch (error) {
//     res.status(400).send(error.message,);
//   }
// })

// const createMovies = async (
//   id: number,
//   nome: string,
//   sinopse: string,
//   data_lançamento: Date | string,
//   avaliação: number,
//   playing_limit_date: Date | string
// ): Promise<any> => {
//   try {
//     await connection
//     .insert({
//       id: id,
//       nome: nome,
//       sinopse: sinopse,
//       data_lançamento: data_lançamento,
//       avaliação: avaliação,
//       playing_limit_date: playing_limit_date
//     })
//     .into('Filmes')

//     console.log("Filme adicionado com sucesso!")
//   } catch (error) {
//     throw new Error(error.sqlMessage || error.message)
//   }
// }

// app.post("/adicionar", async (req: Request, res: Response) => {
//   try {
//     await createMovies(
//       req.body.id,
//       req.body.nome,
//       req.body.sinopse,
//       req.body.data_lançamento,
//       req.body.avaliação,
//       req.body.playing_limit_date
//     )

//     res.status(200).send("Filme criado com sucesso!")
//   } catch (error) {
//     res.send(error.sqlMessage || error.message)
//   }
// })

// const getAllMovies = async (): Promise<void> => {
//   const result = await connection.raw(`
//     SELECT* FROM Filmes LIMIT 15
//   `)
//   return result[0]
// }

// app.get("/movie/all", async (req: Request, res: Response) => {
//   try {
//     const allMovies = await getAllMovies()
//     res.status(200).send({Filmes: allMovies})
//   } catch (error) {
//     res.send(error.sqlMessage || error.message)
//   }
// })

// const getMovieByQuery = async (query: string): Promise<any> => {
//   const result = await connection.raw(`
//     SELECT * FROM Filmes WHERE nome Like '%${query}%' AND ORDER BY data_lançamento
//   `)
//   return result [0][0]
// }

// app.get("/movie/search", async (req: Request, res: Response) => {
//   try {
//     const movies = getMovieByQuery(req.query.query as string)
//     res.status(200).send({movies: movies})
//   } catch (error) {
//     res.send(error.sqlMessage || error.message)
//   }
// })