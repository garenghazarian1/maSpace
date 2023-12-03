
export default function SortControls({ onSortChange }) {
    return (
        <>
        <h2 className="text-2xl font-semibold text-center text-white mb-4">Sort Products</h2>
        <div className="sorting-controls flex justify-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
                <input
                    type="radio"
                    name="sort"
                    value="lowToHigh"
                    onChange={(e) => onSortChange(e.target.value)}
                    className="radio radio-primary" 
                />
                <span className="text-md text-white">Price: Low to High</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
                <input
                    type="radio"
                    name="sort"
                    value="highToLow"
                    onChange={(e) => onSortChange(e.target.value)}
                    className="radio radio-primary" 
                />
                <span className="text-md text-white">Price: High to Low</span>
            </label>
        </div>
        </>
    );
}
