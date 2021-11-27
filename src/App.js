import React, { Component } from 'react';
import Personagens from './Personagens'
import styles from './Layout/Personagens.module.css'

class App extends Component {

  state = {
    filmes: [],
  }

  async componentDidMount() {
    const response = await Personagens.get('');
      console.log(response.data)

    this.setState({ filmes: response.data });
  }

  render() {

    const { filmes } = this.state;

    return (
      <div className={styles.CardList} > 
        
        {filmes.map(filme => (
          <card  key={filme.id}>

              <div className={styles.Card}>

                <p > <img className={styles.img} src={filme.img} /></p>

                <h2> {filme. name}</h2>

                <p> {filme. description}</p>

              </div>


            </card>
          ))};

        
      </div>  
      
      
     
      
    );
  };
};

export default App;
