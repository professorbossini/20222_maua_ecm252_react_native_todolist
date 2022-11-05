import { 
  Button,
  FlatList,
  StyleSheet, 
  Text, 
  TextInput, 
  View 
} from 'react-native';

// hooks do React (a partir da versão 16.8)
import { useState } from 'react';

// single source of truth SSOT
export default function App(){
  const [todoItem, setTodoItem] = useState('')
  const [todoItens, setTodoItens] = useState([])

  const capturarTodoItem = (todoItemDigitado) => {
    // todoItem = todoItemDigitado
    setTodoItem(todoItemDigitado)
  }

  const adicionarTodoItem = () => {
    setTodoItens(todoItensAtual => {
      const todoItensNovo = [todoItem, ...todoItensAtual]
      setTodoItem('')
      return todoItensNovo
    })      
  }
  return (
    <View
      style={{padding: 40}}>
      <View style={{marginBottom: 4}}>
        <TextInput 
          style={estilos.todoTextInput}
          onChangeText={capturarTodoItem}
          value={todoItem}
        />
        <Button 
          title='OK'
          onPress={adicionarTodoItem}
        />
      </View>

      <View>
        <FlatList 
          data={todoItens}
          renderItem={({item}) =>(
            <View style={estilos.todoItemNaLista}>
              <Text>{item}</Text>
            </View>
          )}
        />

      </View>

    </View>
  );
}

const estilos = StyleSheet.create({
  todoTextInput: {
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    padding: 12,
    marginBottom: 4 
  },
  todoItemNaLista: {
    backgroundColor: '#CCC',
    padding: 12,
    borderColor: '#FFF',
    borderWidth: 1,
    marginBottom: 4 ,
    borderRadius: 8 
  }  
})


        {/* {
          todoItens.map(todoItem => (
          <View style={estilos.todoItemNaLista}>
            <Text>{todoItem}</Text>
          </View>
          ))
        } */}