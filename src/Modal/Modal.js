import React from "react";
import "./Modal.css"

class Modal extends React.Component{
    constructor(props){
        super(props);
    }
    // вот так передаются прорсы в класс

    state={
        isOpen:false
    }
    render(){
        let inputCurrentValue = React.createRef();
        let editTodoElement = () =>{
            return inputCurrentValue.current.value;
        }

        return(
            <React.Fragment>
                <button style={{ width: '22px', height: '20px'}} className="buttonEdit"
                        onClick={()=>this.setState({isOpen:true})}><div>&#x270e;</div>
                </button>{/* Open modal */}
                
                {this.state.isOpen&&
                    <div className="modal">
                        <div className="modal-body">
                            <h1>Editor</h1>
                            <p>{this.props.todo.id +". "+ this.props.todo.title}</p>
                            <form>
                                <input ref={inputCurrentValue}/>
                                <button onClick={()=>{
                                    this.setState({isOpen:false})
                                    this.props.editTodo(editTodoElement(),this.props.todo.id)
                                }}>Edit todo</button>
                            </form>
                            
                            
                        </div>
                    </div>
                }
                
            </React.Fragment>
        )
    }
}

export default Modal;