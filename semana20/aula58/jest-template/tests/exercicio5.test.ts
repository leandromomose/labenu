import { User } from "../src/exercicio3";
import { NATIONALITY, Casino, LOCATION, verifyAge } from "../src/exercicio3";

describe("Some more complex tests", () => {

    test("1 brazilian allowed", () => {
        const brazilian: User = {
            name: "Leandro",
            age: 34,
            nationality: NATIONALITY.BRAZILIAN,
        }
        const casino: Casino = {
            name: "Crown Casino",
            location: LOCATION.BRAZIL,
        }
        const result = verifyAge(casino, [brazilian]);
        expect(result.brazilians.allowed.length).toBeGreaterThan(0);
        expect(result.brazilians.allowed.length).toBeLessThan(2);
    })

    test("1 american allowed", () => {
        const american: User = {
            name: "John",
            age: 50,
            nationality: NATIONALITY.AMERICAN,
        }
        const casino: Casino = {
            name: "Crown Casino",
            location: LOCATION.BRAZIL,
        }
        const result = verifyAge(casino, [american])
        expect(result.americans.unallowed.length).toBe(0)
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
    
        expect(result.brazilians.unallowed).toContain("Leandro")
        expect(result.americans.unallowed).toContain("John")
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
          
        expect(result.brazilians.unallowed.length).toBeGreaterThan(1)
        expect(result.americans.unallowed.length).toBeLessThan(1)
        expect(result.americans.allowed.length).toBe(2)
    })
})