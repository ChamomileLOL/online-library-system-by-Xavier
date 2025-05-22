import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';
import { categories } from '../data/books';

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const books = useSelector(state => state.books);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!title) errors.title = 'Title is required';
    if (!author) errors.author = 'Author is required';
    if (!description) errors.description = 'Description is required';
    if (!rating) errors.rating = 'Rating is required';
    else if (isNaN(rating) || rating < 1 || rating > 5) errors.rating = 'Rating must be 1–5';
    if (!category) errors.category = 'Category is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      const newBook = {
        id: Date.now().toString(),  // unique string ID for routing
        title,
        author,
        description,
        rating: Number(rating),
        category,
      };
      dispatch(addBook(newBook));
      navigate(`/books/${category}`);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>Title:</label><br />
          <input value={title} onChange={e => setTitle(e.target.value)} />
          {errors.title && <div style={{ color: 'red' }}>{errors.title}</div>}
        </div>

        <div>
          <label>Author:</label><br />
          <input value={author} onChange={e => setAuthor(e.target.value)} />
          {errors.author && <div style={{ color: 'red' }}>{errors.author}</div>}
        </div>

        <div>
          <label>Description:</label><br />
          <textarea value={description} onChange={e => setDescription(e.target.value)} />
          {errors.description && <div style={{ color: 'red' }}>{errors.description}</div>}
        </div>

        <div>
          <label>Rating (1 to 5):</label><br />
          <input
            type="number"
            value={rating}
            onChange={e => setRating(e.target.value)}
            min="1"
            max="5"
          />
          {errors.rating && <div style={{ color: 'red' }}>{errors.rating}</div>}
        </div>

        <div>
          <label>Category:</label><br />
          <select value={category} onChange={e => setCategory(e.target.value)}>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          {errors.category && <div style={{ color: 'red' }}>{errors.category}</div>}
        </div>

        <br />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
