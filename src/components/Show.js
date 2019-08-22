import React from 'react';

class Show extends React.Component {
    render() {
        return (
            <div className="details">
                <h3>Cocktail Info</h3>
                <hr/>
                <h4> {this.props.cocktail.name}</h4>
            </div>
            
        )
    }
}