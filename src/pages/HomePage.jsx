import { categories, books } from '../data/books';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>📚 Welcome to the Online Library System</h1>
      <p>Discover and explore a world of books.</p>

      <h2>📁 Book Categories</h2>
      <ul>
        {categories.map((cat, index) => (
          <li key={index}>
            <Link to={`/books/${cat}`}>{cat}</Link>
          </li>
        ))}
      </ul>

      <h2>🔥 Popular Books</h2>
      <ul>
        {books.map(book => (
          <li key={book.id} style={{ marginBottom: '10px' }}>
            <strong>{book.title}</strong> by {book.author}
            <br />
            <Link to={`/book/${book.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
