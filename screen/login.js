import {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';

function Login({navigation}) {
  const [isData, setIsData] = useState({
    Email: '',
    Password: '',
  });

  // console.log(isData);
  return (
    <>
      <View style={{backgroundColor: 'black', height: '100%'}}>
        <View style={styles.image}>
          <Image source={require('../assets/logo.png')} />
        </View>
        <View style={[styles.center, {marginTop: 50}]}>
          <TextInput
            onChangeText={Text => setIsData({...isData, Email: Text})}
            style={[styles.input, {margin: 50}]}
            placeholder="email"
            placeholderTextColor="white"
            keyboardType="email-address"
          />
          <TextInput
            onChangeText={Text => setIsData({...isData, Password: Text})}
            placeholder="password"
            style={styles.input}
            secureTextEntry={true}
            placeholderTextColor="white"
          />
        </View>
        <View style={[styles.center, {marginTop: 40}]}>
          <TouchableOpacity
            onPress={() => navigation.push('Signup')}
            style={{backgroundColor: 'black'}}>
            <Text style={{color: 'white'}}>Create an account?</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.center, {marginTop: 80}]}>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.button}> Login </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default Login;

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
