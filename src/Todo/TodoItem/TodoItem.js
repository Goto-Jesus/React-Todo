import React, {useContext} from "react";
import PropTypes from "prop-types"
import "./TodoItem.css"
import Context from "../../context";
import Modal from "../../Modal/Modal";
import Checkbox from "../../Checkbox/Checkbox";
import Button from "../../Button/Button";

let TodoItem = ({todo,index,onChange,editTodo}) =>{
    const {removeTodo} = useContext(Context);
    const classes = [];

    if(todo.completed){
        classes.push('done')
    }

    return(
        <li className="li">
            <Checkbox checked={todo.completed} onChange={()=>onChange(todo.id)}/>
            <span className= {classes.join(' ') + " span"}>
                <strong className="strong">{index+1+"."}</strong>
                {todo.title}
            </span>
            <div className="div">
                <Modal todo = {todo} editTodo = {editTodo} />
                <Button style={{ width: '22px', height: '20px'}} onClick={()=>removeTodo(todo.id)} text="&times;"/>
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