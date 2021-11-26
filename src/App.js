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
      <section> 

          <h1 className={styles.navbar}>Psychonauts Ninjas Warrios</h1>

          <div className={styles.list} >
            
            {filmes.map(filme => (

              <ul>    


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

                </ul> 
            ))}
            </div>
      </section> 
    );
  };
};

export default App;
