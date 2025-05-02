# Odin-Knights-Travails

A simple Javascript project to determine the shortest path a Knight Peice in Chess must take in a 8x8 board to travel from a given starting co-ordinate to an ending co-ordinate.

The driver code shows this using the 3C and 4C squares in the chess board as the starting and ending co-ordinates respectively.

The code consists of a `class Block` to define the chess board, a function `isInside(x,y)` to determine if the Knight is moving out of bounds during traversal and the main function `knightMoves()` that returns a `Block()` object of the final destination of the Knight.

## The Block() Class

The Block class has the following items:

- x: The x co-ordinate of the final square
- y: The y co-ordinate of the final square
- distance: The number of blocks the knight has travelled to get here.
- prev: The previous block the knihgt has travelled to to get ot this block. Since this is also a `Block()` object, it can be iteratively accessed to trace back the path the Knight has taken to get to the final destination.

The index.js file shows the use of the `Block.prev` attribute to trace the path of the Knight for reference.

Script made using Vanilla Javascript.
