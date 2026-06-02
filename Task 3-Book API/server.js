const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear"
  },
  {
    id: 2,
    title: "The Alchemist",
    author: "Paulo Coelho"
  },
  {
    id: 3,
    title: "Deep Work",
    author: "Cal Newport"
  },
  {
    id: 4,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki"
  },
  {
    id: 5,
    title: "Think and Grow Rich",
    author: "Napoleon Hill"
  }
];

// Home Route
app.get("/", (req, res) => {
    res.send("Book API is running...");
});

// GET All Books
app.get("/books", (req, res) => {
    res.json(books);
});

// GET Book By ID
app.get("/books/:id", (req, res) => {
    const book = books.find(
        book => book.id == req.params.id
    );

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    res.json(book);
});

// Search Book
app.get("/search", (req, res) => {
    const title = req.query.title;

    const result = books.filter(book =>
        book.title.toLowerCase().includes(
            title.toLowerCase()
        )
    );

    res.json(result);
});

// ADD Book
app.post("/books", (req, res) => {

    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    };

    books.push(newBook);

    res.status(201).json(newBook);
});

// UPDATE Book
app.put("/books/:id", (req, res) => {

    const book = books.find(
        b => b.id == req.params.id
    );

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    book.title = req.body.title;
    book.author = req.body.author;

    res.json(book);
});

// DELETE Book
app.delete("/books/:id", (req, res) => {

    books = books.filter(
        book => book.id != req.params.id
    );

    res.json({
        message: "Book deleted successfully"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});