import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
// import Profile from './Profile';

const dummyRecipes = [
  { id: 1, name: 'Spaghetti Carbonara', image: 'https://source.unsplash.com/featured/?spaghetti', likes: 0, comments: [] },
  { id: 2, name: 'Margherita Pizza', image: 'https://source.unsplash.com/featured/?pizza', likes: 0, comments: [] },
  { id: 3, name: 'Cheeseburger', image: 'https://source.unsplash.com/featured/?burger', likes: 0, comments: [] },
  { id: 4, name: 'Sushi Platter', image: 'https://source.unsplash.com/featured/?sushi', likes: 0, comments: [] },
  { id: 5, name: 'Caesar Salad', image: 'https://source.unsplash.com/featured/?salad', likes: 0, comments: [] },
  { id: 6, name: 'Pancakes', image: 'https://source.unsplash.com/featured/?pancakes', likes: 0, comments: [] },
  { id: 7, name: 'Tacos', image: 'https://source.unsplash.com/featured/?tacos', likes: 0, comments: [] },
  { id: 8, name: 'Butter Chicken', image: 'https://source.unsplash.com/featured/?butterchicken', likes: 0, comments: [] },
  { id: 9, name: 'Ramen Bowl', image: 'https://source.unsplash.com/featured/?ramen', likes: 0, comments: [] },
  { id: 10, name: 'Chocolate Cake', image: 'https://source.unsplash.com/featured/?chocolatecake', likes: 0, comments: [] },
];

function Home() {
  const [recipes, setRecipes] = useState(dummyRecipes);
  const [newComment, setNewComment] = useState('');
  const [newRecipeName, setNewRecipeName] = useState('');

  const likeRecipe = (id) => {
    setRecipes(recipes.map(r => r.id === id ? { ...r, likes: r.likes + 1 } : r));
  };

  const commentRecipe = (id) => {
    if (newComment) {
      setRecipes(recipes.map(r => r.id === id ? { ...r, comments: [...r.comments, newComment] } : r));
      setNewComment('');
    }
  };

  const addRecipe = () => {
    if (newRecipeName) {
      const newRecipe = {
        id: Date.now(),
        name: newRecipeName,
        image: 'https://source.unsplash.com/featured/?food',
        likes: 0,
        comments: [],
      };
      setRecipes([newRecipe, ...recipes]);
      setNewRecipeName('');
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: 'Arial', backgroundColor: '#fff8f0', minHeight: '100vh' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <h2 style={{ color: '#e67e22' }}>🍽 Recipe Maker</h2>
        <Link to="/profile"><button style={{ padding: '5px 15px', backgroundColor: '#27ae60', color: 'white', border: 'none', borderRadius: 5 }}>Profile</button></Link>
      </header>

      <div style={{ marginBottom: 20 }}>
        <input
          placeholder="New recipe name"
          value={newRecipeName}
          onChange={(e) => setNewRecipeName(e.target.value)}
          style={{ padding: 8, width: 200, marginRight: 10 }}
        />
        <button onClick={addRecipe} style={{ padding: '8px 15px', backgroundColor: '#2980b9', color: 'white', border: 'none', borderRadius: 5 }}>Add Recipe</button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

        {recipes.map(recipe => (
          <div key={recipe.id} style={{ backgroundColor: '#fff', borderRadius: 10, boxShadow: '0 2px 10px #ccc', padding: 10, minWidth: 250 }}>
            <img src={recipe.image} alt={recipe.name} width="100%" style={{ borderRadius: 10 }} />
            <h4 style={{ margin: '10px 0' }}>{recipe.name}</h4>
            <p>❤ {recipe.likes} likes</p>
            <button onClick={() => likeRecipe(recipe.id)} style={{ backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: 5, padding: '5px 10px', marginBottom: 10 }}>Like</button>

            <div>
              <input
                placeholder="Add comment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                style={{ padding: 5, width: '100%', marginBottom: 5 }}
              />
              <button onClick={() => commentRecipe(recipe.id)} style={{ backgroundColor: '#8e44ad', color: 'white', border: 'none', borderRadius: 5, padding: '5px 10px' }}>Comment</button>
            </div>

            <ul style={{ marginTop: 10 }}>
              {recipe.comments.map((c, i) => (
                <li key={i} style={{ fontSize: 12, color: '#2c3e50' }}>💬 {c}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;