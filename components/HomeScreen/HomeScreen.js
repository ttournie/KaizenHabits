import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, ScrollView, View, Button, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { removeHabit, checkHabit, unCheckHabit } from '../../reducers/habits';
import { isHabitDoneToday } from '../../utils/dates';

class HomeScreen extends React.Component {
    state = {
        editMode: false,
    };

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'My Habits',
            headerRight: (
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => navigation.navigate('AddHabit')}
                >
                    <Ionicons name="md-add" color="#43c744" size={25} />
                </TouchableOpacity>
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

    renderHabitItem = (item) => (
        <React.Fragment>
            <Text>{item.name}</Text>
            {isHabitDoneToday(item) && <View style={styles.doneIcon}><Ionicons color='#43c744' name="md-checkmark-circle" size={25} /></View>}
        </React.Fragment>
    )

    renderHabitItemWrapper = (item) => (
        <React.Fragment>
            {!this.state.editMode &&
                <TouchableOpacity style={styles.toggleHabit} onPress={() => this.toggleHabit(item)}>
                    <View style={styles.habitItemContainer}>
                        {this.renderHabitItem(item)}
                    </View>
                </TouchableOpacity>
            }
            {this.state.editMode &&
                <View style={styles.habitItemContainer}>
                    <TouchableOpacity style={styles.deleteButton} onPress={() => this.deleteHabit(item)}>
                        <Ionicons color='red' name="md-remove-circle" size={25} />
                    </TouchableOpacity>
                    {this.renderHabitItem(item)}
                </View>
            }
        </React.Fragment>
    )

    toggleHabit = (item) => {
        isHabitDoneToday(item) ? this.props.unCheckHabit(item) : this.props.checkHabit(item);
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                {this.props.habitList.length === 0 && <Text>Start adding habits</Text>}
                <FlatList
                    useFlatList
                    closeOnScroll
                    style={styles.habitContainer}
                    data={this.props.habitList}
                    extraData={this.state}
                    renderItem={({ item }) => (
                        this.renderHabitItemWrapper(item)
                    )
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
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        height: 60,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        paddingLeft: 10,
        backgroundColor: "#fff",
        borderColor: "#CED0CE",
        marginBottom: 5,
    },
    toggleHabit: {
        backgroundColor: "#fff",
    },
    deleteButton: {
        marginRight: 20,
    },
    deleteButtonText: {
        color: "#43c744"
    },
    addButton: {
        marginRight: 10,
    },
    doneIcon: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 10,
    },
});

const mapStateToProps = (state) => ({
    habitList: state.habits.habitList,
});

export default connect(
    mapStateToProps,
    { removeHabit, checkHabit, unCheckHabit }
)(HomeScreen);