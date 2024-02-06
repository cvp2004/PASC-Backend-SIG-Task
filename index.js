const express = require("express");

const app = express();

//to parse the request body
app.use(express.json());


//Books Api Routes: GET, POST, PUT, DELETE
let books = [
    {
        id: 1,
        name: "Harry Potter",
        author: "J.K. Rowling"
    },
    {
        id: 2,
        name: "The Alchemist",
    },
    {
        id: 3,
        name: "The Da Vinci Code",
    }

];


app.get("/", (req, res) => {
  res.status(200).json(books);
});
app.get("/ping", (req, res) => {
  res.status(200).json({ message: "Pong" });
});

app.post("/addBook", (req, res) => {
  books = [...books, req.body];
  res.status(200).json({ message: "Book Added Successfully" });
});

app.put("/updateBook/:id", (req, res) => {
  Book = books.find((book, index) => {
    return book.id == req.params.id;
  });

  index = books.indexOf(Book);

  books[index].id = req.body.id;
  books[index].name = req.body.name;
  books[index].author = req.body.author;

  res.status(200).json({ message: "Book Updated Successfully" });
});

app.delete("/deleteBook/:id", (req, res) => {
  var newData = books.filter(function (book) {
    return book.id != req.params.id;
  });

  books = newData;

  res.status(200).json({ message: "Book Deleted Successfully" });
});


// Add other requests GET, POST, PUT, DELETE



app.listen(8000, () => {
    console.log(`App is live on: http://localhost:8000`);
});