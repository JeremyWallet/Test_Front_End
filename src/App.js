import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/header/index';
import Search from './components/search/index';
// import Card from './components/card/index';
import RepoResults from './components/card/index';
import './styles/App.css';
// I went for a css reset to remove browser constraints
import './styles/_reset.css';

// import repos from './data/repos';


const App = () => {
  // value of the search field, empty to start with
  const [search, setSearch] = useState('');

  // If I need a console.log I do it this way, otherwise just setSearch as the value is the same
  // Retrieves the value for transmission to the state
  const updateSearch = (newValue) => {
    console.log('Je teste l\'input');
    setSearch(newValue);
  };

  // Repositories to be displayed, an empty table because no repo to display
  const [repos, setRepos] = useState([]);
  const [nbRepos, setNbRepos] = useState('');

  // const [total, setTotal] = useState(0);
  // // indique s'il faut afficher le message d'erreur
  // const [displayError, setDisplayError] = useState(false);

  // By habit I used Axios, but I should have used the fetch method because I didn't need a library
  const reSearch = () => {
    console.log('I test the search : fulll');
    axios.get(`https://api.github.com/search/users?q=${search}`)
      .then((response) => {
        console.log(response);
        setRepos(response.data.items);
        setNbRepos(response.data.total_count);

        //       // on enregistre le nombre total de résultats
        //       setTotal(response.data.total_count);

        //       // on enlève la précédente erreur éventuelle
        //       setDisplayError(false);
      })
      .catch((error) => {
        console.log(error);
        //       setDisplayError(true);
      })
      .finally(() => {
      });
  };

  return (


    <div className="app">
      <Header />
      {/* <Search search={search} updateSearchValue={setSearch} manageSubmit={reSearch} /> */}
      <Search search={search} updateSearchValue={updateSearch} manageSubmit={reSearch} />
      <RepoResults results={repos} count={nbRepos} />
    </div>
  );
}

export default App;
