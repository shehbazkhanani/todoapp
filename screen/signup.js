import {useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import { SignUp } from '../config/firebaseMethod';

function Signup({navigation}) {
  const [isData, setIsData] = useState({
    userName: '',
    email: '',
    password: '',
  });

  // const GetSignUp = () => {
  //   SignUp(isData).then((succ) => {
  //     console.log(succ);
  //   }).catch((err) => {
  //     console.log(err);
  //   })
  // }

  // console.log(isData)

  return (
    <>
      <View style={{backgroundColor: 'black', height: '100%'}}>
        <View style={styles.image}>
          <Image source={require('../assets/logo.png')} />
        </View>
        <View style={[styles.center, {marginTop: 50}]}>
          <TextInput
            onChangeText={text => setIsData({...isData, userName: text})}
            style={[styles.input, {margin: 20}]}
            placeholder="@username"
            placeholderTextColor="white"
            keyboardType="user-name"
          />
          <TextInput
            onChangeText={text => setIsData({...isData, email: text})}
            style={[styles.input, {margin: 20}]}
            placeholder="email"
            placeholderTextColor="white"
            keyboardType="email-address"
          />
          <TextInput
            onChangeText={text => setIsData({...isData, password: text})}
            placeholder="password"
            style={[styles.input, {margin: 20}]}
            secureTextEntry={true}
            placeholderTextColor="white"
          />
        </View>
        <View style={[styles.center, {marginTop: 80}]}>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.button}> Signup </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default Signup;

const styles = StyleSheet.create({
  image: {
    alignItems: 'center',
    marginTop: 150,
  },
  input: {
    color: 'white',
    borderBottomColor: '#e51114',
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 7,
    width: '80%',
    alignItems: 'center',
  },
  center: {
    alignItems: 'center',
    width: '100%',
  },
  button: {
    color: 'white',
  },
  buttonStyle: {
    backgroundColor: '#e51114',
    width: '20%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
