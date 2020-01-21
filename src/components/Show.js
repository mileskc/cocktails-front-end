import React from 'react';

class Show extends React.Component {
    render() {
        return (
            <div className="details">
                <h3>Cocktail Info</h3> <a href='/'>home</a>
                {/* <button onClick={() => this.props.hideShowCard()}>Hide Info</button> */}
                <hr/>
                <h4> {this.props.cocktail.name}</h4>
                <div className="showImage">
                    <img src={this.props.cocktail.img} alt = ''/>
                </div>

                {console.log(this.props.cocktail.isSeed)}

                {/* {this.props.cocktail.isSeed ?
                    // <div class="buttonWidth">
                    <button className="waves-effect waves-light btn" onClick={() => this.props.revealFavorite(this.props.cocktail)}>Favorite/Unfavorite</button>
                    // </div>
                    : null
                } */}

                    <div class="buttonWidth">
                    <button className="waves-effect waves-light btn" onClick={() => this.props.revealFavorite(this.props.cocktail)}>Favorite/Unfavorite</button>
                    </div>
                
                {
                    this.props.cocktail.favorite ? 
                    <h6 class="material-icons">star_border</h6> : null
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
                <h5>Instructions:</h5>
                <p className = "instructions">{this.props.cocktail.instructions}</p>
                <a href='/'>home</a>
            </div>
            
        )
    }
}

export default Show;