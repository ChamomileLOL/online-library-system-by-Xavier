import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './BookDetails.css'; // ✅ Create this CSS file for styling

const BookDetails = () => {
  const { id } = useParams();
  const books = useSelector(state => state.books);

  // Make sure both sides are strings to compare correctly
  const book = books.find(book => book.id.toString() === id);

  if (!book) {
    return (
      <div className="book-details-container">
        <h2>📕 Book Not Found</h2>
        <Link className="back-button" to="/">← Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="book-details-container fade-in">
      <div className="book-card">
        <h2 className="book-title">📖 {book.title}</h2>
        <p className="book-author"><strong>Author:</strong> {book.author}</p>
        <p className="book-description"><strong>Description:</strong><br />{book.description}</p>
        <p className="book-rating"><strong>Rating:</strong> {'⭐'.repeat(book.rating)}</p>
        <span className="category-tag">{book.category}</span>
        <Link className="back-button" to={`/books/${book.category}`}>← Back to Browse</Link>
      </div>
    </div>
  );
};

export default BookDetails;
