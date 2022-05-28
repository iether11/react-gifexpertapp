import React, {useState} from 'react';



const AddCategory = ({setCategory}) => {
    const [inputValue, setInputValue] = useState('');//debe tener comillas sino esta undefined

    const handleInputChange = (e) => setInputValue(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategory(cats => [inputValue, ...cats]);
            setInputValue('');    
        }
        
        

    }
    
    return (
        <form onSubmit={handleSubmit}>
            
            <h2>Add Category</h2>
            <h3>{inputValue}</h3>
            <input 
                type="text" 
                placeholder='categoria'
                onChange={handleInputChange}
                name="categoria" 
                value={ inputValue } />
            <hr />
        </form>
    );
};



export default AddCategory;
