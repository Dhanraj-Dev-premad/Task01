// know we are doing same thing with usetransition
import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState, useTransition } from 'react'


// we can do this by using states 

const UseTransitionHooks = () => {
    const [pending,startTransition]=useTransition();

  

    const handleButton=()=>

        {
            startTransition(async()=>
                {
                    await new Promise(res=>setTimeout(res,2000))

                })
           
           
           
        }

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Button  disabled={pending} onPress={handleButton}  title='click'/>   
    </View>
  )
}

export default UseTransitionHooks

const styles = StyleSheet.create({})































// import { Button, StyleSheet, Text, View } from 'react-native'
// import React, { useState } from 'react'


// // we can do this by using states 

// const UseTransitionHooks = () => {

//     const [pending,setPending]=useState(false);

//     const handleButton=async()=>
//         {
//             setPending(true)
//             console.log('clicked')
//            await new Promise(res=>setTimeout(res,1000))
//             //
//             setPending(false)
//         }

//   return (
//     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//           <Button  onPress={handleButton} disabled={pending} title='click'/>   
//     </View>
//   )
// }

// export default UseTransitionHooks

// const styles = StyleSheet.create({})