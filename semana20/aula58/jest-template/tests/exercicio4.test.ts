import { NATIONALITY, User } from "../src/exercicio3";
import { Casino, LOCATION, verifyAge } from "../src/exercicio3";

describe('Test verify Age', () => {

    test("1 brazilian allowed", () => {
        const brazilian: User = {
            name: "Leandro",
            age: 19,
            nationality: NATIONALITY.BRAZILIAN,
        };

        const casino: Casino = {
            name: "Crown Casino",
            location: LOCATION.BRAZIL,
        }

        const result = verifyAge(casino, [brazilian])
        expect(result.brazilians.allowed).toEqual(["Leandro"])
    })

    test("1 american allowed", () => {
        const american: User = {
            name: "John",
            age: 21,
            nationality: NATIONALITY.AMERICAN,
        }

        const casino: Casino = {
            name: "Crown Casino",
            location: LOCATION.BRAZIL,
        }

        const result = verifyAge(casino, [american])
        expect(result.americans.allowed).toEqual(["John"])
    })

    test("No one allowed", () => {
        const firstBrazilian: User = {
            name: "Leandro",
            age: 19,
            nationality: NATIONALITY.BRAZILIAN,
        }

        const secondBrazilian: User = {
            name: "Leonardo",
            age: 19,
            nationality: NATIONALITY.BRAZILIAN,
        }

        const firstAmerican: User = {
            name: "John",
            age: 19,
            nationality: NATIONALITY.AMERICAN,
        }

        const secondAmerican: User = {
            name: "Paul",
            age: 19,
            nationality: NATIONALITY.AMERICAN,
        }

        const casino: Casino = {
            name: "Las Vegas Casino",
            location: LOCATION.EUA,
        }

        const result = verifyAge(casino, [
            firstBrazilian,
            secondBrazilian,
            firstAmerican,
            secondAmerican,
        ])
        expect(result.brazilians.unallowed).toEqual(["Leandro", "Leonardo"]);
        expect(result.americans.unallowed).toEqual(["John", "Paul"])
    })

    test("2 american allowed and 2 brazilians unallowed", () => {
        const firstBrazilian: User = {
            name: "Leandro",
            age: 19,
            nationality: NATIONALITY.BRAZILIAN,
        }

        const secondBrazilian: User = {
            name: "Leonardo",
            age: 19,
            nationality: NATIONALITY.BRAZILIAN,
        }

        const firstAmerican: User = {
            name: "John",
            age: 21,
            nationality: NATIONALITY.AMERICAN,
        }

        const secondAmerican: User = {
            name: "Paul",
            age: 21,
            nationality: NATIONALITY.AMERICAN,
        }

        const casino: Casino = {
            name: "Las Vegas Casino",
            location: LOCATION.EUA,
        }

        const result = verifyAge(casino, [
            firstBrazilian,
            secondBrazilian,
            firstAmerican,
            secondAmerican,
        ])
        expect(result.brazilians.unallowed).toEqual(["Leandro", "Leonardo"]);
        expect(result.americans.allowed).toEqual(["John", "Paul"]);
      })
})


