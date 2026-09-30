import { SafeAreaView,  StyleSheet,  Text } from "react-native"

const StyleSheetStyle =()=>
{
    return(

        <SafeAreaView style={styles.container} >
            <Text>
                Learning StyleSheet
            </Text>

        </SafeAreaView>
    );
};
export default StyleSheetStyle;
const styles =StyleSheet.create(

    {container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f5d2d2'

    },

    });