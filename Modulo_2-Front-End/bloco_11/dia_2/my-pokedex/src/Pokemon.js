import React from 'react';

class Pokemon extends React.Component {
    render() {
        const { name, type, averageWeight, image } = this.props.pokemon;
        return (
            <div>
                <h1>{name}</h1>
                <h3>{type}</h3>
                <p>{averageWeight.value} {averageWeight.measurementUnit}</p>
                <img src={image}></img>
            </div>
        )
    }
}

export default Pokemon;