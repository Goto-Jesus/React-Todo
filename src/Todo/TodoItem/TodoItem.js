import React, {useContext} from "react";
import PropTypes from "prop-types"
import "./TodoItem.css"
import Context from "../../context";
import Modal, {ModalProps} from "../../Modal/Modal";
import Checkbox from "../../Checkbox/Checkbox";

let TodoItem = ({todo,index,onChange,editTodo}) =>{
    const {removeTodo} = useContext(Context);
    // console.log("todo",todo)
    const classes = [];

    if(todo.completed){
        classes.push('done')
    }

    return(
        <li className="li">
            <Checkbox checked={todo.completed} onChange={()=>onChange(todo.id)}/>
            <span className={classes.join(' ')}>
                <strong className="strong">{index+1+"."}</strong>
                {todo.title}
            </span>
            <div className="div">
                <Modal todo = {todo} editTodo = {editTodo} />
                <button className="buttonClose" onClick={()=>removeTodo(todo.id)}>&times;</button>
            </div>
        </li>
    );

    
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

export default TodoItem;