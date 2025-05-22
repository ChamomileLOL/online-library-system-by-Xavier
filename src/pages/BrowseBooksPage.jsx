import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

const BrowseBooksPage = () => {
  const { category } = useParams();
  const books = useSelector(state => state.books);

  const filteredBooks = books.filter(book => book.category === category);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Books in {category}</h2>

      {filteredBooks.length === 0 ? (
        <p>No books found in this category.</p>
      ) : (
        filteredBooks.map(book => (
          <div
            key={book.id}
            style={{
              border: '1px solid #ccc',
              padding: '15px',
              marginBottom: '15px',
              borderRadius: '8px',
              backgroundColor: '#f9f9f9'
            }}
          >
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Description:</strong> {book.description}</p>
            <p><strong>Rating:</strong> {book.rating}</p>
            <Link to={`/book/${book.id}`} style={{ color: 'blue' }}>View Details</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default BrowseBooksPage;
