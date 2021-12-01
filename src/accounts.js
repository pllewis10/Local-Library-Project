function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort(function(a, b) {
    const lastNameA = a.name.last
    const lastNameB = b.name.last
    return lastNameA.toLowerCase() > lastNameB.toLowerCase() ? 1 : -1
  })
  return accounts
}

function getTotalNumberOfBorrows(account, books) {
  const userId = account.id
  let totalBooks = 0
  for (let book in books) {
    const borrow = books[book].borrows
    totalBooks += borrow.reduce(((total, current) => total + (current.id === userId ? 1 : 0)), 0)
  }
  return totalBooks
}

function getBooksPossessedByAccount(account, books, authors) {
  const accountId = account.id
  let result = []
  result = books.filter((book) => {
    return book.borrows.some((borrow) => !borrow.returned && borrow.id === accountId)
  })

  for (let book in result) {
    let obj = result[book]
    obj["author"] = findAuthor(authors, obj.authorId)
  }
  return result
}

function findAuthor(authors, id) {
  let idFilter = authors.filter((person) => person.id === id)
  return idFilter[0]
}



module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
