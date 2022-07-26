import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'

const TvScreen = () => {
    const [randomNumber, setRandomNumber] = useState(1)
    const [tvName, setTvName] = useState('')
    const [tvOverview, setTvOverview] = useState('')
    const [loading, setLoading] = useState(true)
    const [imagePath, setImagePath] = useState('')
    const [page, setPage] = useState(1)

    const [error, setError] = useState(false)


    const getTv = () => {
        
        const api = fetch(`https://api.themoviedb.org/3/discover/tv?api_key=e220711f242958d8cfbf574f69fe0c1a&language=tr-TR&sort_by=popularity.desc&include_adult=true&include_video=false&page=${page}&with_genres=18&vote_count.gte=1000`)
            .then(response => response.json())
            .then(json => {
                setTvName(json.results[randomNumber].name)
                setTvOverview(json.results[randomNumber].overview)
                setImagePath(json.results[randomNumber].poster_path)
                setLoading(false)

            }
            )
            .catch(error => {
                setError(true)
                setLoading(false)
                console.log(error);
            }
            )
    }
    useEffect(() => {
        getTv(randomNumber)
    }
        , [1000])
    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: `https://image.tmdb.org/t/p/w500${imagePath}` }}
            />
            <Text style={styles.tvName}>
                {tvName}
            </Text>
            <Text
                numberOfLines={5}
                ellipsizeMode="tail"
                style={styles.overview}>
                {tvOverview}
            </Text>

            <TouchableOpacity
                style={styles.randomButton}
                onPress={() => {
                    setRandomNumber(Math.floor(Math.random() * 25))
                    setPage(Math.floor(Math.random() * 10))
                    setLoading(true)
                    setError(false)
                    getTv()
                    // getMovies(randomNumber)
                }
                }
            >
                <Text>Rastgele</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default TvScreen

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
        borderColor: '#fff'
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
        borderColor: '#fff'

    },
    tvName: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        margin: 10

    },
    overview: {
        marginLeft: 10,
        marginBottom: 10,
        color: '#97D8C4'
    }

})