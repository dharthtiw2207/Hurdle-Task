# Course API

## Overview
This API allows for basic CRUD operations on a list of courses. It uses Express.js for handling HTTP requests and includes the following functionality:
- Create a new course
- Retrieve all courses or a specific course by ID
- Update a course by ID
- Delete a course by ID

## Endpoints

1. **GET /courses**
   - Retrieves all available courses.

2. **GET /courses/:id**
   - Retrieves a course by its ID.

3. **POST /courses**
   - Adds a new course. Required fields: `title`, `description`, `duration`.

4. **PUT /courses/:id**
   - Updates an existing course by ID.

5. **DELETE /courses/:id**
   - Deletes a course by ID.

## How to Run
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
