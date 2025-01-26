# Unhandled Exception in Node.js Event Loop

This repository demonstrates a common yet easily overlooked error in Node.js applications: unhandled exceptions within the event loop.  Unhandled exceptions can lead to application crashes and instability, especially in long-running processes.

## The Problem

The `bug.js` file contains a simple HTTP server. However, it lacks proper error handling, making it vulnerable to unhandled exceptions that can halt the server.

## The Solution

The `bugSolution.js` file presents a solution by implementing a `try...catch` block to handle potential exceptions and prevent the application from crashing.  Robust error handling is crucial for maintaining the stability and reliability of any Node.js application.

## How to Run

1. Clone the repository.
2. Navigate to the project directory.
3. Run `node bug.js` to see the unhandled exception.
4. Run `node bugSolution.js` to see the corrected version.