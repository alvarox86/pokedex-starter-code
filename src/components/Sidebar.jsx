import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { CircularProgress } from "@mui/material"



function Sidebar() {

  const [allPokemon, setAllPokemon] = useState(null)

  useEffect(() => {

    /* fetch("https://pokeapi.co/api/v2/pokemon")
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setAllPokemon(data.results) 
    }) */

    axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then((response)=>{
      setAllPokemon(response.data.results)
    })
    .catch((error)=>{
      console.log(error)
    })

  }, [])

  if (allPokemon === null){
    return  <CircularProgress color="inherit"  />
  }

  //-----------------------------------
  return (
    <nav className="sidebar">
      
      {/* {/* example of 3 links 
      <Link to={"/"}>bulbasaur</Link>
      <Link to={"/"}>charmander</Link>
      <Link to={"/"}>squirtle</Link> */}

      {allPokemon.map((eachPokemon) => {
        return  <Link key={eachPokemon.name} to={`/poke/${eachPokemon.name}`}>{eachPokemon.name}</Link>         
      })}

    </nav>
  )
}

export default Sidebar