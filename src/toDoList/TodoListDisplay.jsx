import { NavLink } from 'react-router-dom';


export default function TodoListDisplay({ todos }) {
    return (
        <>
       
<div>
    
    <NavLink to="/todolist">
    
        <div className="bg-white/75 shadow-lg rounded-lg p-6 mb-4 flex flex-col justify-between items-center max-h-[400px] overflow-auto">
        <h1 className="m-2 text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">My Todo List</h1>
            {todos.length === 0 ? (
                <div className="text-gray-500 italic">No todos yet</div>
            ) : (
                todos.map(todo => (
                    <div key={todo.id} className="todo-item bg-blue-100 shadow-sm rounded-md p-3 mb-2 w-full">
                        <span className="text-gray-700">{todo.message}</span>
                    </div>
                ))
            )}
        </div>
    </NavLink>
</div>

        </>
    );
}
