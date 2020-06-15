import React from 'react'

const IndividualPortfolioPage = (props) => {
    return (
        <div>
            This is my portfolio with the ID of {props.match.params.id}
        </div>
    )
}

export default IndividualPortfolioPage