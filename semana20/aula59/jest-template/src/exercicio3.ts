import { Character, validateCharacter } from "./exercicio1"

export const performAttack = (attacker: Character, defender: Character) => {

    if(!validateCharacter(attacker) || !validateCharacter(defender)){
        throw new Error("Invalid Character")
    }

    if(attacker.strength > defender.defense){
        defender.life -= attacker.strength - defender.defense
    }   
}

export const performAttackInversion = (
    attacker: Character,
    defender: Character,
    validator: (input: Character) => boolean
) => {

    if(!validator(attacker) || !validator(defender)){
        throw new Error("Invalid Character")
    }

    if(attacker.strength > defender.defense){
        defender.life -= attacker.strength - defender.defense
    } 
}

// c- Na primeira função, ela precisava utilizar a função (validateCharacter) para fazer as validações. Quando fazemos a inversão, a função agora se torna testável pois antes não conseguiriamos fazer testes unitários nela, nós agora é que temos o controle do que será validado.