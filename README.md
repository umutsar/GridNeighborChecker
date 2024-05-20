# GridNeighborChecker
A simple grid neighbor checker algoritm. Firstly try to code yourself. 

# Grid Neighbor Checker

This project is designed to check whether the cells in a grid are adjacent to each other. The grid is represented as a 2D array, and the goal is to determine if a cell is directly next to another cell either horizontally or vertically.

## How to Use

1. **Clone the Repository:**
   git clone https://github.com/umutsar/GridNeighborChecker.git
   cd GridNeighborChecker
Run the Script:
Ensure you have Node.js installed. Open a terminal in the project directory and run:

node gridNeighborChecker.js
Understand the Output:
The script will output a grid showing the adjacency status of each cell relative to others. For example:

X    9  |  4  |  6  |  3  |  5  |  8 

9    1     0     0     0     0     0 
-
4    0     1     0     0     0     0 
-
6    0     0     1     0     0     0 
-
3    0     0     0     1     0     0 
-
5    0     0     0     0     1     0 
-
8    0     0     0     0     0     1 
Project Description
The project includes a function isNextTo(a, b, c, d) that checks if the cell at coordinates (a, b) is adjacent to the cell at coordinates (c, d). The adjacency is defined as being next to each other either horizontally or vertically, but not diagonally.

The ilkDizi array represents the grid:

let ilkDizi = [
    [9, 4],
    [6, 3],
    [5, 8]
];
The isNextTo function returns 1 if the cells are adjacent and 0 otherwise:

const isNextTo = (a, b, c, d) => {
    if (a == c) {
        return Math.abs(b - d) == 1 ? 1 : 0;
    } else if (b == d) {
        return Math.abs(a - c) == 1 ? 1 : 0;
    }
    return 0;
};
The script generates a formatted output showing the adjacency status for each cell relative to the others in the grid.

Example
To see the script in action, simply run it and observe the printed grid. The isNextTo function checks each cell's adjacency and the results are displayed in a clear and readable format.

Feel free to experiment with different grids by modifying the ilkDizi array and observe how the output changes!
