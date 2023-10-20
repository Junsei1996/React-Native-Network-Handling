import { Text, View } from "react-native"
import MoviesList from "./MoviesList"
import { useEffect, useState } from "react";
import NetworkHandler from "../utils/NetworkHandler";

function ApiHandler() {

    const [loading, setLoading] = useState(false);
    const [movies , setMovies] = useState([]);
    const ApiHandler = NetworkHandler.getInstance();

    useEffect(() => {
        async function getMovies(){
            setLoading(true)
            const response = await ApiHandler.getMovies()
            try{
                if(response.code === "200"){
                    setMovies(response.data)
                }else{
                    console.log(response.errorMsg);
                }
            }catch(error){
                console.log(error)
            }
            setLoading(false)
        }
        getMovies()
    }, [])

    if(loading){
        return (
            <View style={{ flex: 1 }}>
                <Text>Loading</Text>
            </View>
        )
    }
    else{
        return (
            <View style={{ flex: 1 }}>
                <MoviesList movies={movies} />
            </View>
        )
    }
}

export default ApiHandler