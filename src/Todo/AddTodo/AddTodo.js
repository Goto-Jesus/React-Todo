import React,{ useState }  from "react";//10
import PropTypes from 'prop-types'
import { clear } from "@testing-library/user-event/dist/clear";

// //10 Forma
// const AddTodoWishState = ({onCreate}) =>{
//     const[value,setValue]=useState(''); // value с '' пустім значением
//     // если без import {useState}
//     // const[value,setValue]=React.useState('');
//     function submitHandler(event){
//         event.preventDefault() // убрать обновление страницы из-за формы 

//         if(value.trim()){
//             onCreate(value) // 
//             setValue('') // очистка поля
//         }
//     }

//     return(
//         <form onSubmit={submitHandler}>
//             <input value={value} onChange={event=>setValue(event.target.value)}/>
//             <button type="submit">Add todo</button>
//         </form>
//     );
// }

//11 Кастомный Хук для input

function useInputValue(defaultValue='') // создаем хук
{
    const[value,setValue]=useState(defaultValue);
    return {
        bind:{
            value,
            onChange: event=> setValue(event.target.value)
        },
        clear:()=>setValue(''),
        value:()=>value
    }
}

const AddTodo = ({onCreate}) =>{
    const input = useInputValue('') // собственный хук
    function submitHandler(event){
        event.preventDefault()

        if(input.value().trim()){
            onCreate(input.value())
            input.clear();
        }
    }

    return(
        <form onSubmit={submitHandler}>
            <input {...input.bind} />
            <button type="submit">Add todo</button>
        </form>
    );
}

AddTodo.propTypes = {onCreate:PropTypes.func.isRequired};

export default AddTodo;