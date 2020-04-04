import React from 'react';
import '../assets/styles/components/Search.scss';

const Search = ()=>{
    return(
    <center>
        <div className='Search'>
          <section class="main">
            <h2 class="main__title">¿Qué quieres ver hoy?</h2>
            <input type="text" class="input" placeholder="Buscar..." />
            </section>
        </div>
        </center>
    );
};

export default Search;