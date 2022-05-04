# my-personal-library

Creating a project to maintain my collection of books organized and up to date.
To get started I will aim to save as a record on the database the following information:

1. Author
2. Title
3. Category
4. Type
5. Status
6. Editorial
7. Lended to
8. Description "want to read"


## Architecture
- Table: book
- Table: author
- Table: editorial
- Table: category


- Metadata: description

?
- type
- status
- Lended to

[Link](https://docs.google.com/drawings/d/1ybq54FT78ehTOdaNTKfboluYVyNA8P2PUVOEWL2hjgo/edit) to model

## Ideas
- Populate DB using an existing spreadsheet
- Connect the project with Telegram so new books can be added through that app or through a form
  - form/telegram will give the opportunity to create a new editorial/author/category
- Books can be requested by any category
- Add more information: year read, goodreads rating, how much I liked it
- Save a list of books I want to read with a little description on why they caught my attention.
- Goodreads ratings

## To do
1. ~~crear una base de datos postgress (y tambien usar pgadmin)~~
2. ~~crear una tabla book con title y id (autogenerado)~~
3. GET book (todos los libros - paginado y un libro - despues veo con que criterio)
4. POST book
5. OAS (reemplazo de Raml) aka [Swagger](https://swagger.io/specification/#:~:text=The%20OpenAPI%20Specification%20(OAS)%20defines,or%20through%20network%20traffic%20inspection.)
