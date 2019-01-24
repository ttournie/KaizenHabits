import React from 'react';
import { BarChart, XAxis } from 'react-native-svg-charts'
import {StyleSheet, View, Text} from 'react-native';

class StreakChart extends React.PureComponent {
    convertStreakToData() {
        const date = new Date;
        const currentYear = date.getFullYear();
        let currentYearData = [];
        for(i=1; i < 13; i++) {
            const monthStreak = this.props.habit.streak.filter(item => {
                return item.split('-')[1] == i && item.split('-')[2] == currentYear;
            })
            currentYearData.push(monthStreak);
        }
        const dataPerMonth = currentYearData.map(data => data.length);
        return dataPerMonth;
    }

    render() {
        const fill = '#43c744'
        const data   =  this.convertStreakToData();

        return (
            <View style={styles.container}>
                <Text>{this.props.habit.name}</Text>
                <BarChart
                    showGrid={ false }
                    style={styles.chart}
                    data={ data }
                    svg={{ fill }}
                    contentInset={{ top: 30, bottom: 10 }}
                >
                </BarChart>
                <XAxis
                    style={styles.axis}
                    data={ data }
                    formatLabel={ (value, index) => index+1 }
                    svg={{ fontSize: 10, fill: 'black' }}
                    contentInset={{ left: 15, right: 15 }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    },
    chart: {
        height: 200
    },
    axis: {
        
    }
  });

export default StreakChart;