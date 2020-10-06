import React,{useState} from 'react'
import AddCategory from './components/AddCategory'

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch Man', 'Samurai X', 'Dragin Ball'])

    // const handleAdd=()=>{
    //     setCategories([...categories,'Naruto']);
    //     // setCategories(cats =>[...categories,'Naruto']);
    // }

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>
            

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
