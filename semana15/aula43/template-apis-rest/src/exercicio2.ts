//importando express com Request e Response e cors
import express, {Request, Response} from 'express';
import cors from 'cors';

//extra: importando configuração de rede do node
import { AddressInfo } from "net";
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

type user = {
    id: number,
    name: string,
    email: string,
    type: UserType,
    age: number
}

enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

let users: user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: UserType.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: UserType.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: UserType.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: UserType.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: UserType.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: UserType.ADMIN,
        age: 60
    }
]

app.get("/users", (req: Request, res: Response) => {
        let errorCode: number = 400

    try {
        const type: string = (req.query.type as string).toUpperCase()

        if (type !== "ADMIN" && type !== "NORMAL"){
            errorCode = 422
            throw new Error("Type inválido, tente outro!")
        }

        const findUserByType = users.filter((user => user.type === type))

        if (!findUserByType) {
            errorCode = 404
            throw new Error("Type não encontrado.")
        }
        
        const result = findUserByType
        res.status(200).send(result)

    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });

  // a- Através de Query Parameters, pois através deles conseguimos passar a chave e o valor que quisermos direto na URL para fazer a requisição

  // b- Podemos utilizar o enum para restringir os tipos válidos