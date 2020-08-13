export default class BookstoreService {
  getBooks() {
    return [
      {
        id: 1,
        author: 'James',
        title: 'My Book'
      },
      {
        id: 2,
        author: 'Arthur',
        title: 'My Biography'
      }
    ];
  }
};