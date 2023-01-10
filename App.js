import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function App() {
  const arr= [
    {
      id:1,
      name:'hello'
    },
    {
      id:2,
      name:'bye'
    }
  ]
  const storeData = async (value) => {
    // arr.push({name:'welcome'})
    try {
       AsyncStorage.setItem('@storage_Key', JSON.stringify(arr))
      console.log("Data saved successfully!")

    } catch (e) {
      console.log("error",e);
    }
  }

const getData = async () => {
  try {
    const value = JSON.parse( await AsyncStorage.getItem('@storage_Key'))
    if(value !== null) {
      console.log("data",value);
    }
    else{
      console.log("No item found");
    }
  } catch(e) {
  }
}
const updateData = async (id,item) => {
  try {
    const value = JSON.parse( await AsyncStorage.getItem('@storage_Key'))
    if(value !== null) {
      value.map((i)=>{
        if(i.id == id){
          i.name=item
        }
      })
      AsyncStorage.setItem('@storage_Key', JSON.stringify(value))

    }
  } catch(e) {
    // error reading value
  }
}

const removeItem = async (id) => {
  let mydata;
  try {
    const value = JSON.parse( await AsyncStorage.getItem('@storage_Key'))
    if(value !== null) {
      mydata = value.filter((i)=>{
          if(i.id == id ){
          }
          else{
            return i;
          }
      })
      AsyncStorage.setItem('@storage_Key', JSON.stringify(mydata))
    console.log("Item Removed Successfully!");

      
    }
  } catch(e) {
    // error reading value
  }
}
const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem('@storage_Key');
    console.log("Data deleted successfully!");
    return true;
}
catch(exception) {
    return false;
}
}
  return (
    <View>
      <Text>App</Text>
      <Button title='Set Item' onPress={()=>storeData()}/> 
      <Button title='Get Item' onPress={()=>getData()}/> 
      <Button title='Update Item' onPress={()=>updateData(2,"goodbye")}/> 
      <Button title='delete item' onPress={()=>removeItem(2)}/> 
      <Button title='delete Data' onPress={()=>removeData()}/> 
    </View>
  )
}

const styles = StyleSheet.create({})