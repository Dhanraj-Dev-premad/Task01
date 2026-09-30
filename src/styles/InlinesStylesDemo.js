import { SafeAreaView, Text } from "react-native"

const InlineStyle =()=>
{
    return(
        <SafeAreaView
        
        View style={{
            flex:1,
            justifyContent:'center',
            alignItems: 'center',
            backgroundColor:'white'

        }} >
            <Text style={{
                fontSize:40 }}>
                InlineStyle Demo
            </Text>
        </SafeAreaView>
    ); 

};

export default InlineStyle;