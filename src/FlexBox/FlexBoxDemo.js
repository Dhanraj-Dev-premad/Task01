import {  View } from "react-native";

const data=
[
    "demon", 'rishi, i am, good'," hii raj, how are you"," very very long text"

];

const FlexBoxDemo=() => 
{
    return(
    <View style={{ flex:1,backgroundColor:'white',  alignItems:'center'}}>
       
        <View style={
            {
                width:100, 
                height:100, 
                backgroundColor:'orange',
            }}>

        </View>
         <View style={
            {
                width:100, 
                height:100, 
                backgroundColor:'green',
            }}>

        </View>

         <View style={
            {
                width:100, 
                height:100, 
                backgroundColor:'red',
            }}>

        </View>

         <View style={
            {
                width:100, 
                height:100, 
                backgroundColor:'blue',
            }}>

        </View>

    
    </View>

     
    );
};

export default FlexBoxDemo;