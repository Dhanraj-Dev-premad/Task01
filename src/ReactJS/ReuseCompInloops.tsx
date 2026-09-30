import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HelpLoop from './HelpLoop';


const ReuseCompInloopsops = () => {
   
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
    



  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>hii raj</Text>
        {
        userData.map((no)=>
        (
                <HelpLoop data={no}/>
        )
        )}

       
    
      
    </View>
  );
}

export default ReuseCompInloopsops

const styles = StyleSheet.create({})




