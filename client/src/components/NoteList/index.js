import React, {Component} from 'react';
import axios from 'axios';
import {Text, Button, View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAllNotes} from '../../redux/action';

class NoteList extends Component {
  componentDidMount = () => {
    this.props.getAllNotes(2, 1);
  };

  render() {
    return this.props.loading ? (
      <Text>Loading</Text>
    ) : (
      <View>
        <>
          <FlatList
            data={this.props.notes}
            renderItem={({item, index}) => (
              <View>
                <Text>{item['note_text']}</Text>
                <Text>sommm</Text>
              </View>
            )}
          />
        </>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    loading: state.loading,
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getAllNotes,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);
