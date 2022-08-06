const { successResponse, errorResponse } = require("../middlewares/responses");

const ReviewService = require('../helpers/reviEwservice');
const reviewService = ReviewService([]);

module.exports = {
  
  getAll:function(req, res, next){

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

      let reviews=reviewService.get(book_uuid);

      if(reviews!==undefined){
        return successResponse(reviews, res);
      }

      return errorResponse(
        "The book has no reviews",
        res,
        400
      );

    } catch (err) {
      console.log(err);
      return errorResponse(err, res);
    }
  },
  getById:function(req, res, next) {

    /***
     * @Params
     * book_uuid
     * review_uuid
    ***/

    const book_uuid= req.params.book_uuid;
    const review_uuid= req.params.review_uuid;

    try {
      if (
        typeof book_uuid=== undefined || 
        typeof review_uuid=== undefined 
      ) {
        throw new Error("Please check the data sent");
      }

      let review=reviewService.getById(book_uuid,review_uuid);

      if(review!==undefined){
        return successResponse(review, res);
      }

      return errorResponse(
        "The review is not registered",
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
     * book_uuid
     * review
    ***/

    const {
      review
    }=req.body;

    const book_uuid= req.params.book_uuid;

    try {
      if (
        typeof book_uuid === undefined ||
        typeof review=== undefined
      ) {
        throw new Error("Please check the data sent");
      }
      let add=reviewService.add(book_uuid,review);

      if(add){
        const msg={message: "Created review"}
        return successResponse(msg, res);
      }

      return errorResponse(
        "The review is already registered",
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
     * review_uuid
     * review
    ***/

    const {
      review
    }=req.body;

    const book_uuid= req.params.book_uuid;
    const review_uuid= req.params.review_uuid;

    try {
      if (
        typeof review_uuid=== undefined ||
        typeof review === undefined
      ) {
        throw new Error("Please check the data sent");
      }

      let update=reviewService.update(book_uuid,review_uuid,review);

      if(update){
        const msg={message: "Updated review"}
        return successResponse(msg, res);
      }

      return errorResponse(
        "The review is not registered",
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
     * review_uuid
    ***/

    const book_uuid= req.params.book_uuid;
    const review_uuid= req.params.review_uuid;

    try {
      if (
        typeof book_uuid=== undefined ||
        typeof review_uuid=== undefined
      ) {
        throw new Error("Please check the data sent");
      }

      let remove=reviewService.remove(book_uuid,review_uuid);

      if(remove){
        const msg={message: "Remove review"}
        return successResponse(msg, res);
      }

      return errorResponse(
        "The review is not registered",
        res,
        400
      );

    } catch (err) {
      console.log(err);
      return errorResponse(err, res);
    }
  }
};
