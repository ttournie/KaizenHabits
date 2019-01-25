import React from 'react';
import { BarChart, XAxis } from 'react-native-svg-charts'
import {StyleSheet, View} from 'react-native';
import { Svg, Text } from 'react-native-svg';

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

        const Value = ({x, y}) => {
            return data.map((item, index) => (
                item > 0 &&
                <Svg height="200" width="375" key={index}>
                    <Text
                        fontSize="12"
                        x={x(index) + 9}
                        y={y(item) - 5}
                    >
                        {item}
                    </Text>
                </Svg>
            ));
        }


        return (
            <View style={styles.container}>
                <BarChart
                    showGrid={ false }
                    style={styles.chart}
                    data={ data }
                    svg={{
                        fill
                    }}
                    yAccessor={({ item }) => item}
                    contentInset={{ top: 30 }}
                >
                <Value/>
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
        height: 200,
        marginBottom: 5,
    },
    valueContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'red',
    }
  });

export default StreakChart;