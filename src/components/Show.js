import React from 'react';

class Show extends React.Component {
    render() {
        return (
            <div className="details">
                <h3>Cocktail Info</h3>
                {/* <button onClick={() => this.props.hideShowCard()}>Hide Info</button> */}
                <hr/>
                <h4> {this.props.cocktail.name}</h4>
                <img src={this.props.cocktail.img} alt = ''/>
                <button onClick={() => this.props.revealFavorite(this.props.cocktail)}>Make Favorite</button>
                {
                    this.props.cocktail.favorite ? <h6>*Favorite*</h6> : null
                }
                <h5>{this.props.cocktail.alcoholic}</h5>
                <h5>{this.props.cocktail.glass}</h5>
                <h5>Ingredients:</h5>
                <ul>
                {this.props.cocktail.ingredients.map(ingredient => {
                    if (ingredient !== "") {
                        return (
                        <li>{ingredient}</li>
                        )
                    }
                })
                }
                </ul>
                <h5>{this.props.cocktail.instructions}</h5>
            </div>
            
        )
    }
}

export default Show;