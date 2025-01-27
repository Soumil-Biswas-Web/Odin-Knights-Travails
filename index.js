// Constructor for cell
class Block {
    constructor(x, y, distance, prev) {
        this.prev = prev;
        this.x = x;
        this.y = y;
        this.distance = distance;
    }
}

const isInside = (x,y) => {
    return !!(x >= 1 && x <= 7 && y >= 1 && y <= 7);
}

const knightMoves = (start = [0, 0] , end = [7,7]) => {

    let pathArray = [];

    // possible moves for a knight piece in each direction
    let movesX = [ -2, -1, 1, 2, -2, -1, 1, 2 ];
    let movesY = [ -1, -2, -2, -1, 1, 2, 2, 1 ];

    // Array for storing array of blocks travelled
    let queue = [];

    queue.push(new Block(start[0], start[1], 0));   // Add starting block to array

    let t, x, y;
    // Create the chess board to keep track of blocks visited. All blocks should be tagged as 'false'. When the knight visits a block, it's visited status is changed to 'true'
    let visit = Array.from({ length: 8}, () => new Array(8).fill(false));

    // Mark starting block as visited
    visit[start[0]][start[1]] = true;

    while (queue.length!= 0) {
        t = queue.shift();

        // Check if the current cell is equal to the target cell. If yes, return it's distance
        if (t.x == end[0] && t.y == end[1]) {
            pathArray.push(t);
            return pathArray;
        }

        // Loop through all the blocks the knight canreach from the current block
        for (let i in movesX) {
            x = t.x + movesX[i];
            y = t.y + movesY[i];

            // If the reached block is not yet visited and is inside the board, push this into the array;
            if(isInside(x, y) && !visit[x][y]) {
                visit[x][y] = true;
                queue.push(new Block(x , y, t.distance + 1, t));
            }
        }
    }
    return "Error";
}

let finalBlock = knightMoves([3,3],[4,3])

console.log(finalBlock);

console.log(`You made it in ${finalBlock[0].distance} moves!  Here's your path: `)

let before = finalBlock[0].prev;

let pathArray = [[finalBlock[0].x, finalBlock[0].y]];

while (before != undefined) {
    pathArray.unshift([before.x, before.y]);
    before = before.prev;
}
for (let i in pathArray) console.log("[" + pathArray[i][0] + "," + pathArray[i][1] +  "]");