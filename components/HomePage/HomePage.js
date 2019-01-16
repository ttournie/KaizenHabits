import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, ScrollView, View, FlatList, Modal, TouchableHighlight } from 'react-native';

class HomePage extends React.Component {
    state = {
        modalVisible: false,
      };
    
    setModalVisible(visible) {
     this.setState({modalVisible: visible});
    }

    render() {
        return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}>
                <View style={{height: 50, backgroundColor: 'powderblue'}} />
            </View>
            <Text>Open up App.js to start working on your app!</Text>
            <FlatList
                data={this.props.habitList}
                renderItem={({item}) => <Text>{item.name}</Text>
            }
            />

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        </ScrollView>
        );
    }
}
  
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
});

const mapStateToProps = (state) => ({
    habitList: state.habits.habitList,
});

export default connect(
    mapStateToProps
)(HomePage);