import { View, Text, Pressable, Image, Modal, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const FigmaLogin = () => {
    const [loginModalVisible , setLoginModalVissible] = useState(false)
    const [signUpModalVisible , setSignUpModalVisible] = useState(false)

    const handleLoginPress  = ()=>{

    }

    const handleSignUpPress = ()=>{

    }

  return (

    <SafeAreaView style={{flex:1}}>
       <KeyboardAvoidingView behavior='padding' style={{flex:1}}>
        
        
        <View style={{flex:1, justifyContent:'flex-start', alignItems:'center', backgroundColor:'black',padding:10}}>
            <View style={{ height:400, width:'100%',justifyContent:'center', alignItems:'center'}}>
                <View style={{ height:'100%', width:'100%'}}>

                    <Image style={{ height: '100%', width: '100%' }} source={require('./Illustration Picture.png')}  resizeMode="cover"/>

                   

                </View>
                {/* for image */}
            </View>


           

            <View style={{ height:140, width:'100%', justifyContent: 'center', alignItems: 'center'}}>
                
                <View style={{ height:48, width:'100%',justifyContent: 'center', alignItems: 'center'}}>

                    <Text style={{ fontSize: 40, color: '#EF5858', marginBottom: 8 }}>
                      Welcome</Text>
                  {/* for welcomw and text */}
               

                </View> 


                <View style={{height:100, width:'100%',justifyContent: 'center', alignItems: 'center'}}>
                    
                    <View style={{ height:91, width:'78%',justifyContent: 'flex-end', alignItems: 'center'}}>
                        
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#F4F4F4', marginBottom: 8 }}>
                            Welcomem jnkev kejrgnij ojobj khtgb nihr etng ihtrg eigi fhbbfrb tfbff fbbh hjebfhjw 
                        </Text>

                    </View>
                    

                </View>  

 
            </View>    
               
            


            <View style={{ height:230, width:'100%', justifyContent: 'center', alignItems: 'center'}}>

                <View style={{ height: 100, width: '100%',justifyContent: 'center', alignItems: 'center' }}>

                    <View style={{ height: 99, width: '85%' }}>

                        <Pressable onPress={() => setLoginModalVissible(!loginModalVisible)}  style={{ height: 70,  width: '100%',  backgroundColor: '#FFDE69',  justifyContent: 'center',  alignItems: 'center',  borderRadius: 8}}>
                            <Text style={{ fontWeight:'bold',color: 'black', fontSize: 18 }}>
                                     Login
                             </Text>
                        </Pressable>

                    </View>

                    

                </View>

                <View style={{ height: 100, width: '100%',justifyContent: 'center', alignItems: 'center' }}>
                    
                    <View style={{ height: 99, width: '85%' }}>

                        <Pressable onPress={() =>setSignUpModalVisible(!signUpModalVisible)}  style={{ height: 70,  width: '100%',  backgroundColor: 'black',  justifyContent: 'center',  alignItems: 'center',borderWidth:2,borderColor:'#FFDE69' , borderRadius: 8}}>
                            <Text style={{fontWeight:'bold', color: '#FFDE69', fontSize: 22 }}>
                                     Create Account
                             </Text>
                        </Pressable>

                    </View>

                    

                </View>
                {/* for creat account and login */}

            </View>


            
            <View style={{ height:85, width:'100%',justifyContent: 'flex-end', alignItems: 'center', alignSelf:'flex-end'}}>
                <Text style={{ fontSize: 20, fontWeight: '200', color: '#FFDE69', marginBottom: 8 }}>
                    All Right Reserved @2026
                </Text>

            </View >
                 {/* and  for last @2026 */}


        </View>


        


         <Modal visible={signUpModalVisible}
        transparent
        onRequestClose={()=>{ setSignUpModalVisible(!signUpModalVisible)}} >


        {/* <Modal visible={loginModalVisible} 
         transparent
        onRequestClose={()=>{setLoginModalVissible(!loginModalVisible) }} > */}
           {/* login page */}

           <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1 }}
           >

            <Pressable style={styles.overlay} >
                <Pressable style={styles.bottomSheet} onPress={(e) => e.stopPropagation()} > {/* Bottom Sheet Content */} 
                  

                    
                
                     <View style={styles.main}>
                         {/* <Image style={{ position:'absolute',height:40,width:40, top:5,right:5, }} source={require('./Close (1).png')}  resizeMode="cover"/> */}
                         <Pressable
                              onPress={() => setSignUpModalVisible(false)}
                              style={{ position: 'absolute',top: 5, right: 5,zIndex: 10,}}>
                            <Image style={{ height: 40,width: 40, }}source={require('./Close (1).png')}resizeMode="cover" />
                        </Pressable>

                        <View  style={styles.WText}>
                            <Text style={styles.Hello}>
                                Hello...
                            </Text>
                            <Text style={styles.Register}>
                                Register
                            </Text>

                        </View>

                        <View style={styles.InputText}>

                            <View style={{position:'relative', height:75,borderWidth:3,borderColor:'#222', borderRadius:18, justifyContent:'center'}}>
                                <Text style={{ position:'absolute',top:-10,left:25, backgroundColor:'#FFECAA', fontSize:16,color:'black'}}>
                                    username/email
                                </Text>
                                <TextInput placeholder="info@example.com" placeholderTextColor={'black'}  style={{ color:'black',  fontSize:22,paddingLeft:25}}/>

                                
                              

                            </View>
                             <View style={{   height:75,borderWidth:3,borderColor:'#222', borderRadius:18, justifyContent:'center'}}>
                               
                                <TextInput placeholder="course" placeholderTextColor={'black'}  style={{  color:'black', fontSize:22,paddingLeft:25}}/>

                              

                            </View>
                             <View style={{  height:75,borderWidth:3,borderColor:'#222', borderRadius:18, justifyContent:'center'}}>
                               
                                <TextInput secureTextEntry={true} placeholderTextColor={'black'}  placeholder="password" style={{  color:'black',  fontSize:22,paddingLeft:25}}/>

                                
                              

                            </View>

                             <View style={{  height:75,borderWidth:3,borderColor:'#222', borderRadius:18, justifyContent:'center'}}>
                               
                                <TextInput placeholder="confirm password" placeholderTextColor={'black'} style={{ color:'black',  fontSize:22,paddingLeft:25}}/>

                               
                              

                            </View>

                        </View>

                        <View style={styles.Button}>
                            {/* for register or login page */}
                            <View style={{}}>
                                <Pressable onPress={()=>{{console.log("preseed")}}} style={{ height:65, borderRadius:30,backgroundColor:'black', justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{ color:'#FFDE69', fontSize:33}}>
                                        Register
                                    </Text>
                                    
                                </Pressable>
                                <View style={{ flexDirection:'row',justifyContent:'center',alignItems:'center'
                                }}>
                                    <Text style={{ fontSize:22}}>
                                        Already have account?  
                                    </Text>
                                    <Text style={{ fontSize:22, color:'red',marginLeft:5}}>
                                         Login
                                    </Text>
                                </View>

                            </View>
                            

                       

                        </View>

                    </View>
                
                
                </Pressable>
               



            </Pressable>

           </KeyboardAvoidingView>  

              



        </Modal>



         <Modal visible={loginModalVisible} 
         transparent
        onRequestClose={()=>{setLoginModalVissible(!loginModalVisible) }} >
            <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1 }}
           >

       



             <Pressable style={styles.overlay} >
                
                
                 <Pressable style={styles.bottomSheet1} onPress={(e) => e.stopPropagation()} > {/* Bottom Sheet Content */} 

                     {/* do coding for login */}

                     <View style={styles.main1  }>

                        {/* <Image style={{ position:'absolute',height:40,width:40, top:5,right:5, }} source={require('./Close (1).png')}  resizeMode="cover"/> */}

                         <Pressable
                              onPress={() => setLoginModalVissible(false)}
                              style={{ position: 'absolute',top: 5, right: 5,zIndex: 10,}}>
                            <Image style={{ height: 40,width: 40, }}source={require('./Close (1).png')}resizeMode="cover" />
                        </Pressable>
                        
                        <View  style={styles.WText1}>
                            <Text style={styles.wellcome1}>
                                Welcome Back!!!
                            </Text>
                            <Text style={styles.Login1}>
                                Login
                            </Text>

                        </View>

                        <View style={styles.InputText1}>

                            <View style={{position:'relative', height:75,borderWidth:3,borderColor:'#222', borderRadius:18, justifyContent:'center'}}>
                                <Text style={{ position:'absolute',top:-10,left:25, backgroundColor:'#FFECAA', fontSize:16,color:'black'}}>
                                    username/email
                                </Text>
                                <TextInput placeholder="info@example.com" placeholderTextColor={'black'}  style={{ color:'black',  fontSize:22,paddingLeft:25}}/>

                                
                              

                            </View>
                             
                             <View style={{  height:75,borderWidth:3,borderColor:'#222', borderRadius:18, justifyContent:'center'}}>
                               
                                <TextInput secureTextEntry={true} placeholder="password" placeholderTextColor={'black'}  style={{  color:'black',  fontSize:22,paddingLeft:25}}/>

                                
                              

                            </View>

                            

                        </View>
                        <View style={{height:50, flexDirection:'row', justifyContent:'space-around',alignItems:'center' }}>

                            <View style={{flexDirection:'row'}}>
                                <Image    source={require('./Rectangle 3.png')}  resizeMode="cover"/>
                                <Text style={{fontSize:20, marginRight:110}}>
                                     Remember me
                                </Text>

                            </View>
                            
                            <Text style={{fontSize:18}}>
                                Forget Password?
                            </Text>

                            
                        </View>

                        <View style={styles.Button1}>
                            {/* for register or login page */}
                            <View style={{}}>
                                <Pressable onPress={()=>{{console.log("preseed")}}} style={{ height:65, borderRadius:30,backgroundColor:'black', justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{ color:'#FFDE69', fontSize:33}}>
                                        Login
                                    </Text>
                                    
                                </Pressable>
                                <View style={{ flexDirection:'row',justifyContent:'center',alignItems:'center'
                                }}>
                                    <Text style={{ fontSize:22}}>
                                        Don't have an account?
                                    </Text>
                                    <Text style={{ fontSize:22, color:'red',marginLeft:5}}>
                                         Register
                                    </Text>
                                </View>

                            </View>
                            

                       

                        </View>

                    </View>
                      
                 </Pressable >

                     
               


                
             
          
             </Pressable>


           </KeyboardAvoidingView>  


            

            

        </Modal>

       </KeyboardAvoidingView>  
    </SafeAreaView>
   
  )
}

export default FigmaLogin

 const styles=StyleSheet.create(

    {
        overlay: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'flex-end', }, 
        
        
        bottomSheet: { width: '100%',height:640, backgroundColor: '#FFECAA', borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: 20, },

        main:{ height:610, position:'relative',   justifyContent:'center', alignItems:'center'},

        WText:{ height:90, width:'95%'},
        InputText:{ height:400, width:'95%',justifyContent:'space-evenly'},
        Button:{ height:90, width:'95%'},
        Hello:{fontSize:25,fontWeight:'black'},
        Register:{fontSize:35,fontWeight:'bold' },




        // for login


         overlay1: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'flex-end', }, 
        
        
        bottomSheet1: { width: '100%',height:500, backgroundColor: '#FFECAA', borderTopLeftRadius: 24, borderTopRightRadius: 24, paddingLeft:20,paddingRight:20 },

        main1:{position:'relative', height:490,    justifyContent:'space-evenly', alignItems:'center'},

        WText1:{ height:80, width:'95%', justifyContent:'flex-start'},
        InputText1:{ height:210, width:'95%', justifyContent:'space-evenly'},
        Button1:{ height:70, width:'95%'},
        wellcome1:{fontSize:25,fontWeight:'black' , },
        Login1:{fontSize:35,fontWeight:'bold' }




    })

