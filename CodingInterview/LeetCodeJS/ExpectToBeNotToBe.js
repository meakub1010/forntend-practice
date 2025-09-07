const expect = function(value){
    return {
        toBe: (val) => {
            if(value !== val){
                throw new Error("Not Equal");
            }
            return true;
        },
        notToBe: (val) => {
            if(value === val){
                throw new Error("Equal");
            }
            return true;
        }
    }
}

// TEST CASES
console.log(expect(5).toBe(5));
console.log(expect(5).notToBe(6));

// expect(5).toBe(6); // throws error
// expect(5).notToBe(5); // throws error