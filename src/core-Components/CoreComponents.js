import { Alert, Button, FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"


const CoreComponents= ()=>
    {
        return(
            <ScrollView
            onLayout={(event)=>
                {
                    console.log('View size', event.nativeEvent.layout);

                }} 
            style={
                    {
                         flex:1,
                         backgroundColor:'#100000',
                         marginTop:20,
                         marginLeft:20,
                    }}>



                <Text style={
                    {
                        
                        fontSize:20,
                         color:'red',
                         textAlign:'center',
                         width:220,
                         height:200

                    }}
                   
                
                >
                    Raj Singh Shekhawat 
                   
                    <Image source={{uri:"https://i.pinimg.com/474x/68/2b/60/682b604d466185e1a2368aadd85c09cc.jpg"}} 
                    
                    style={
                        {
                            
                            width:500,
                            height:300}}
                    resizeMode="contain"
                
                    
                    />
  

                </Text>

                <TextInput placeholder="Enter Email"

                    keyboardType="number-pad"
                    value=''
                    onChangeText={txt=>{}}
                
                style={
                    {
                        color:'red',
                        backgroundColor:"#f5c3c3",
                        fontSize:40,
                        width:300,
                        height:200,
                        borderWidth:1}}
                
                
                />


                <TouchableOpacity
                style={
                    {
                        width:200,
                        height:50,
                        backgroundColor:'orange',
                        justifyContent:'center',
                        alignItems:'center'

                    }}
                    onPress={()=>
                        {
                            Alert.alert("Clicked")

                        }}
                >
                    <Text>
                        Login
                    </Text>
                </TouchableOpacity>

                <Button onPress={()=>{}} color="red "title="Sign" />

                <FlatList data={[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]} renderItem={({item,index})=>
                    {
                        return(
                            <View style={{width:300,height:50,justifyContent:'center',alignItems:'center', backgroundColor:'#a9eea6', margin:10}}>
                                <Text>
                                    {'Item'+(index +1)}
                                </Text>
                               

                            </View>
                           
                        );
                        

                    }}/>   

                



        



            </ScrollView>

            
            
            
        );
    }

    export default CoreComponents;