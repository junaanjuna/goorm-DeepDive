import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function App({onIncrement, onDecrement}) {

  useEffect(() => {
    dispatch(fetchPosts());
  }, [])

  const fetchPosts = () => {
    return async function fetchPosts(dispatch, getState) {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      dispatch({type: 'FETCH_POSTS', payload: response.data})
    }
  }

  const fetchPosts2 = () => async(dispatch, getSelection) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      dispatch({type: 'FETCH_POSTS', payload: response.data});
  }

  //async function fetchPosts() {
  //  const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  //  dispatch({type: 'FETCH_POSTS', payload: response.data})
  //}

  const [todoValue, setTodoValue] = useState('');

  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);
  console.log(counter);
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: 'ADD_TODO', text: todoValue});
    setTodoValue('');
  }
  return (
    <div className="App">
      Clicked: {counter} times
      {" "}

      <button onClick={onIncrement}>
        +
      </button>

      <button onClick={onDecrement}>
        -
      </button>

      <ul>
        {todos.map((todo, index) => <li key={index}>{todo}</li>)}
      </ul>

      <form onSubmit={handleSubmit}>
        <input type='text' value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
        />

        <input type='submit' />
      </form>

      <ul>
        {posts.map((posts, index) => <li key={index}>{posts.title}</li>)}
      </ul>
    </div>
  );
}

export default App;
