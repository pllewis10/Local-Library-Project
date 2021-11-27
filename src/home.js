function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let total = 0
  books.forEach((book) => {
    if (!book.borrows[0].returned) {
      total++
    }
  })
  return total
}

function getMostCommonGenres(books) {
  let total = {};
  books.forEach((book) => {
    if (total[book.genre]) {
      total[book.genre]++;
    } else {
      total[book.genre] = 1;
    }
  });
  return Object.entries(total).map(([name, count]) => {
    return {
    name,
    count
    };
  })
  .sort((a, b) => b.count - a.count)
  .slice(0, 5);
}

function getMostPopularBooks(books) {
  return books.map((book) => {
    return { name: book.title, count: book.borrows.length }
  })
  .sort((a, b) => (a.count < b.count ? 1 : -1))
  .slice(0, 5)
}

function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((author) => {
  let currentAuthor = {
    name: `${author.name.first} ${author.name.last}`,
    count: 0
  };
  books.forEach((book) => {
    if (book.authorId === author.id) {
      currentAuthor.count += book.borrows.length;
    }
  });
  result.push(currentAuthor);
  });
  return result.sort((a, b) => b.count - a.count).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
