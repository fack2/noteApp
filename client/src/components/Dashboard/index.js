import React from 'react'
import { getAllCategories, logOut } from '../../redux/action'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Button
} from 'react-native';

class Dashboard extends React.Component {

  componentDidMount() {
    this.props.getAllCategories()
  }
  moveToList = () => {
    // this should done after someye complete her work
    // this.props.navigation.navigate('noteList')
  }
  logedOut = () => {
    this.props.logOut()
    this.props.navigation.navigate('Login')
  }

  render() {
    return (
      <View>
        {this.props.loading || !this.props.login ? <Text>loading
        </Text>
          :
          (

            <>
              <Button title={'logOut'} onPress={() => this.logedOut()} />

              <FlatList data={this.props.categories} renderItem={({ item, index }) =>
                (
                  <View style={styles.photos_view}>

                    <Image onClick={this.moveToList}
                      style={styles.category_photo}
                      source={{
                        uri:
                          item['image'],
                      }}
                    />
                    <Text >{item["name"]}</Text>
                  </View>
                )} />
            </>
          )
        }
      </View>

    )
  }
}
const styles = StyleSheet.create({
  category_photo: {
    width: 100,
    height: 100,
  },
  photos_view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})





const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    loading: state.loading,
    logout: state.logout,
    login: state.login

  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getAllCategories,
    logOut,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

