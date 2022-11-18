import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/header/index';
import Search from './components/search/index';
// import Card from './components/card/index';
import RepoResults from './components/card/index';
import './styles/App.css';
// I went for a css reset to remove browser constraints
import './styles/_reset.css';

import repos from './data/repos';


const App = () => {
  // // valeur du champ de recherche
  // const [search, setSearch] = useState('');
  // const [repos, setRepos] = useState([]);
  // const [nbRepos, setNbRepos] = useState(0);
  // const [total, setTotal] = useState(0);
  // // indique s'il faut afficher le message d'erreur
  // const [displayError, setDisplayError] = useState(false);

  // const makeSearch = () => {
  //   axios.get(`https://api.github.com/search/users?q=${search}`)
  //     .then((response) => {
  //       // console.log(response);
  //       setRepos(response.data.items);
  //       setNbRepos(response.data.total_count);

  //       // on enregistre le nombre total de résultats
  //       setTotal(response.data.total_count);

  //       // on enlève la précédente erreur éventuelle
  //       setDisplayError(false);
  //     })
  //     .catch((error) => {
  //       setDisplayError(true);
  //     })
  //     .finally(() => {
  //     });
  // };

  return (


    <div className="app">
      <Header />
      {/* <Search search={search} updateSearchValue={setSearch} manageSubmit={makeSearch} /> */}
      <Search />
      <RepoResults results={repos.items} />
    </div>
  );
}

export default App;
