import React, { Component } from 'react'
import axios from 'axios'
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { checkLogin } from '../../redux/action'

class Login extends Component {
  state = {
    email: "",
    password: "",
    errorMsg: "",
  };

  handleInputEmail = email => {
    this.setState({ email });
  };

  handleInputPassword = password => {
    this.setState({ password });
  };

  logedIn = () => {
    const { email, password } = this.state
    this.props.checkLogin(email, password)
    const { login } = this.props;
    if (login || this.props.loading) {
      this.props.navigation.push('Dashboard')
    }
    else {
      alert('email or password is not correct')
    }

  };
  signup = () => {
    alert('in progress')
    // this.props.navigation.push('Signup')
  }
  render() {


    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Notepad</Text>
        <Image source={{ uri: 'https://cdn.dribbble.com/users/1355613/screenshots/7190094/media/50b564fe0f7e3cced8e5aeccb2bd1af0.jpg' }}
          style={{ width: 250, height: 180 }} />
        <TextInput style={styles.textBox} placeholder="email" keyboardType="email-address" onChangeText={this.handleInputEmail} autoCapitalize='none' />
        <TextInput style={styles.textBox} secureTextEntry={true} placeholder="password" onChangeText={this.handleInputPassword} autoCapitalize='none' />
        {/* <Button style={styles.loginBtn} title={'login'} onPress={() => this.logedIn()} /> */}

        <TouchableOpacity style={styles.button} onPress={() => this.logedIn()}>
          <Text style={styles.buttonText}>login</Text>
        </TouchableOpacity>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Do not have an account yet?</Text>
          <TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 1,
  },
  title: {
    textAlign: 'center',
    fontStyle: "italic",
    lineHeight: 25,
  },
  textBox: {
    width: 250,
    height: 40,
    borderRadius: 25,
    borderColor: "#E5E8E8",
    borderWidth: 0.5,
    paddingHorizontal: 16,
    fontSize: 14,
    marginVertical: 10
  },
  button: {
    width: 120,
    height: 40,
    backgroundColor: '#fff',
    borderColor: "#E5E8E8",
    borderRadius: 50,
    borderWidth: 0.5,
    marginVertical: 10,
    paddingVertical: 6

  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    textAlign: 'center',
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 22,
    flexDirection: 'row'
  },
  signupText: {
    color: '#000',
    fontSize: 14
  },
  signupButton: {
    color: 'blue',
    fontSize: 14,
    fontWeight: '500'
  },
})


const mapStateToProps = (state) => {
  return {
    login: state.login,
    loading: state.loading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    checkLogin,
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)