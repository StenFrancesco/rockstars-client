export const selectBooks = (state) => state.books;

export const selectBookDetails = (bookId) => (state) => {
  return state.books.find((book) => book.id === bookId);
};
