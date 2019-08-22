import React from 'react';

class Show extends React.Component {
    render() {
        return (
            <div className="details">
                <h3>Cocktail Info</h3>
                <hr/>
                <h4> {this.props.cocktail.name}</h4>
                <button onClick={() => this.props.revealFavorite()}>Make Favorite</button>
                <h6 className = {this.props.display}>*Favorite*</h6>
                <h5>{this.props.cocktail.alcoholic}</h5>
                <h5>{this.props.cocktail.glass}</h5>
                <h5>{this.props.cocktail.ingredients}</h5>
                <h5>{this.props.cocktail.instructions}</h5>
            </div>
            
        )
    }
}

export default Show;