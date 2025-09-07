function myExpect(value) {
    return {
        toBe(expected) {
            if(value === expected){
               return "Test passed";
            }
            else {
                return `Test failed, expected ${expected} but got ${value}`;
            }
        },
        not: {
            toBe(expected){
                if(value !== expected){
                    return "Test passed";
                }
                else {
                    return `Test failed, expected ${value} not to be ${expected}`;
                }
                
            }
        }
    }
}

console.log(myExpect(3).toBe(3)); // Test passed
console.log(myExpect(3).toBe(5)); // Test failed, expected 5 but got 3
console.log(myExpect(3).not.toBe(5)); // Test passed