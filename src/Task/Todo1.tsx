import { Button, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomCheckBox from '../MainComp/CustomCheckBox';
import { SubjectContext } from '../ReactJS/ContextData/ContextData';


const Todo1 = () => {
     const [isChecked, setIsChecked] = useState(false);
 
   const[tasks,setTasks]=useState([]);
   const[Task,setTask]=useState('');
   const[currentCatogery,setCurrentCategory]=useState('');
   const Categoryes=['Work','Personal','shopping','Urgent'];

  const handleTask = () => {
  if (!Task?.trim()) {
    return;
  }

  const newTask = {
    name: Task,
    Category: currentCatogery,
    id: Date.now().toString(),
    iscompleted: false,
  };

  setTasks(prev => [...prev, newTask]);

  console.log(newTask, 'KUJKHK');
};
const deleteTask = id => {
  const newArr = tasks.filter(task => task.id !== id);

  setTasks(newArr);
};


console.log(tasks);






   
  return (
    <SafeAreaView style={styles.sav}>
        <SubjectContext.Provider value={}>
        <View style={styles.MainContainer}>
            <View style={styles.textContaier}>
                <Text style={{fontSize:30, fontWeight:'bold'}}>Todo App</Text>
                <Text style={{fontSize:18, opacity:0.5}}>Organize your tasks with simplicity</Text>

            </View >
            
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <View style={styles.inputBox}>
            

                       <TextInput
                        onChangeText={(t)=>setTask(t)}
                        value={Task}
                       
                          placeholder="Email"
                          placeholderTextColor="#a5a2a2"
                        
                          style={styles.textInput}
                           />
                    </View>
                    
                    <Pressable  style={styles.addButtoncontainer} onPress={handleTask}>
                        <Text style={{fontSize:18,fontWeight:'bold', color:'white'}}>Add Task</Text>

                    </Pressable>
  

                </View>

                <View style={styles.categorycontainer}>
                    <Text style={{fontSize:16,fontWeight:'600'}}>CATEGORY:</Text>

                    {
                        Categoryes.map((cat)=>{
                            return(
                                <Pressable onPress={()=>setCurrentCategory(cat)}  style={styles.categoryTextBox}>
                                  <Text style={{fontSize:16, color:'black'}}>{cat}</Text>

                                </Pressable>
                                
                                
                            )
                          

                        })
                        
                    }
                    


                </View>
                

            </View>

            <View style={{height:450,width:'100%',gap:20}}>

                {
                    tasks.map((tt)=>{
                        return(


                            <View style={{height:60,width:'100%',position:'relative',borderColor:'white',elevation:0.5,}}>
                            <View style={{flexDirection:'row',gap:10}} >
                                
                                 <View style={{height:40,width:280,paddingTop:15,marginLeft:65,flexWrap:'wrap'}}>
                                     <Text style={{fontSize:20,flexShrink: 1}} >{tt.name}</Text>

                                 </View>
                                 <Pressable
                                 onPress={() => deleteTask(tt.id)}
                                 
                                 >
                                  <Image
                                     source={require('../Task/dustbin.png')}
                                     resizeMode="contain"
                                     style={{height:25,width:25,opacity:0.4,marginTop:15}}
                                  
                                   />
                                 

                                 </Pressable>
                                
                            </View>

                            
                             <View style={styles.categoryTextLowerBox} >
                                     <Text >{tt.Category}</Text>

                                </View>

                            
                            
                            

                          </View>

                        )

                    })
                }



                          
                
                
                   
                             
                        
                    
                   

                

            </View>
            
            
             
        </View>
        </SubjectContext.Provider>

    </SafeAreaView>
    
  )
}

export default Todo1

const styles = StyleSheet.create(
    {
        sav:{
            flex:1,
            padding:10,
        },
        MainContainer:{
            paddingHorizontal:10,
            gap:20
        },
        textContaier:{
            height:80,
            justifyContent:'center',
            alignItems:'center',
            

        },
        container:{
            height:190,
           
           
            borderColor:'white',
            elevation:1,
            
             
            
        },
        buttonContainer:{
            height:80,
            flexDirection:'row',
            gap:10,
            alignItems:'center',
            justifyContent:'center',
           
           

        },
        
        inputBox:{
            height:55,
            width:250,
           borderColor:'white',
            elevation:0.5,


        },
        textInput:{
            fontSize:14,
            color:'black'
        },
       
        categorycontainer:{
            height:70,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            gap:5

        },
        categoryTextBox:{
            height:35,
            width:70,
            borderRadius:10,
            backgroundColor:"#f6f0f0",
              justifyContent:'center',
            alignItems:'center'

        },
        textContainer:{

        },
        addButtoncontainer:{
            height:55,
            width:100,
            backgroundColor:'#5184dc',
             
            borderRadius:5,
            justifyContent:'center',
            alignItems:'center'

        },
        categoryTextLowerBox:{
            position:'absolute',
            top:-10,
            height:35,
            width:70,
            borderRadius:10,
            backgroundColor:"#f6f0f0",
              justifyContent:'center',
            alignItems:'center'

        },



    })