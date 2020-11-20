import React from 'react'
import Cards from './Cards'

function Main(props) {
    return (
        <div className="main">
            {props.Movies.filter(el=>el.rating.includes(props.setSearchRating) && el.name.toUpperCase().includes(props.Keyword.toUpperCase())).map(el=>
            <Cards Movie={el}/>)}   
        </div>
    )
}

export default Main;
