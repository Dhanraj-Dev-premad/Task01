import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const movies = [
  {
    id: '1',
    title: 'Avengers: Endgame',
    year: 2019,
    genre: 'Action',
    rating: 8.4,
    image: 'https://picsum.photos/id/1011/300/450',
  },
  {
    id: '2',
    title: 'Inception',
    year: 2010,
    genre: 'Sci-Fi',
    rating: 8.8,
    image: 'https://picsum.photos/id/1015/300/450',
  },
  {
    id: '3',
    title: 'Interstellar',
    year: 2014,
    genre: 'Sci-Fi',
    rating: 8.7,
    image: 'https://picsum.photos/id/1016/300/450',
  },
  {
    id: '4',
    title: 'The Dark Knight',
    year: 2008,
    genre: 'Action',
    rating: 9.0,
    image: 'https://picsum.photos/id/1020/300/450',
  },
  {
    id: '5',
    title: 'Spider-Man',
    year: 2021,
    genre: 'Superhero',
    rating: 8.2,
    image: 'https://picsum.photos/id/1024/300/450',
  },
  {
    id: '6',
    title: 'Joker',
    year: 2019,
    genre: 'Drama',
    rating: 8.3,
    image: 'https://picsum.photos/id/1025/300/450',
  },
  {
    id: '7',
    title: 'Titanic',
    year: 1997,
    genre: 'Romance',
    rating: 7.9,
    image: 'https://picsum.photos/id/1035/300/450',
  },
  {
    id: '8',
    title: 'Avatar',
    year: 2009,
    genre: 'Adventure',
    rating: 7.8,
    image: 'https://picsum.photos/id/1043/300/450',
  },
  {
    id: '9',
    title: 'The Matrix',
    year: 1999,
    genre: 'Sci-Fi',
    rating: 8.7,
    image: 'https://picsum.photos/id/1062/300/450',
  },
  {
    id: '10',
    title: 'John Wick',
    year: 2014,
    genre: 'Action',
    rating: 7.4,
    image: 'https://picsum.photos/id/1074/300/450',
  },
];

const FlatListCom1 = () => {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.main}>

        


        {/* VERTICAL FLATLIST */}
        <View style={styles.mainbox2}>

          <FlatList
            data={movies}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={()=>(
        <View style={styles.mainbox1}>

          <FlatList
            horizontal
            data={movies}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.box1}>

                <View style={styles.info}>
                  <Text style={styles.text}>
                    {item.id}
                  </Text>

                  <Text style={styles.title}>
                    {item.title}
                  </Text>

                  <Text style={styles.text}>
                    {item.year}
                  </Text>

                  <Text style={styles.text}>
                    {item.genre}
                  </Text>

                  <Text style={styles.text}>
                    ⭐ {item.rating}
                  </Text>
                </View>

                <View style={styles.imageContainer}>
                  <Image
                    style={styles.image}
                    source={{ uri: item.image }}
                  />
                </View>

              </View>
            )}
          />

        </View>
            )}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.box2}>

                <View style={styles.info}>
                  <Text style={styles.text}>
                    {item.id}
                  </Text>

                  <Text style={styles.title}>
                    {item.title}
                  </Text>

                  <Text style={styles.text}>
                    {item.year}
                  </Text>

                  <Text style={styles.text}>
                    {item.genre}
                  </Text>

                  <Text style={styles.text}>
                    ⭐ {item.rating}
                  </Text>
                </View>

                <View style={styles.imageContainer}>
                  <Image
                    style={styles.image}
                    source={{ uri: item.image }}
                  />
                </View>

              </View>
            )}
          />

        </View>

      </View>

    </SafeAreaView>
  );
};

export default FlatListCom1;


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  main: {
    flex: 1,
  },

  // Horizontal section
  mainbox1: {
    height: 350,
    width: '100%',
  },

  box1: {
    height: 350,
    width: 400,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e2dada',
    marginRight: 10,
  },

  // Vertical section
  mainbox2: {
    flex: 1,
    width: '100%',
  },

  box2: {
    height: 350,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e2dada',
    marginBottom: 10,
  },

  info: {
    padding: 20,
    height: 300,
    width: 180,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 5,
  },

  text: {
    fontSize: 18,
    marginVertical: 3,
  },

  imageContainer: {
    height: 300,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  image: {
    height: 300,
    width: 200,
  },

});