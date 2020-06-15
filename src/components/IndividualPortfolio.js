import React from 'react'

const IndividualPortfolioPage = (props) => {
    console.log(props)
    return (
        <div>
        <h2>Here is the thing I've done:</h2>
            This is my portfolio item with the ID of {props.match.params.id}
        </div>
    )
}

export default IndividualPortfolioPage