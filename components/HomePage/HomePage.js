import React from 'react';
import { connect } from 'react-redux';
import { Animated, StyleSheet, Text, ScrollView, View, FlatList, Button, TouchableOpacity } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { removeHabit, checkHabit, unCheckHabit } from '../../reducers/habits';

class HomePage extends React.Component {
    state = {
        editMode: false,
      };

    static navigationOptions = ({ navigation }) => {
        return {
          headerTitle: 'My Habits',
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

    toggleHabit = (item) => {
        item.done ? this.props.unCheckHabit(item) : this.props.checkHabit(item);
    };

    renderHabitItem = (item) => (
        <React.Fragment>
            {this.state.editMode && <TouchableOpacity style={styles.deleteButton} onPress={() => this.deleteHabit(item)}>
                <Text style={styles.deleteButtonText}>delete</Text>
            </TouchableOpacity>}
            <Text>{item.name}</Text>
        </React.Fragment>
    )
    
    onSwipeValueChange = (swipeData) => {
        const { key, value } = swipeData;
        if (value > 80) {
            const habit = this.props.habitList.find(item => item.key === key);
            habit.done ? this.props.unCheckHabit(habit) : this.props.checkHabit(habit);
        }
    }

    render() {
        return (
        <ScrollView contentContainerStyle={styles.container}>
            {this.props.habitList.length === 0 && <Text>Start adding habits</Text>}
            <SwipeListView
                useFlatList
                closeOnScroll
                style={styles.habitContainer}
                data={this.props.habitList}
                extraData={this.state}
                renderItem={({item}) => (
                    <View style={styles.habitItemContainer}>
                        {this.renderHabitItem(item)}
                        {item.done && <View style={styles.doneIcon}><Text>Done</Text></View>}
                    </View>
                )
            }
            renderHiddenItem={(data) => (
                <View style={styles.rowBack}>
                    <View style={styles.doneButton}><Text>Left</Text></View>
                    <Text>Right</Text>
                </View>
                )
            }
            leftOpenValue={375}
            rightOpenValue={-75}
            onSwipeValueChange={this.onSwipeValueChange}
            stopLeftSwipe={120}
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
        borderTopWidth: 1,
        borderBottomWidth: 1,
        paddingLeft: 10,
        backgroundColor: "#fff",
        borderColor: "#CED0CE",
    },
    deleteButton: {
        marginRight: 20,
    },
    deleteButtonText: {
        color:"#43c744"
    },
    doneIcon: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    rowBack: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        backgroundColor: "#43c744",
        alignItems: 'center',
        borderColor: "#CED0CE",
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
      },
});

const mapStateToProps = (state) => ({
    habitList: state.habits.habitList,
});

export default connect(
    mapStateToProps,
    {removeHabit, checkHabit, unCheckHabit}
)(HomePage);