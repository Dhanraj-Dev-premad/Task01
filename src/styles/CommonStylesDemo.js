import { SafeAreaView,    Text } from "react-native"
import { styles } from './CommonStyles';
const CommonStyleDemo =()=>
{
    return(

        <SafeAreaView style={styles.container} >
            <Text style={styles.text}>
                Learning React-Native 
            </Text >
            <Text style={styles.text}>
                Demo Class
            </Text>

        </SafeAreaView>
    );
};
export default CommonStyleDemo;