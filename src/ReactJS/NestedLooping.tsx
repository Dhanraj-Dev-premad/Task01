import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NestedLooping = () => {
  const collageData=[
    {
        name:'GIT ',
        city:'Jaipur',
        website:'www.git.com',
        students:[
            {
                name:'raj', 
                age:'22',
                email:'raj@gmail.com'
            },
             {
                name:'rishi',
                age:'23',
                email:'rishi@gmail.com'
            },
             {
                name:'raj',
                age:'22',
                email:'dev@gmail.com'
            },
           

        ],
    },



    {
        name:'VIT ',
        city:'Delhi',
         website:'www.vit.com',
        students:[
            {
                name:'raj',
                age:'22',
                email:'raj@gmail.com'
            },
             {
                name:'rishi',
                age:'23',
                email:'rishi@gmail.com'
            },
             {
                name:'raj',
                age:'22',
                email:'dev@gmail.com'
            },
           

        ],
    },


    {
        name:'SKIT ',
        city:'Mumbai',
         website:'www.skit.com',
        students:[
            {
                name:'raj',
                age:'22',
                email:'raj@gmail.com'
            },
             {
                name:'rishi',
                age:'23',
                email:'rishi@gmail.com'
            },
             {
                name:'raj',
                age:'22',
                email:'dev@gmail.com'
            },
           

        ],
    },



    {
        name:'VGU ',
        city:'Goa' ,
         website:'www.vgu.com',
        students:[
            {
                name:'raj',
                age:'22',
                email:'raj@gmail.com'
            },
             {
                name:'rishi',
                age:'23',
                email:'rishi@gmail.com'
            },
             {
                name:'raj',
                age:'22',
                email:'dev@gmail.com'
            },
           

        ],
    }
  ]


  return (
    <ScrollView>
    <View style={{flex:1 }}>
        <Text>learning nexted loops</Text>
        {collageData.map((num)=>
            {
                return(
                    <View style={{ justifyContent:'center', alignItems:'center',padding:20}}>
                        <Text style={{ fontSize:45}}>Name:- {num.name}</Text>
                        <Text style={{ fontSize:40}}>City:- {num.city}</Text>
                        <Text style={{ fontSize:40}}>Website:- {num.website}</Text>
                       
                        <View>
                            {
                                num.students.map((stu)=>
                                    {
                                       return (
                                        <View style={{ justifyContent:'center', alignItems:'center',padding:10}}>
                                            <Text style={{ fontSize:25}}>Name:- {stu.name}</Text>
                                            <Text style={{ fontSize:25}}>Age:- {stu.age}</Text>
                                            <Text style={{ fontSize:25}}>Email:- {stu.email}</Text>
                                        </View>
                                        )
                                    })
                            }
                        </View>
                      

                    </View>
                )
            
            })}
    </View>
    </ScrollView>
    
  )
}

export default NestedLooping

const styles = StyleSheet.create({})