

import { SafeAreaView } from "react-native-safe-area-context";
import MyButton from "./myButton";
import { Alert } from "react-native";




const FunctionalComponents= ()=>{
   
        return(
        
          <SafeAreaView style={{
            flex:1
          }}>
            <MyButton title={'click me'} 
             onPress={()=>{
                Alert.alert('Hello Raj');
            
            }}
            
            />
            
          </SafeAreaView>

       );

    
};

export default FunctionalComponents;