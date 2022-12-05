import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        backgroundColor: '#f5f5f5',
        padding: 0
    },
    li: {
        borderBottom: '1px dashed black'
    }
}));

const TodoList = ({ theme, todos, completeTodo, saveTodo, noteRef, preventSubmit,deleteTodo }) => {
    const classes = useStyles();
    const [checked, setChecked] = React.useState([0]);


    const handleToggle = (value, inx) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
        completeTodo(inx);
    };


    return (
        <ThemeProvider theme={theme}>
            <List className={classes.root}>
            {
                todos ?
                todos.map((todo, inx) => {
                const labelId = `list-todo-${todo}`;
                return (
                    <ListItem
                        key={todo.id}
                        role={undefined}
                        dense
                        button
                        className={classes.li}
                    >
                        <ListItemIcon>
                            <Checkbox
                                color="primary"
                                edge="start"
                                checked={checked.indexOf(todo) !== -1}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': labelId }}
                                onClick={handleToggle(todo, inx)}
                                onKeyPress={preventSubmit}
                            />
                        </ListItemIcon>
                        {
                            (!todo.isEditing) ?
                                <>
                                    <ListItemText
                                        id={labelId}
                                        primary={`${todo.text}`}
                                        style={{textDecoration: todo.isCompleted ? "line-through" : ""}}
                                    />
                                </>
                                :
                                <>
                                    <label
                                        htmlFor="task" 
                                        className="visuallyhidden"
                                    >
                                        {todo.text}
                                    </label>
                                    <input
                                        className="form__edit-input"
                                        defaultValue={todo.text}
                                        ref={(element) => noteRef.current[inx] = element}
                                        onKeyPress={preventSubmit}
                                        id="task"
                                    />
                                    <ListItemIcon>
                                        <IconButton onClick={() => saveTodo(inx)} edge="end" aria-label="delete">
                                            <BookmarkIcon />
                                        </IconButton>
                                    </ListItemIcon>
                                </>
                        }
                        <ListItemSecondaryAction>
                            <IconButton onClick={() => deleteTodo(inx)} edge="end" aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                );
            })
             : <>Loading ...</>
            }
            {}
        </List>
        </ThemeProvider>
    );
}

export default TodoList;
