/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

function Todo() {
  const [todoData, setTodoData] = useState('');
  const [isTodos, setIsTodos] = useState([]);
  // console.log(isTodos, 'todoooo');
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  const handleEvent = () => {
    setIsTodos([...isTodos, todoData]);
  };

  const deleteEvent = e => {
    setIsTodos(
      isTodos.map((event, i) => {
        return e != event;
      }),
    );
  };

  const editEvent = e => {};

  return (
    <>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={styles.header}> Todo App </Text>

        <TextInput
          onChangeText={setTodoData}
          placeholder="Add Todos"
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={handleEvent}>
          <Text style={styles.buttonValue}> ADD TODO </Text>
        </TouchableOpacity>

        <View style={{marginTop: 20, width: '90%'}}>
          {isTodos.map((e, i) => {
            return (
              <>
                <Text style={{fontSize: 25}} key={i}>
                  {e}
                </Text>
                <TouchableOpacity
                  onPress={() => editEvent(e)}
                  style={styles.buttons}>
                  <Text style={styles.buttonValue}> Edit </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttons}
                  onPress={() => deleteEvent(e)}>
                  <Text style={styles.buttonValue}> Delete </Text>
                </TouchableOpacity>
              </>
            );
          })}
        </View>
      </View>
    </>
  );
}

export default Todo;

const styles = StyleSheet.create({
  input: {borderWidth: 1, width: '90%', margin: 10, fontSize: 20},
  header: {fontSize: 30},
  button: {
    width: '90%',
    backgroundColor: '#008CBA',
    height: '4%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonValue: {
    fontSize: 17,
    color: 'white',
  },
  buttons: {
    backgroundColor: '#008CBA',
    height: '8%',
    margin: 2,
    alignItems: 'center',
  },
});
