import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'

const FoodScreen = () => {
    const [foodName, setFoodName] = useState('')
    const [foodImage, setFoodImage] = useState('')
    const [foodDescription, setFoodDescription] = useState('')

    //get foods from api
    const getFoods = () => {
        //Open Food Facts fast food api
        const api = 'https://world.openfoodfacts.org/api/v0/product/';
        //Get random food
        const randomFood = Math.floor(Math.random() * 1000000);
        //Get food from api
        const apiFood = fetch(`${api}${randomFood}.json`)

            .then(response => response.json())
            .then(json => {
                //Get food name
                setFoodName(json.product.product_name)
                //Get food image
                setFoodImage(json.product.image_url)
                //Get food description
                setFoodDescription(json.product.generic_name)
                console.log(json);
            }
            )
            .catch(error => {
                console.log(error);
            }
            )

    }
    return (
        <View>
            <Text>FoodScreen</Text>
        </View>
    )
}

export default FoodScreen

const styles = StyleSheet.create({})