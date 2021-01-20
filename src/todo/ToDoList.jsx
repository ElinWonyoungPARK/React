import React, {useState} from 'react'
import { useDispatch } from 'react-redux'

const TodoList = () => {
    const [ todo, setTodo ] = useState('')
    const dispatch = useDispatch()
    const addTodo = todo => dispatch(addTodoAction(todo))

    const submitForm = () => {}
    const handleChange = () => {}
    
    return <>
        <form onSubmit = {} method="POST">
            <div className="row mt-3">
                <div className="form-group col-sm-8">
                    <input
                        type="text"
                        placeholder="할 일 입력"
                        name="todo"
                        className="form-control"
                        value={todo}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-sm-4">
                    <button type="submit" className="btn btn-primary btn-md">
                        할 일 추가
                    </button>
                </div>
            </div>
        </form>
    </>
}

export default ToDoList