import React from 'react';
import { BarChart, XAxis } from 'react-native-svg-charts'
import {View} from 'react-native';

class StreakChart extends React.PureComponent {

    convertStreakToData() {
        const date = new Date;
        const currentYear = date.getFullYear();
        let currentYearData = [];
        for(i=1; i < 13; i++) {
            const monthStreak = this.props.streak.filter(item => {
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
            <View>
                <BarChart
                    showGrid={ false }
                    style={{ height: 200 }}
                    data={ data }
                    svg={{ fill }}
                    contentInset={{ top: 30, bottom: 30 }}
                >
                </BarChart>
                <XAxis
                    style={{ marginHorizontal: 0 }}
                    data={ data }
                    formatLabel={ (value, index) => index+1 }
                    svg={{ fontSize: 10, fill: 'black' }}
                    contentInset={{ left: 15, right: 15 }}
                />
            </View>
        )
    }
}

export default StreakChart;