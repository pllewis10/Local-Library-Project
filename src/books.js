function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  let result = []
  const findNonReturnedBooks = (books) => {
    return books.filter((book) => book.borrows.some((borrowed) => {
      return !borrowed.returned
    }))
  }
  const findReturnedBooks = (books) => {
    return books.filter((book) => book.borrows.every((borrowed) => {
      return borrowed.returned
    }))
  }
  result.push(findNonReturnedBooks(books))
  result.push(findReturnedBooks(books))
  return result
}

function getBorrowersForBook(book, accounts) {
  let result = []
  let borrowArray = book.borrows 
  borrowArray.forEach(borrow => {
    let account = accounts.find(acc => acc.id === borrow.id)
    let obj = account
    obj['returned'] =  borrow.returned
    result.push(obj)
  })
  return result.slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
