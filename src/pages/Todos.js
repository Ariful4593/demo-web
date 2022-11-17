import React, { useEffect } from 'react';
import deleteIcon from '../images/delete-icon.jfif';
import addIcon from '../images/add-icon.png';
import editIcon from '../images/edit-icon.png';

export const Todos = () => {
    const [todos, setTodos] = React.useState([]);
    const [todoName, setTodoName] = React.useState("");
    const [edit, setEdit] = React.useState(false);
    const [todoId, setTodoId] = React.useState(null);
    const [refresh, setRefresh] = React.useState(false);

    useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem('todos')) || []);
        setRefresh(false);
    }, [refresh])


    const addTodo = (e) => {
        e.preventDefault();
        if (!todoName) return;

        localStorage.setItem('todos', JSON.stringify([...todos, { id: todos.length, name: todoName, completed: false }]))
        setTodoName("");
        setRefresh(true);
    }

    const updatedCurrentTodo = (e) => {
        if (e.key === "Enter") {
            // console.log(e.target.value);
            // setTodos(
            //     todos.map((todo) => {
            //         if (todo.id === todoId) {
            //             return { ...todo, name: e.target.value }
            //         }
            //         return todo;
            //     })
            // )

            localStorage.setItem('todos', JSON.stringify(todos.map((todo) => {
                if (todo.id === todoId) {
                    return { ...todo, name: e.target.value }
                }
                return todo;
            })))

            setEdit(false);
            setRefresh(true);
        }
    }

    const handleEdit = (id) => {
        setTodoId(id);
        setEdit(!edit);
    }

    const deleteTodo = (id) => {
        // setTodos(
        //     todos.filter((todo) => todo.id !== id)
        // )
        
        localStorage.setItem('todos', JSON.stringify(todos.filter((todo) => todo.id !== id)))
        setRefresh(true);
    }
    return (
        <div className="container d-flex justify-content-center align-items-center w-75">
            <div className="row">
                <div className="col-12">
                    <h1 className='text-center'>Todos</h1>
                </div>
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={addTodo}>
                                <div className="input-group mb-2">
                                    <input type="text" value={todoName} onChange={({ target }) => setTodoName(target.value)} className="form-control" placeholder="Enter Todo" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <button className="input-group-text " type='submit' >
                                        <img src={addIcon} alt="" style={{ width: '25px', cursor: 'pointer' }} />
                                    </button>
                                </div>
                            </form>
                            {
                                todos.map((todo, index) => {
                                    return (
                                        <div key={index} className="input-group mb-1">
                                            {edit && todoId === index ?
                                                <input
                                                    type="text"
                                                    placeholder="Update your todo"
                                                    className="form-control border-primary"
                                                    defaultValue={todo.name}
                                                    onKeyPress={updatedCurrentTodo}
                                                /> : <p className='form-control m-0' >{todo.name}</p>}
                                            <img src={editIcon} alt="" onClick={() => handleEdit(index)} className='input-group-text bg-white' style={{ width: '50px', cursor: 'pointer' }} />

                                            <img src={deleteIcon} alt="" onClick={() => deleteTodo(todo.id)} className='input-group-text bg-white' style={{ width: '50px', cursor: 'pointer' }} />
                                        </div>
                                    )
                                }
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
