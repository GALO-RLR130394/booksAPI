const { v4: uuidv4 } = require('uuid');

module.exports = function reviewService(store) {

  const service = {};

  service.get = (book_uuid) => {

    let indexB=store.findIndex(elem=>elem.book_uuid === book_uuid);

    if(indexB!==-1){
     return store[indexB].reviews;
    }
    return undefined
  }

  service.getById = (book_uuid,review_uuid) => {
    let indexB=store.findIndex(elem=>elem.book_uuid === book_uuid);
    if(indexB!==-1){
      let indexR=store[indexB].reviews.findIndex(elem=>elem.review_uuid === review_uuid);
      if(indexR!==-1){
        let review=store[indexB].reviews[indexR];
        return review
      }
      return undefined;
    }
    return undefined;
  }

  service.add = (book_uuid,reviewP) => {

    let indexB=store.findIndex(elem=>elem.book_uuid === book_uuid);

    if(indexB!==-1){
      let uuid=uuidv4();
      let review={
        review_uuid:uuid,
        review:reviewP
      };

      store[indexB].reviews.push(review);
      return true
    }

    let uuid=uuidv4();

    let obj={
      book_uuid:book_uuid,
      reviews:[]
    }

    let review={
      review_uuid:uuid,
      review:reviewP
    }

    obj.reviews.push(review);

    store.push(obj)

    return true
  };

  service.update = (book_uuid,review_uuid,review) => {

    let indexB=store.findIndex(elem=>elem.book_uuid === book_uuid);

    if(indexB!==-1){
      let indexR=store[indexB].reviews.findIndex(elem=>elem.review_uuid === review_uuid);
      if(indexR!==-1){
        store[indexB].reviews[indexR].review=review;
        return true
      }
      return false
    }

    return false
  };

  service.remove =(book_uuid,review_uuid) =>{

    let indexB=store.findIndex(elem=>elem.book_uuid === book_uuid);
    if(indexB!==-1){
      let indexR=store[indexB].reviews.findIndex(elem=>elem.review_uuid === review_uuid);
      if(indexR!==-1){

        store[indexB].reviews.splice(indexR,1);
        return true
      }
      return false;
    }
    return false;
  };

  return service;
};
