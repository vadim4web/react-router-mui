import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import BackspaceTwoToneIcon from '@mui/icons-material/BackspaceTwoTone';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';

import { useState, useEffect, useContext, useCallback } from 'react';
import { AppContext } from '../AppContext';
import CircularLoader from '../components/CircularLoader';
import computeHeight from '../utils/computeHeight';
import './DummyComponent.css';

const STORAGE_KEY = 'todos';

const DummyList = () => {
  const storedTodos = JSON.parse(sessionStorage.getItem(STORAGE_KEY));
  const [todos, setTodos] = useState(storedTodos || []);
  const [isLoading, setIsLoading] = useState(true);
  const { showFrame, isLandscape } = useContext(AppContext);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch('https://dummyjson.com/todos');
      const data = await response.json();
      setTodos(data.todos);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const storedTodos = JSON.parse(sessionStorage.getItem(STORAGE_KEY));
    console.log(storedTodos && storedTodos.length > 0);
    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos);
      setIsLoading(false);
    } else {
      fetchData();
    }
  }, []);

  useEffect(() => {
    const storeData = () => {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    };

    if (!isLoading) {
      storeData();
    }
  }, [todos, isLoading]);

  useEffect(() => {
    return () => {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    };
  }, [todos]);


  const handleToggle = (id) => () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  if (isLoading) {
    return <CircularLoader />;
  }

  return (
    <section
      className='todos-container'
      style={computeHeight(showFrame, isLandscape, '40.5dvh', '43.5dvh', '73.5dvh', '76.5dvh')}
    >
      <List sx={{ width: '100%', minWidth: 360, bgcolor: 'background.paper' }}>
        {todos.map((todo) => {
          const { id, todo: todoItem, completed } = todo;
          const labelId = `checkbox-list-label-${id}`;

          return (
            <ListItem key={id} secondaryAction={
              <IconButton edge="start" aria-label="comments" onClick={() => handleDelete(id)}>
                <BackspaceTwoToneIcon />
              </IconButton>
            } disablePadding>
              <ListItemButton role={undefined} onClick={handleToggle(id)} dense>
                <ListItemIcon>
                  <Checkbox edge="end" checked={completed} tabIndex={-1} disableRipple inputProps={{ 'aria-labelledby': labelId }} />
                </ListItemIcon>
                <ListItemText id={labelId} primary={todoItem} className="list-item-text" />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </section>
  );
};

export default DummyList;
