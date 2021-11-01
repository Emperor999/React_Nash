import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Pokemon.css'

const Pokemonpage = () => {
    const cancelToken =axios.CancelToken;
    const[pokeid,setPokeid] =useState(3)
    const[pokemon,setPokemon] =useState({
        id:null,
        name:null,
        weight:null,
        frontImage:null,
        backImage:null
    });
        useEffect( () => {
            let cancel;
            axios({
                method:'GET',
                url:`https://pokeapi.co/api/v2/pokemon/${pokeid}`,
                cancelToken: new cancelToken(c =>{
                    cancel = c;
                })
            }).then(response =>{
                setPokemon({
                  id: response.data.id,
                  name:response.data.name,
                  weight:response.data.weight,
                  frontImage: response.data.sprites.front_default,
                  backImage: response.data.sprites.back_default  
                })
            })
        },[pokeid]
        );
    
    return (
        <div>
        <div>ID:{pokemon.id}</div>
        <div>Name:{pokemon.name} </div>
        <div>WEIGHT:{pokemon.weight} </div>
        <div>
        <img src={pokemon.frontImage} alt=""/>
        <img src={pokemon.backImage} alt=""/>
        </div>
        <div>
            <button className ="button__pokemon" onClick ={
                () => setPokeid(pokeid-1)
            }>Previous</button>
            <button className ="button__pokemon" onClick ={
                () => setPokeid(pokeid+1)
            }>Next</button>
        </div>
        </div>
       
    );
};

export default Pokemonpage;