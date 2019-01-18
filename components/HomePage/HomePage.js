import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, ScrollView, View, FlatList, Modal, TouchableHighlight, Button } from 'react-native';
import { removeHabit } from '../../reducers/habits';

class HomePage extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          headerTitle: 'Home',
          headerRight: (
            <Button
              onPress={() => navigation.navigate('AddHabit')}
              title="+"
              color="#000"
            />
          ),
          headerLeft: (
            <Button
              onPress={navigation.getParam('switchEditMode')}
              title="edit"
              color="#000"
            />
          ),
        };
      };

    state = {
        modalVisible: false,
        editMode: false,
      };

    componentDidMount() {
        this.props.navigation.setParams({ switchEditMode: this.toggleEditMode });
    }
    
    toggleEditMode = () => {
        this.setState({ editMode: !this.state.editMode });
      };
    
    setModalVisible(visible) {
     this.setState({modalVisible: visible});
    }

    deleteHabit = (item) => {
        this.props.removeHabit(item);
      };

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
                extraData={this.state}
                renderItem={({item}) =>
                    <React.Fragment>
                        {this.state.editMode && <Button title='-' onPress={() => this.deleteHabit(item)}/>}<Text>{item.name}</Text>
                    </React.Fragment>
            }
            />

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>

        {this.state.editMode && <Text>Edit Mode</Text>}

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
    mapStateToProps,
    {removeHabit}
)(HomePage);