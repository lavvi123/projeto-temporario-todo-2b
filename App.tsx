import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, FlatList} from 'react-native';
import logo from "./assets/logo.png";
import { useState } from 'react';

export default function App() {
  const[data, setData] = useState([
    {id: "1", descricao: "Tarefa 1", data: "2025-01-01", realizado: true},
     {id: "2", descricao: "Tarefa 2", data: "2025-01-02", realizado: false},
      {id: "3", descricao: "Tarefa 3", data: "2025-01-03", realizado: true},
       {id: "4", descricao: "Tarefa 4", data: "2025-01-04", realizado: false},
        {id: "5", descricao: "Tarefa 5", data: "2025-01-05", realizado: false},
  ]);
  
    const Item = {item} => {
      return(
        <View>
          <Text>{Item.realizado}</Text>
        </View>
          <View>
          <Text>{Item.descricao}</Text>
            <Text>{Item.}</Text>
        </View>
      )
    }
    
  return (
    <View style={styles.container}>  
      <View style={styles.viewLogo}>
      <Image source={logo} style={styles.logo}/>
      <Text style={styles.viewLogo}>TODO List</Text>
    </View>
    <View>style={styles.viewTask}> 
     <TextInput style={styles.inputTask} placeholder='Digite a tarefa'/>
      <Button title='Adicionar'></Button>
     </TextInput>
     <FlatList style={styles.taskList} 
     data={data}
     keyExtractor={item => item.id.toString() }
     renderItem={(item)} => <Text>{item.descricao}</Text>
     />
    <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  logo: {
    height: 200,
    width: 200,
    padding: 10
  },
  viewTask:{
    flexDirection: "row",
    marginTop: 10
  },
  inputTask: {
   flex: 1,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
    marginRight: 10,
  },
  viewLogo:{
    alignItems: "center",
    justifyContent: "center",
  },
  textLogo:{
    justifyContent: "center",
  },
  taskList:{
        flexDirection: "row",
    marginTop: 10
  }
});
