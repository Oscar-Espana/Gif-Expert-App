import React from 'react'

const GifGrid = ({category}) => {

    const getGrids = async()=>{
        const url ='https://api.giphy.com/v1/gifs/search?q=Rick and Morty&limit=10&api_key=TCQFCpq5FTQE0QxW0KCnD3xeqaZU2Spa'
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs=data.map(img =>{
            return {
                id:img.id,
                title:img.title,
                url: img.images?.downsized_medium.url
            }
        })
        console.log(gifs);
    }

    getGrids();

    return (
        <div>
            <h3>{category}</h3>
        </div>
    )
}

export default GifGrid