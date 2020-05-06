import React from 'react';
import axios from 'axios';

import './Pokemon.css';

class Pokemon extends React.Component {
    state = {
        id: "",
        name: "",
        sprites: {
            back_default: "",
            front_default: ""
        },
        types: []
    };

    componentDidMount() {
        this.getPokemon();
    }

    getPokemon() {
        axios.get(`http://localhost:8080/v1/Pokemon/${this.props.name}`).then(pokemon => {
            this.setState({
                ...this.state,
                id: pokemon.data.id,
                name: pokemon.data.name,
                sprites: {
                    back_default: pokemon.data.sprites.back_default,
                    front_default: pokemon.data.sprites.front_default
                },
                types: pokemon.data.types
            });
            console.log(this.state);
        })
        .catch(() => {
            console.log("Couldn't retrieve pokemon")
        })
    }

    getClass(type) {
        switch(type) {
            case "fire" :
                return "fireType";
            case "electric":
                return "electricType";
            case "water":
                return "waterType";
            case "grass":
                return "grassType";
            case "poison":
                return "poisonType";
            case "flying":
                return "flyingType";
            case "bug":
                return "bugType";
            default:
                return "";
        }
    }

    render() {
        let classStyle = "cardContainer ";
        classStyle += this.state.types.length > 0 ? this.getClass(this.state.types[0].type.name) : "";

        return(
        <div className={classStyle}>
            <div>
                <p className="cardTitle">#</p>
                <p>{this.state.id}</p>
            </div>
            <div>
                <p className="cardTitle">Name:</p>
                <p>{this.state.name}</p>
            </div>
            <div>
                <p className="cardTitle">Images:</p>
                <br />
                <img className="cardImage" src={this.state.sprites.front_default} alt="back_default"/>
                <img className="cardImage" src={this.state.sprites.back_default} alt="front_default"/>
            </div>
            <div>
                <p className="cardTitle">Types</p>
                <div>
                    {this.state.types.map(e => {
                        return <p key={e.slot} className="cardType">{e.type.name}</p>;
                    })}
                </div>
            </div>
        </div>);
    };
}

export default Pokemon;