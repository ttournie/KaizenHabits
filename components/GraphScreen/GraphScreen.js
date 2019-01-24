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
                <Text>Weekly chart</Text>
                {this.props.habitList.map(habit => (
                    <View key={habit.key}>
                        <Text>{habit.name}</Text>
                        <StreakChart streak={habit.streak}/>
                    </View>
                ))}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
    },
});

const mapStateToProps = ({habits}) => ({
    habitList: habits.habitList,
});

export default connect(mapStateToProps)(GraphScreen);