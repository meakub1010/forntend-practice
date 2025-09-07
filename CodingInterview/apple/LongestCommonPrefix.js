const longestCommonPrefix = (strs) => {
    if(!strs || strs.length === 0) return "";

    // loop for the length of the first string
    for(let i = 0; i < strs[0].length; i++){
        let c = strs[0][i];
        // compare the character with the same position in other strings
        for(let j = 1; j < strs.length; j++){
            // if i reaches to the end of any string or characters don't match
            // that means we found the longest common prefix

            if(i === strs[j].length || strs[j][i] !== c){
                return strs[0].substring(0, i);
            }
        }
    }

    // if we reach here, that means the first string is the common prefix
    return strs[0];


}

// time complexity O(n*m) where n is number of strings and m is the length of the first string
// space complexity O(1)

console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])); // ""
console.log(longestCommonPrefix(["ab", "a"])); // "a"
console.log(longestCommonPrefix(["cir","car"])); // "c"




// USING BINARY SEARCH
const longestCommonPrefixBinarySearch = (strs) => {
    if(!strs || strs.length === 0) return "";
    
    // find the min length basd on that we will do binary search
    let minLen = Infinity;
    for(const str of strs){
        minLen = Math.min(minLen, str.length);
    }

    let low = 1, high = minLen;
    while(low <= high){
        let mid = Math.floor((low+high)/2);
        if(isCommonPrefix(strs, mid)){
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return strs[0].substring(0, Math.floor((low+high)/2));    
}

const isCommonPrefix = function (strs, len) {
    return strs.every(str => str.startsWith(strs[0].substring(0, len)));
}

// Time: O(S * log m) where S is the sum of all characters in all strings and m is the length of the shortest string

console.log(longestCommonPrefixBinarySearch(["flower","flow","flight"])); // "fl"
console.log(longestCommonPrefixBinarySearch(["dog","racecar","car"])); // ""
console.log(longestCommonPrefixBinarySearch(["ab", "a"])); // "a"
console.log(longestCommonPrefixBinarySearch(["cir","car"])); // "c"



// USING TRIE
// if trie node has only one child and is not end of a word then we can continue
// otherwise we stop the traversal, since more than one child means there is a divergence in the prefix

class TrieNode {
    constructor(){
        this.children = {};
        this.isEndOfWord = false;
        this.childCount = 0; // to keep track of number of children
    }
}

// implement Trie
class Trie {
    constructor(){
        this.root = new TrieNode();
    }

    // insert word into the trie
    insert(word){
        let node = this.root;

        for(const ch of word){
            if(!node.children[ch]){
                node.children[ch] = new TrieNode();
                node.childCount++;
            }
            node = node.children[ch];
        }
        node.isEndOfWord = true;
    }

    // find the longest common prefix
    longestCommonPrefix(word){
        let prefix = "";
        let node = this.root;
        for(const ch of word){
            if(node.children[ch] && node.childCount === 1 && !node.isEndOfWord){
                prefix += ch;
                node = node.children[ch];
            }
            else {
                break;
            }
        }

        return prefix;        
    }

}

let trie = new Trie();
let words = ["flower","flow","flight"];
for(const word of words){
    trie.insert(word);
}
console.log('from trie', trie.longestCommonPrefix(words[0])); // "fl"

// Space: O(N) where N is the number of characters in all strings

// Time: O(N) preprocessing trie + O(m) finding prefix where m is the length of the longest common prefix

// Overall O(N) where N is the number of characters in all strings

