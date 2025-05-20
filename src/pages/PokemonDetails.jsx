import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { CircularProgress } from "@mui/material"

function PokemonDetails() {
    const navigate = useNavigate()
    const params = useParams()

    const [details, setDetails] = useState(null)
    
    useEffect(() => {
        getData()
    }, [params])

    const getData = async () => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`)
            setDetails(response.data)
        }
        catch(error){
            navigate("/error")
        }
    }

    if(details === null){
        return <CircularProgress color="inherit"  />
    }

  return (
    <div>
        <h1>{details.name}</h1>    
        <img src={details.sprites.front_default} alt="Pokemon" width={"150px"} />

        <h3>Peso {details.weight}</h3>
        <h3>Altura {details.height}</h3>
    </div>
  )
}

export default PokemonDetails