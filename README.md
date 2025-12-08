# 🚀 Data Structures and Algorithms in JavaScript

A comprehensive collection of DSA implementations and problem-solving practice in JavaScript.

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=flat&logo=javascript)
![Status](https://img.shields.io/badge/Status-Active-success)

---

## 📂 Folder Structure

```
data-structures-and-algorithms/
├── 00-practice-problems/     # Daily practice & mixed problems
├── 01-patterns/              # Pattern printing problems
├── 02-arrays/                # Array manipulation & algorithms
├── 03-strings/               # String problems
├── 04-linked-lists/          # Singly, Doubly, Circular lists
├── 05-stacks-queues/         # Stack & Queue implementations
├── 06-trees/                 # Binary Trees, BST, AVL, etc.
├── 07-graphs/                # Graph representations & algorithms
├── 08-heaps/                 # Min/Max Heap, Priority Queue
├── 09-hash-tables/           # Hash Maps, Sets
├── 10-tries/                 # Prefix trees
├── 11-sorting/               # Sorting algorithms
├── 12-searching/             # Search algorithms
├── 13-recursion-backtracking/ # Recursive solutions
├── 14-dynamic-programming/   # DP problems & patterns
├── 15-greedy/                # Greedy algorithms
├── 16-divide-conquer/        # Divide & Conquer approach
├── utils/                    # Helper functions
└── app.js                    # Main entry point
```

---

## 📚 Topics Covered

### Data Structures
- ✅ Arrays & Strings
- ✅ Linked Lists (Singly, Doubly, Circular)
- ✅ Stacks & Queues
- ✅ Trees (Binary, BST, AVL, Segment Trees)
- ✅ Graphs (Adjacency List/Matrix)
- ✅ Heaps (Min/Max Heap)
- ✅ Hash Tables
- ✅ Tries

### Algorithms
- 🔹 **Sorting**: Bubble, Selection, Insertion, Merge, Quick, Heap Sort
- 🔹 **Searching**: Linear, Binary, Ternary Search
- 🔹 **Recursion & Backtracking**: N-Queens, Sudoku, Permutations
- 🔹 **Dynamic Programming**: Knapsack, LCS, LIS, Matrix Chain
- 🔹 **Greedy**: Activity Selection, Huffman Coding
- 🔹 **Graph Algorithms**: DFS, BFS, Dijkstra's, Bellman-Ford, Kruskal's, Prim's
- 🔹 **Divide & Conquer**: Merge Sort, Quick Sort, Binary Search

---

## 🎯 How to Use

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd data-structures-and-algorithms
   ```

2. **Navigate to any topic folder**
   ```bash
   cd 02-arrays
   ```

3. **Run individual files**
   ```bash
   node filename.js
   ```

4. **Run main app**
   ```bash
   node app.js
   ```

---

## 📝 File Naming Convention

Use descriptive names for problem files:
- `01-two-sum.js`
- `02-reverse-linked-list.js`
- `03-binary-search.js`

Each file should include:
- Problem description (as comments)
- Time & Space complexity
- Solution implementation
- Test cases

---

## 🧪 Example Template

```javascript
/**
 * Problem: Two Sum
 * Given an array of integers, return indices of two numbers that add up to target.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function twoSum(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  
  return [];
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6));      // [1, 2]
```

---

## 🎓 Learning Resources

- [LeetCode](https://leetcode.com/)
- [HackerRank](https://www.hackerrank.com/)
- [Visualgo](https://visualgo.net/) - Algorithm Visualizations

---

## 📈 Progress Tracker

| Topic | Problems Solved | Status |
|-------|----------------|--------|
| Arrays | 0 | 🔄 |
| Strings | 0 | 🔄 |
| Linked Lists | 0 | 🔄 |
| Trees | 0 | 🔄 |
| Graphs | 0 | 🔄 |
| DP | 0 | 🔄 |

---

## 🤝 Contributing

This is a personal learning repository, but suggestions are welcome!

---

**Happy Coding! 💻**