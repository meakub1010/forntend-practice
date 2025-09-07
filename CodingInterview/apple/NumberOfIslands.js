const numberOfIslands = (grid) => {
    if(grid.length === 0) return 0;
    const rows = grid.length;
    const cols = grid[0].length;

    let islandCount = 0;

    for(let r = 0; r < rows; r++){
        for(let c = 0; c < cols; c++){
            if(grid[r][c] === '1'){
                islandCount++;
                dfs(grid, r, c);
            }
        }
    } 
    // for worst case recursion depth space complexity O(m*n)
    // time complexity O(m*n)

    return islandCount;
}


function dfs(grid, r, c){
    if(r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] === '0'){
        return;
    }
    grid[r][c] = '0';

    dfs(grid, r+1, c);
    dfs(grid, r-1, c);
    dfs(grid, r, c+1);
    dfs(grid, r, c-1);
}

console.log(numberOfIslands([
  ["1","1","0","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","1","0"]
])); // 3

