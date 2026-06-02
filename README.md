# Book Management REST API

## Project Overview

This project is a RESTful API developed using Node.js and Express.js as part of a Web Development Internship Task.

The API allows users to perform CRUD (Create, Read, Update, Delete) operations on a collection of books and search books by title.

---

## Features

- Retrieve all books
- Retrieve a book by ID
- Add a new book
- Update existing book details
- Delete a book
- Search books by title
- JSON-based responses
- RESTful API architecture
- API testing using Postman

---

## Technologies Used

- Node.js
- Express.js
- JavaScript
- REST API
- Postman

---

## API Endpoints

### Get All Books

```http
GET /books
```

### Get Book By ID

```http
GET /books/:id
```

Example:

```http
GET /books/1
```

### Add New Book

```http
POST /books
```

Request Body:

```json
{
  "title": "Clean Code",
  "author": "Robert Martin"
}
```

### Update Book

```http
PUT /books/:id
```

Request Body:

```json
{
  "title": "Atomic Habits Updated",
  "author": "James Clear"
}
```

### Delete Book

```http
DELETE /books/:id
```

### Search Book By Title

```http
GET /search?title=atomic
```

---

## Project Structure

```text
elevatelabs-task3/
│
├── README.md
│
└── Task 3-Book API/
    │
    ├── server.js
    ├── package.json
    ├── package-lock.json
    │
    └── screenshots/
        ├── desktop view 1.png
        ├── desktop view 2.png
        ├── desktop view 3.png
        ├── desktop view 4.png
        ├── postman-get.png
        ├── postman-post.png
        ├── postman-put.png
        └── postman-delete.png
```

---

## Testing

The API was successfully tested using Postman.

### Tested Requests

- GET /books
- GET /books/:id
- POST /books
- PUT /books/:id
- DELETE /books/:id
- GET /search?title=keyword

All endpoints returned expected JSON responses.

---

## Learning Outcomes

Through this project, I gained hands-on experience with:

- Backend development using Node.js
- Express.js framework
- REST API development
- CRUD operations
- Route handling
- Query parameters
- JSON data management
- API testing with Postman
- Server-side JavaScript

---

## Author

S.Ganga Hema Mythri
