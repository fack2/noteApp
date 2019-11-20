import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllNotes } from '../../redux/action';

class NoteList extends Component {
  componentDidMount = () => {
    //1 and 1 is category_id and user_id
    this.props.getAllNotes(1, 1);
  };

  render() {
    return (
      <View>
        {this.props.loading ? (
          <Text>Loading</Text>
        ) : (
            <>
              <ScrollView>
                <FlatList
                  data={this.props.notes}
                  renderItem={({ item, index }) => (
                    <View style={styles.container}>
                      <Text>{item['note_text']}</Text>
                      <Text>{item['post_date']}</Text>
                    </View>
                  )}
                />
              </ScrollView>
            </>
          )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    borderRadius: 30,
    borderWidth: 1,
    width: 300,
    marginLeft: 50,
    marginBottom: 30,
    borderColor: '#a7a7a7',
  },
});

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
