const artistsByGenre = {
    jazz: ["Miles Davis", "John Coltrane"],
    rock: {
        classic: ["Bob Seger", "The Eagles"],
        hair: ["Def Leppard", "Whitesnake", "Poison"],
        alt: {
            classic: ["Pearl Jam", "The Killers"],
            current: ["Joywave", "Sir Sly"]
        }
    },
    unclassified: {
        new: ["Caamp", "Neil Young"],
        classic: ["Seal", "Morcheeba", "Chris Stapleton"]
    }
}


const extractArtists = (obj, arr = []) => {
    Object.keys(obj).forEach(key => {
        //console.log(key);
        if(Array.isArray(obj[key])){
            return arr.push(...obj[key]);
        }
        extractArtists(obj[key], arr);
    });
    return arr;
} 

console.log(extractArtists(artistsByGenre));