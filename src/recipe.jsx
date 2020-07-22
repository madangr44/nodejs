import React from  "react"
function reciepe({title,calories,image}){
    return <div>
        <h2>{title}</h2>
        <p>{calories}</p>
        <img src={image} alt="img"/>
    </div>
}
export default reciepe;