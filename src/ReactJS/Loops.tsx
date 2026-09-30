import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Loops = () => {
    const userName=['anil','sam','peter','bruce']
    const userData=[
        {
            name:'Anil',
            age:'29',
            id:1

        },
        {
            name:'sam',
            age:'34',
            id:2

        },
        {
            name:'tim',
            age:'20',
            id:3

        },
        {
            name:'sam',
            age:'35',
            id:4

        },
        {
            name:'Anil',
            age:'38',
            id:5,

        },
    ]
    userName.map((numm)=>{console.log(numm)});



  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>hii raj</Text>
       
      {userData.map((num)=>
   
      {
           return(
            <View>
        <Text style={{fontSize:22}}>{num.id}</Text>
         <Text style={{fontSize:22}}>{num.name}</Text>
           <Text style={{fontSize:22}}>{num.age}</Text>
         

         
         </View>
        

      )})}
      <Text>hii rishi</Text>
    </View>
  );
}

export default Loops

const styles = StyleSheet.create({})