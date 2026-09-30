import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const ArrayUpdating = () => {
    const [data , setData]=useState([
        'Raj','Rishi','Loki','Sourbh'
    ])  

    const[data2,setData2]=useState(
        [
            {name:'rishi', age:'22'},
            {name:'raj', age:'21'},
            {name:'loki', age:'23'},
        ])


    const handleUser=(name)=>{
        
        data[data.length-1]=name
        console.log(data);
        setData([...data])
    }

    const handleAge=(age)=>{
        
        data2[data2.length-1].age=age
        console.log(data2); 
        setData2([...data2])
    }
    
  return (
    <View style={{flex:1,gap:10, marginTop:100,alignItems:'center'}}>
          <TextInput onChangeText={(name)=>handleUser(name)} placeholder='Enter User age' placeholderTextColor={'black'}  keyboardType='default' style={{width:300, height:55, backgroundColor:'pink'}}/>
        {
            data.map((item)=>
                (
                    <Text style={{fontSize:25}}>{item}</Text>
                    
                )
                

                )
            
                
             

        }
        <View style={{height:5,width:400, backgroundColor:'black'}}></View>
            <TextInput onChangeText={(age)=>handleAge(age)} placeholder='Enter User name' placeholderTextColor={'black'}  keyboardType='default' style={{width:300, height:55, backgroundColor:'pink'}}/>
        
        {
            data2.map((item)=>
                (
                    <View style={{flexDirection:'row', gap:20}}>
                    <Text style={{fontSize:25}}>{item.name}</Text>
                    <Text style={{fontSize:25}}>{item.age}</Text>
                    </View>
                    
                )
                

                )
            
                
             

        }
   
    </View>
  )
}

export default ArrayUpdating

const styles = StyleSheet.create({})