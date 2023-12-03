
import { NavLink } from 'react-router-dom';

export default function Card({ item }) {
  return (
   
     <div className="flex flex-col max-w-xs rounded overflow-hidden shadow-lg bg-white m-4">
            <NavLink to={`/productsdetails/${item.id}`}>
            <img className="w-full" src={item.imageUrl} alt={item.name} /></NavLink>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-red-600 ">{item.name} </div>
                <p className="text-gray-700 text-base">
                    {item.description}
                </p>
                <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {item.price}
                </span>
            </div>
        </div>
    
  );
}
