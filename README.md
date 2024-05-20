# Grid Neighbor Checker

Welcome to the Grid Neighbor Checker project!

## Objective

The goal of this project is to determine if the cells in a 2D grid are adjacent to each other. The adjacency is defined as being next to each other either horizontally or vertically.

## Task Description

1. **Grid Representation:**
   - Represent the grid as a 2D array.
   - Each element in the array should contain two integers.

2. **Adjacency Check:**
   - Write a function to check if two cells are adjacent.
   - The function should take the coordinates of two cells and return whether they are adjacent.

3. **Output:**
   - The output should be a clear and formatted display showing the adjacency status of each cell relative to the others in the grid.

## Example Scenario

Imagine you have a grid like this:

[
[9, 4],
[6, 3],
[5, 8]
]

- Your task is to determine if cells like `[9, 4]` and `[6, 3]` are adjacent.
- The function should analyze each pair of cells and output the adjacency results.

## Example Output

Here is an example of what the output might look like:

- X    9  |  4  |  6  |  3  |  5  |  8
- _
- 9    1     0     0     0     0     0
- _
- 4    0     1     0     0     0     0 
- _
- 6    0     0     1     0     0     0 
- _
- 3    0     0     0     1     0     0 
- _
- 5    0     0     0     0     1     0 
- _
- 8    0     0     0     0     0     1 


- In this output, `1` indicates that the cells are adjacent, and `0` indicates that they are not.

## How to Get Started

1. **Clone the Repository:**
   git clone https://github.com/umutsar/GridNeighborChecker.git
   cd GridNeighborChecker
   node main.js

