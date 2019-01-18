import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, ScrollView, View, FlatList, Button, TouchableOpacity } from 'react-native';
import { removeHabit } from '../../reducers/habits';

class HomePage extends React.Component {
    state = {
        editMode: false,
      };

    static navigationOptions = ({ navigation }) => {
        return {
          headerTitle: 'Home',
          headerRight: (
            <Button
              onPress={() => navigation.navigate('AddHabit')}
              title="+"
              color="#43c744"
            />
          ),
          headerLeft: (
            <Button
              onPress={navigation.getParam('switchEditMode')}
              title={navigation.getParam('EditTile') || 'Edit'}
              color="#43c744"
            />
          ),
        };
      };

    componentDidMount() {
        this.props.navigation.setParams({ switchEditMode: this.toggleEditMode });
    }
    
    toggleEditMode = () => {
        this.setState({ editMode: !this.state.editMode });
        this.props.navigation.setParams({ EditTile: this.state.editMode ? 'Edit' : 'Done' });
      };

    deleteHabit = (item) => {
        this.props.removeHabit(item);
      };

    render() {
        return (
        <ScrollView contentContainerStyle={styles.container}>
            <FlatList
                style={styles.habitContainer}
                data={this.props.habitList}
                extraData={this.state}
                renderItem={({item}) =>
                    <View style={styles.habitItemContainer}>
                        {this.state.editMode &&
                                <TouchableOpacity style={styles.deleteButton} onPress={() => this.deleteHabit(item)}>
                                    <Text style={styles.deleteButtonText}>delete</Text>
                                </TouchableOpacity>
                        }
                            <Text>{item.name}</Text>
                    </View>
            }
            />
        </ScrollView>
        );
    }
}
  
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
    },
    habitContainer: {
        marginTop: 10,
    },
    habitItemContainer: {
        flex:1,
        flexDirection: "row",
        alignItems: "center",
        height: 70,
        borderWidth: 1,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 8,
        borderColor: "#CED0CE",
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    deleteButton: {
        marginRight: 20,
    },
    deleteButtonText: {
        color:"#43c744"
    }
});

const mapStateToProps = (state) => ({
    habitList: state.habits.habitList,
});

export default connect(
    mapStateToProps,
    {removeHabit}
)(HomePage);