import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomCheckBox from '../MainComp/CustomCheckBox'

const CheckBox = () => {
    const [checkBoxVal ,SetcheckBox]=useState(false)
    console.log(checkBoxVal, "checkvalue vaue");
    

  return (
    <SafeAreaView style={{flex:1}}>
        <View style={styles.main}>

            <View>
                <CustomCheckBox label='man' value={checkBoxVal} onChange={(value)=>{
                    console.log(value);
                    SetcheckBox(!value)
                
                }}/>
                

            </View>
         
            

      
      


    </View>

    </SafeAreaView>
    
  )
}

export default CheckBox

const styles = StyleSheet.create(
    {main:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
        
    }

    })