import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';


const data=['apple','banana','mango','orange'];


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
const FlatListCom = () => {
  return (
  <SafeAreaView style={{flex:1, backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
    <View style={styles.main}>

    
           <View style={styles.mainbox2}>
            
              <FlatList  
                  
                    data={movies} 
                    ListHeaderComponent={()=>(
                      <View style={styles.mainbox1}>
            
          

              <FlatList   
                    horizontal
                    data={movies} 
                     renderItem={({ item }) => (
                <>
        
                  <View style={styles.box1}>
                      <View style={{padding:20,height:300, width:180,justifyContent:'center',alignItems:'flex-start'}}>
                         <Text style={{ fontSize: 28, }}>{item.id}</Text>
                         <Text style={{ fontSize: 28, }}>{item.title}</Text>
                         <Text style={{ fontSize: 28, }}>{item.year}</Text>
                         <Text style={{ fontSize: 28, }}>{item.genre}</Text>
                         <Text style={{ fontSize: 28, }}>{item.rating}</Text>
               
                       </View>
                       <View style={{height:300,width:220, justifyContent:'center',alignItems:'center', margin:10}}>
                         <Image style={{height:300,width:220, }} source={{uri:(item.image)}}/>

                       </View>

            

                  </View>


          
          
                </>

    
   
                 )}

                keyExtractor={(item,index)=>index.toString()}/>

          </View>
                    )}
                     renderItem={({ item }) => (
                <>
        
                  <View style={styles.box2}>
                      <View style={{margin:18,height:300, width:180,justifyContent:'center',alignItems:'flex-start'}}>
                         <Text style={{ fontSize: 28, }}>{item.id}</Text>
                         <Text style={{ fontSize: 28, }}>{item.title}</Text>
                         <Text style={{ fontSize: 28, }}>{item.year}</Text>
                         <Text style={{ fontSize: 28, }}>{item.genre}</Text>
                         <Text style={{ fontSize: 28, }}>{item.rating}</Text>
               
                       </View>
                       <View style={{height:300,width:220,justifyContent:'center',alignItems:'center'}}>
                         <Image style={{height:300,width:220, }} source={{uri:(item.image)}}/>

                       </View>

            

                  </View>


          
          
                </>

    
   
                 )}

                keyExtractor={(item,index)=>index.toString()}/>

          </View>    
       

        </View>
          
          
          

        
      

    
      
      

    </SafeAreaView>
  
  )
}

export default FlatListCom;

const styles = StyleSheet.create(
  {
    main:{flex:1, justifyContent:'space-around',alignItems:'center'},


    mainbox1:{height:350,width:'100%', },
    box1:{height:350,width:400, flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'#e2dada'
    },
    


    mainbox2:{height:350,width:'100%', },
    box2:{height:350,width:400, flexDirection:'row',
      justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'#e2dada'
    
    },

  })