import React, { useState } from 'react';
import { TextField, Button, Card, IconButton, List, ListItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (task) {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <div>
            <TextField
                label="Новая задача"
                variant="outlined"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <Button 
                variant="contained" 
                onClick={addTask}
                style={{ marginLeft: 10 }}
            >
                Добавить
            </Button>
            <List>
                {tasks.map((t, index) => (
                    <ListItem key={index} component={Card} style={{ margin: '10px 0', display: 'flex', justifyContent: 'space-between' }}>
                        <span>{t}</span>
                        <IconButton edge="end" aria-label="delete" onClick={() => deleteTask(index)}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default TodoList;