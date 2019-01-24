import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, ScrollView, Text, View} from 'react-native';
import StreakChart from '../StreakChart/StreakChart';

class GraphScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          headerTitle: 'Charts',
        };
      };

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>Monthly chart</Text>
                {this.props.habitList.map(habit => (
                    <View key={habit.key}>
                        <StreakChart habit={habit}/>
                    </View>
                ))}
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
    }
});

const mapStateToProps = ({habits}) => ({
    habitList: habits.habitList,
});

export default connect(mapStateToProps)(GraphScreen);