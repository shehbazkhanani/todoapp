import {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';

function LoginOne({navigation}) {
  const [isData, setIsData] = useState({
    Email: '',
    Password: '',
  });

  // console.log(isData);
  return (
    <>
      <View style={{backgroundColor: '#f5f5f5', height: '100%'}}>
        <View style={styles.image}>
          <Image source={require('../assets/logo1.png')} />
        </View>
        <View style={[styles.center, {marginTop: 50}]}>
          <TextInput
            onChangeText={Text => setIsData({...isData, Email: Text})}
            style={[styles.input, {margin: 50}]}
            placeholder="email"
            placeholderTextColor="black"
            keyboardType="email-address"
          />
          <TextInput
            onChangeText={Text => setIsData({...isData, Password: Text})}
            placeholder="password"
            style={styles.input}
            secureTextEntry={true}
            placeholderTextColor="black"
          />
        </View>
        <View style={[styles.center, {marginTop: 40}]}>
          <TouchableOpacity
            onPress={() => navigation.push('SignupOne')}
            style={styles.buttonStyle}>
            <Text style={styles.button}>Create an account?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.button}> Login </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default LoginOne;

const styles = StyleSheet.create({
  image: {
    alignItems: 'center',
    marginTop: 120,
  },
  input: {
    color: 'white',
    borderBottomColor: 'black',
    borderColor: '#f5f5f5',
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
    backgroundColor: 'black',
    width: '80%',
    height: '13%',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
