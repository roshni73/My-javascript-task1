const books = [
    { id: 1, title: 'Harry Potter', author: 'J. K. Rowling' },
    { id: 2, title: 'Lord of the Rings', author: 'J. R. R. Tolkien' },
    { id: 3, title: 'The Hobbit', author: 'J. R. R. Tolkien' },
    { id: 4, title: 'A Game of Thrones', author: 'George R. R. Martin' },
];

function sortBookObjectByTitle(book)
{
    return book.sort((a, b) => a.title.localeCompare(b.title));
}

let data = sortBookObjectByTitle(books);
data.forEach(item => {
    console.log(item);
});