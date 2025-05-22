# Online Library System

A React-based Online Library System that lets users browse books by category, view detailed information about each book, add new books with validation, and navigate smoothly throughout the app. It uses Redux for state management, React Router for routing, and includes creative CSS styling for an enhanced user experience.

---

## Features

- Browse books across 9 different genres  
- View detailed book info including description and rating  
- Add new books through a validated form  
- Custom 404 Not Found page (`NotFound.jsx`) for unknown routes  
- State managed via Redux Toolkit  
- Client-side routing with React Router DOM  
- Modular and creative CSS styling  

---

## Technologies Used

- React  
- Redux Toolkit  
- React Router DOM  
- JavaScript (ES6+)  
- CSS  

---

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and npm installed.

---

### Installation

1. Clone this repository:

git clone 
https://github.com/ChamomileLOL/online-library-system-by-Xavier.git

2. Navigate to the project directory:

cd online-library-system

3. Install the dependencies:

npm install

Running the Application
Start the development server:
npm start

Then open the provided output local host in your browser. 

### Project Structure

```

online-library-system/
├── public/                 # Static files and index.html
├── src/
│   ├── components/         # React components
│   │   ├── AddBook.jsx
│   │   ├── BookDetails.jsx
│   │   ├── BookDetails.css   # Styles for BookDetails component
│   │   ├── BrowseBooks.jsx
│   │   ├── Navbar.jsx
│   │   └── NotFound.jsx      # 404 Not Found page
│   ├── data/
│   │   └── books.js          # Initial book data and categories
│   ├── redux/
│   │   ├── booksSlice.js     # Redux slice for books state
│   │   └── store.js          # Redux store configuration
│   ├── App.jsx               # Main app with routes and layout
│   └── main.jsx              # React entry point
├── package.json
└── README.md

```

### Styling
Component-specific CSS files enable modular and creative styling (e.g., BookDetails.css)

You can customize or add styles for enhancing the user interface.

### Contributing
Contributions are welcome for improvements!

### Contact
For any questions or feedback, please contact:
xavier.siby777@gmail.com





