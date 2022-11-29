import {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';

function SignupOne({navigation}) {
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
        <View style={[styles.center, {marginTop: 30}]}>
          <TextInput
            onChangeText={Text => setIsData({...isData, Email: Text})}
            style={[styles.input, {margin: 20}]}
            placeholder="user name"
            placeholderTextColor="black"
            keyboardType="user-name"
          />
          <TextInput
            onChangeText={Text => setIsData({...isData, email: Text})}
            placeholder="email"
            style={[styles.input, {margin: 20}]}
            keyboardType="email-address"
            placeholderTextColor="black"
          />
           <TextInput
            onChangeText={Text => setIsData({...isData, Password: Text})}
            placeholder="password"
            style={[styles.input, {margin: 20}]}
            secureTextEntry={true}
            placeholderTextColor="black"
          />
        </View>
        <View style={[styles.center, {marginTop: 40}]}>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.button}> Singup </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default SignupOne;

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
    height: '20%',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
