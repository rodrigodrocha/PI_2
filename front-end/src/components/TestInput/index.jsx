import "./styles.css"

export const TestInput = ({searchValue, handleChange}) => (
    <input 
    className="text-input"
    onChange={handleChange} 
    type="search" 
    value={searchValue} 
    placeholder="type your search"
    />
)