import React, { Component } from 'react';
import './Pokemon.css';

class Pokemon extends Component {
  state = {
    typeSelected: 'cardContainer '
  };

  componentDidMount() {
    const { pokemon } = this.props;
    this.setState({
      typeSelected: 'cardContainer ' + this.getClass(pokemon.types[0].type.name)
    });
  }

  getClass(type) {
    switch (type) {
      case 'fire':
        return 'fireType';
      case 'electric':
        return 'electricType';
      case 'water':
        return 'waterType';
      case 'grass':
        return 'grassType';
      case 'poison':
        return 'poisonType';
      case 'flying':
        return 'flyingType';
      case 'bug':
        return 'bugType';
      case 'normal':
        return 'normalType';
      default:
        return '';
    }
  };

  handleTypeChange(type) {
    this.setState({
      ...this.state,
      typeSelected: 'cardContainer ' + this.getClass(type)
    });
  }

  render() {
    const { pokemon } = this.props;

    return (
      <div className={this.state.typeSelected}>
        <div>
          <p className='cardTitle'>#</p>
          <p>{pokemon.id}</p>
        </div>
        <div>
          <p className='cardTitle'>Name:</p>
          <p>{pokemon.name}</p>
        </div>
        <div>
          <p className='cardTitle'>Images:</p>
          <br />
          {pokemon.sprites.front_default && (
            <img
              className='cardImage'
              src={pokemon.sprites.front_default}
              alt='back_default'
            />
          )}
          {pokemon.sprites.back_default && (
            <img
              className='cardImage'
              src={pokemon.sprites.back_default}
              alt='front_default'
            />
          )}
        </div>
        <div>
          <p className='cardTitle'>Types</p>
          <div>
            {pokemon.types.map(element => {
              return (
                <p
                  key={element.slot}
                  onClick={() => this.handleTypeChange(element.type.name)}
                  className='cardType'
                >
                  {element.type.name}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Pokemon;
