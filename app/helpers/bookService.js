const { v4: uuidv4 } = require('uuid');

module.exports = function bookService(store) {

  const service = {};

  service.get = () => {
     return store;
  }

  service.getById = (book_uuid) => {
    let index=store.findIndex(elem=>elem.book_uuid === book_uuid);
    if(index!==-1){
      
      let book=store[index];
      return book
    }

    return undefined;
  }

  service.add = (title,author,publication_year) => {

    let tit=store.find(elem=>elem.title === title);
    let aut=store.find(elem=>elem.author === author);
    let pub_year=store.find(elem=>elem.publication_year === publication_year);

    if(tit!==undefined && aut!==undefined && pub_year!==undefined){
      return false
    }

    let uuid=uuidv4();
    let obj={
      book_uuid:uuid,
      title:title,
      author:author,
      publication_year:publication_year
    }
    store.push(obj)
    return true
  };

  service.update = (title,author,publication_year,book_uuid) => {

    let index=store.findIndex(elem=>elem.book_uuid === book_uuid);

    if(index!==-1){
      let obj={
        book_uuid:book_uuid,
        title:title,
        author:author,
        publication_year:publication_year
      }
      store[index]=obj;
      return true
    }
    return false
  };

  service.remove =(book_uuid) =>{
    let index=store.findIndex(elem=>elem.book_uuid === book_uuid);

    if(index!==-1){
      store.splice(index,1);
      return true
    }
    return false
  };

  return service;
};
