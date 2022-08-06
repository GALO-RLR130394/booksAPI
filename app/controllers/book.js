const { successResponse, errorResponse } = require("../middlewares/responses");

const BookService = require('../helpers/bookService');
const bookService = BookService([]);

module.exports = {
  
  getAll:function(req, res, next){
    let books=bookService.get();
    return successResponse(books, res);
  },
  getById:function(req, res, next) {

    /***
     * @Params
     * book_uuid
    ***/

    const book_uuid= req.params.book_uuid;

    try {
      if (
        typeof book_uuid=== undefined 
      ) {
        throw new Error("Please check the data sent");
      }

      let book=bookService.getById(book_uuid);

      if(book!==undefined){
        return successResponse(book, res);
      }

      return errorResponse(
        "The book is not registered",
        res,
        400
      );

    } catch (err) {
      console.log(err);
      return errorResponse(err, res);
    }
  },
  create:function(req, res, next) {
    /***
     * @Params
     * title
     * author
     * publication_year
    ***/

    const {
      title,
      author,
      publication_year
    }=req.body;


    try {
      if (
        typeof title=== undefined ||
        typeof author === undefined ||
        typeof publication_year === undefined  
      ) {
        throw new Error("Please check the data sent");
      }
      let add=bookService.add(title,author,publication_year);

      if(add){
        const msg={message: "Created book"}
        return successResponse(msg, res);
      }

      return errorResponse(
        "The book is already registered",
        res,
        400
      );

    } catch (err) {
      console.log(err);
      return errorResponse(err, res);
    }
  },
  update:function(req, res, next) {

    /***
     * @Params
     * book_uuid
     * title
     * author
     * publication_year
    ***/

    const {
      title,
      author,
      publication_year
    }=req.body;

    const book_uuid= req.params.book_uuid;

    try {
      if (
        typeof title=== undefined ||
        typeof author === undefined ||
        typeof publication_year === undefined||
        typeof book_uuid=== undefined 
      ) {
        throw new Error("Please check the data sent");
      }

      let update=bookService.update(title,author,publication_year,book_uuid);

      if(update){
        const msg={message: "Updated book"}
        return successResponse(msg, res);
      }

      return errorResponse(
        "The book is not registered",
        res,
        400
      );

    } catch (err) {
      console.log(err);
      return errorResponse(err, res);
    }
  },
  remove:function(req, res, next) {

    /***
     * @Params
     * book_uuid
    ***/

    const book_uuid= req.params.book_uuid;

    try {
      if (
        typeof book_uuid=== undefined 
      ) {
        throw new Error("Please check the data sent");
      }

      let remove=bookService.remove(book_uuid);

      if(remove){
        const msg={message: "Remove book"}
        return successResponse(msg, res);
      }

      return errorResponse(
        "The book is not registered",
        res,
        400
      );

    } catch (err) {
      console.log(err);
      return errorResponse(err, res);
    }
  },
};
