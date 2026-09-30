import { Component } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MyButton from "./myButton";




class Classcomp extends Component{
    render()
    {
        return(
        
          <SafeAreaView>
            <MyButton/>
            <Text>
                
                Hello Raj 

               
            </Text>
          </SafeAreaView>

       );

    }
}

export default Classcomp;