
import { useParams } from 'react-router-dom'
import products from './data'

export default function ProductsDetail() {
    const { id } = useParams();
    const product = products.find((item) => item.id == id);

    return (
        <>
            {product ? (
                <div className='flex flex-col items-center justify-center'>
                <div className="flex flex-col items-center justify-center p-4 bg-white/50 w-1/2">
                    <h1 className="text-2xl font-bold mb-2 text-white ">Product Name: {product.name}</h1>
                    <p className="text-md text-gray-700 mb-2">Description: {product.description}</p>
                    <p className="text-lg font-semibold mb-2">Price: {product.price}</p>
                    <img src={product.imageUrl} alt={product.name} className="w-full shadow-md" />
                </div>
                </div>
            ) : (
                <p className="text-xl text-red-500 font-semibold">Product not found</p>
            )}
        </>
    );
}