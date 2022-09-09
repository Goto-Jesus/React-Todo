import React from "react";
import PropTypes from "prop-types";
import TodoItem from "../TodoItem/TodoItem";

const styles = {
    ul:{
        listStyle:'none',
        marging: 0,
        padding: 0
    }
}

function TodoList(props){
    return(
        <ul style={styles.ul}>
            {props.todos.map((todo,index)=>{
                return <TodoItem 
                    todo={todo} 
                    key={todo.id} 
                    index={index} 
                    onChange={props.onToggle}
                    editTodo={props.editTodo}
                />
            })}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
    // для определения типа что это массив "array"
    // в котором лежат объекты "arrayOf(PropTypes.object)"
    // и он нужен нам для работы этой компоненты ".isRequired"
}

export default TodoList;