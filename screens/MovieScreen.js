import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    Image,
    FlatList,

}
    from 'react-native'
import React, { useState, useEffect } from 'react'

const MovieScreen = () => {

    const [randomNumber, setRandomNumber] = useState(0)
    const [page,setPage] = useState(1)
    const [movie, setMovie] = useState('')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [imagePath, setImagePath] = useState('')
    const [movieName,setMovieName] = useState('')
    const [movieOverview,setMovieOverview] = useState('')


    const getMovies = () => {
        const api = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=e220711f242958d8cfbf574f69fe0c1a&language=tr-TR&sort_by=popularity.desc&include_adult=true&include_video=false&page=${page}&with_genres=18&vote_count.gte=1000`)
            .then(response => response.json())
            .then(json => {
                setMovieName(json.results[randomNumber].title)
                setImagePath(json.results[randomNumber].poster_path)
                setMovieOverview(json.results[randomNumber].overview)
            }
            )
            .catch(error => {
                setError(true)
                setLoading(false)
                console.log(error);
            })
    }




    useEffect(() => {
        getMovies(randomNumber)
    }
    ,[1000])

    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: `https://image.tmdb.org/t/p/w500${imagePath}` }}
            />
            <Text style={styles.tvName}>
                {movieName}
            </Text>
            <Text
            numberOfLines={5}
            ellipsizeMode="tail"
            style={styles.overview}>
                {movieOverview}
            </Text>
          
            <TouchableOpacity
                style={styles.randomButton}
                onPress={() => {
                    setRandomNumber(Math.floor(Math.random() * 25))
                    setPage(Math.floor(Math.random() * 15))
                    setLoading(true)
                    setError(false)
                    getMovies(randomNumber)
                }
                }
            >
                <Text>Rastgele</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default MovieScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4059AD',
        alignItems: 'center',
        justifyContent: 'center',
    },

    image: {
        width: '75%',
        height: '60%',
        resizeMode: 'cover',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',

    },
    randomButton: {
        backgroundColor: '#F4B942',
        width: '75%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        marginTop:50

    },
    tvName: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        margin: 10

    },
    overview:{
        marginLeft:10,
        marginBottom:10,
        color:'#97D8C4'        
    }

})