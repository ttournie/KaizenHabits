import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, ScrollView, Text, View} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import StreakChart from '../StreakChart/StreakChart';
import {getHabit} from '../../utils/habits';

class GraphScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedHabit: this.props.habitList[0] ? this.props.habitList[0] : null,
            curentHabit: this.props.habitList[0] ? this.props.habitList[0] : null,
        }
    }
    static navigationOptions = ({ navigation }) => {
        return {
          headerTitle: 'Charts',
        };
      };

    render() {
        const pickerItems = this.props.habitList.map(habit => ({...habit, label:habit.name, value:habit.name}));
        return (
            <ScrollView>
                    <RNPickerSelect
                        hideIcon
                        placeholder={{
                            label: 'Select an habit...',
                            value: null,
                        }}
                        items={pickerItems}
                        onValueChange={(value) => {
                            this.setState({
                                curentHabit: getHabit(this.props.habitList, value),
                            });
                        }}
                        onDonePress={() => {
                            this.setState({
                                selectedHabit: this.state.curentHabit,
                            });
                        }}
                        style={{inputIOS: styles.picker}}
                        value={this.state.curentHabit? this.state.curentHabit.name : null}
                    >
                    <View style={styles.pickerContainer}>
                        <Text style={styles.pickerLabel}>{this.state.selectedHabit ? this.state.selectedHabit.name : 'Select an habit...'}</Text>
                        <View style={styles.pickerIconContainer}><Ionicons name="md-arrow-dropdown" size={30} /></View>
                    </View>
                    </RNPickerSelect>
                <View style={styles.container}>
                    <Text style={styles.title}>Monthly chart</Text>
                    {this.state.selectedHabit? 
                            <StreakChart habit={this.state.selectedHabit}/>
                        :
                            <Text>No habit selected</Text>
                    }
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 15,
    },
    pickerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: 15,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 10,
        backgroundColor: '#43c744',
    },
    pickerIconContainer: {
        alignSelf: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    pickerLabel: {
        marginRight: 20,
        fontSize: 18,
        textAlign: 'center',
    },
    picker: {
        fontSize: 16,
        textAlign: 'center',
        paddingTop: 15,
        paddingHorizontal: 10,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderColor: '#CED0CE',
        color: 'black',
        marginLeft: 10,
    }
});

const mapStateToProps = ({habits}) => ({
    habitList: habits.habitList,
});

export default connect(mapStateToProps)(GraphScreen);