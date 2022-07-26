import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'

const ChooseScreen = ({ navigation }) => {
  const categories = [
    { id: 1, title: 'Hangi Filmi İzlesem?', screenName: 'MovieScreen' },
    { id: 2, title: 'Hangi Diziyi İzlesem?', screenName: 'TvScreen' },
    { id: 3, title: 'Ne Yesem?', screenName: 'FoodScreen' },
    { id: 4, title: 'Ne İçsem?' },
    { id: 5, title: 'Nereye Gitsem?' },
    { id: 6, title: 'Ne Giysem?' },
    { id: 7, title: 'Ne Dinlesem?' },
    { id: 8, title: 'Ne Okusam?' },

  ]
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.category}
              onPress={() => {
                navigation.navigate(item.screenName)
              }
              }
            >
              <Text style={styles.categoryText}>{item.title}</Text>
            </TouchableOpacity>
          )
        }
        }
        keyExtractor={item => item.id.toString()}
        numColumns={2}
      />

    </SafeAreaView>
  )
}

export default ChooseScreen

const styles = StyleSheet.create({
  category: {
    backgroundColor: '#F4B942',
    width: '40%',
    height: 100,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '5%',
    marginRight: '5%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,


  },
  container: {
    flex: 1,
    backgroundColor: '#4059AD',
  }

})