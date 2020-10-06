import React,{useState} from 'react'

const GifExpertApp = () => {

    // const categories=['One Punch Man', 'Samurai X', 'Dragin Ball'];
    const [categories, setCategories] = useState(['One Punch Man', 'Samurai X', 'Dragin Ball'])

    const handleAdd=()=>{
        setCategories([...categories,'Naruto']);
        // setCategories(cats =>[...categories,'Naruto']);
    }

    return (
        <>
            <h2>Gif Expert App</h2>
            <hr/>
            <button onClick={handleAdd}>Agregar</button>

            <ul>
                {
                    categories.map( category=>{
                    return <li key={category} >{category}</li>
                    })
                }
            </ul>
        </>
    )
}

export default GifExpertApp
