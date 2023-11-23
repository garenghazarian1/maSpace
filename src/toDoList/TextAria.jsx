import React, { useState, useEffect } from 'react';
import db from './db';

export default function TextAria({ layout }) {
    const [todos, setTodos] = useState([]);
    const [editTodoId, setEditTodoId] = useState(null);

    useEffect(() => {
        const loadTodos = async () => {
            const allTodos = await db.todos.toArray();
            setTodos(allTodos);
        };
        loadTodos();
    }, []);

    const handlerAdd = async (event) => {
        event.preventDefault();
        const { value } = event.target.message;

        if (!value.trim()) {
            alert('Type something, please');
            return;
        }

        const newTodo = {
            message: value.trim(),
            id: Date.now(),
        };

        const id = await db.todos.add(newTodo);
        setTodos([...todos, { ...newTodo, id }]);
        event.target.reset();
    };

    const handleClear = async () => {
        await db.todos.clear();
        setTodos([]);
    };

    const handleDelete = async (id) => {
        await db.todos.delete(id);
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const startEdit = (id) => {
        setEditTodoId(id);
    };

    const saveEdit = async (id, message) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, message };
            }
            return todo;
        });
        setTodos(updatedTodos);
        setEditTodoId(null);
        await db.todos.update(id, { message });
    };

    return (
        <>
            <form onSubmit={handlerAdd}>
                <textarea
                    type='text'
                    name="message"
                    placeholder="Put your text here"
                    className="placeholder-white text-black bg-white/50 w-full p-2 rounded border border-blue-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    style={{ minHeight: '100px' }}
                ></textarea>
                <button
                    type='submit'
                    className="mr-4 bg-white text-blue-600 py-2 px-6 mt-2 rounded hover:bg-blue-100 focus:outline-none focus:ring-4 focus:ring-blue-300 active:bg-blue-200 transition duration-300">
                    Add
                </button>
                <button
                    onClick={handleClear}
                    type='button'
                    className="mr-4 bg-white text-blue-600 py-2 px-6 mt-2 rounded hover:bg-blue-100 focus:outline-none focus:ring-4 focus:ring-blue-300 active:bg-blue-200 transition duration-300">
                    Clear
                </button>
            </form>

            {todos.length <= 0 ? (
                <div className="mt-4 p-4 bg-green-100 text-green-800 rounded shadow text-center">
                    <span className="block text-lg font-semibold mb-2">Ready to Organize?</span>
                    <p>Let's create our list.</p>
                </div>
            ) : (
                <main className="mt-4 p-4 bg-gradient-to-r from-indigo-500/25 to-black/25 p-2 rounded-lg shadow-lg ">
                    <ol className={`list-decimal list-inside ${layout ? 'flex flex-col gap-2 flex-wrap' : 'flex flex-row gap-2 flex-wrap'}`}>
                        {todos.map(({ id, message }) => (
                            <li key={id} className="flex justify-between items-center text-black mb-2 pl-2 pr-4 bg-white/75 rounded shadow-sm hover:bg-blue-100">
                                {editTodoId === id ?
                                    <input type='text' defaultValue={message} onBlur={(e) => saveEdit(id, e.target.value)} autoFocus />
                                    :
                                    <span>{message}</span>}
                                <div className="flex items-center gap-2">
                                    {editTodoId !== id ?
                                        <button onClick={() => startEdit(id)} className="m-2 bg-green-500/75 text-white py-1 px-3 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-300">
                                            Edit
                                        </button>
                                        :
                                        <span>Saving...</span>}
                                    <button onClick={() => handleDelete(id)} className="bg-red-500/75 text-white py-1 px-3 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition duration-300">
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ol>
                </main>
            )}
        </>
    );
}
