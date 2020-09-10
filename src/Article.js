import React from 'react'

function Article({id, title}) {
    console.log(id)
    console.log(title)
    return (
        <div>
            <p id={id}>{title}</p>
        </div>
    )
}

export default Article
