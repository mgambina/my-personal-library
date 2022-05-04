
async function getAll(req, res) {
  // const { context } = req;
  // const books = await bookService.getAll(context);
  const books = [
    { name: 'Papeles en el viento', id: 1 }, 
  ];
  res.json(books);
}

module.exports = {
  getAll
};
