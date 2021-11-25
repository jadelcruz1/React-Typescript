import React, { Component } from 'react';
import api from './api';

class App extends Component {

  state = {
    filmes: [],
  }

  async componentDidMount() {
    const response = await api.get('');
      console.log(response.data)

    this.setState({ filmes: response.data });
  }

  render() {

    const { filmes } = this.state;

    return (
      <div>
        <h1>Listar os Personagens</h1>
        {filmes.map(filme => (
          <li key={filme}>

              <img src={filme.img} />            
            
            <p>
              <strong></strong>
              {filme. name}
            </p>

            <p>
              {filme. gender}
            </p>

            <p>
              {filme. description}
            </p>

           

          </li>
        ))}
      </div>
    );
  };
};

export default App;
