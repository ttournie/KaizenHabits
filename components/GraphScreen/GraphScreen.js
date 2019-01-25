import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, ScrollView, Text, View, Picker} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import StreakChart from '../StreakChart/StreakChart';
import {getHabit} from '../../utils/habits';

class GraphScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedHabit: this.props.habitList[0] ? this.props.habitList[0] : null,
        }
    }
    static navigationOptions = ({ navigation }) => {
        return {
          headerTitle: 'Charts',
        };
      };

    render() {
        const pickerItems = this.props.habitList.map(habit => ({...habit, label:habit.name, value:habit.name}));
        console.log(this.state.selectedHabit)
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
                            selectedHabit: getHabit(this.props.habitList, value),
                        });
                    }}
                    style={{inputIOS: styles.picker}}
                    value={this.state.selectedHabit.name}
                />
                <View style={styles.container}>
                    <Text style={styles.title}>Monthly chart</Text>
                    {this.state.selectedHabit && 
                        <View key={this.state.selectedHabit.key}>
                            <StreakChart habit={this.state.selectedHabit}/>
                        </View>
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
    picker: {
        fontSize: 16,
        textAlign: 'center',
        paddingTop: 15,
        paddingHorizontal: 10,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderColor: '#CED0CE',
        color: 'black',
    }
});

const mapStateToProps = ({habits}) => ({
    habitList: habits.habitList,
});

export default connect(mapStateToProps)(GraphScreen);