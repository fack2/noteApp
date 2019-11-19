import React, { Component } from 'react'
import axios from 'axios'
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
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

  componentDidMount = () => {

  }

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
    if (login) {
      alert('Login')
      this.props.navigation.navigate('Dashboard')
    }
    else {
      alert('email or password is not correct')
    }
  };
  render() {


    return (
      <View>
        <Text style={styles.title}>Welcome to Notepad</Text>
        <TextInput placeholder="email" keyboardType="email-address" onChangeText={this.handleInputEmail} />
        <TextInput secureTextEntry={true} placeholder="password" onChangeText={this.handleInputPassword} />
        <Button title={'login'} onPress={() => this.logedIn()} />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  title: {
    fontFamily: "Red Hat Text",
    textAlign: 'center',
    fontStyle: "italic",
    lineHeight: 25,

  }

})


const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    checkLogin
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)