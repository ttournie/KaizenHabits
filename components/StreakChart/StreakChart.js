import React from 'react';
import { BarChart, Grid } from 'react-native-svg-charts'

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
            <BarChart
                showGrid={ false }
                style={{ height: 200 }}
                data={ data }
                svg={{ fill }}
                contentInset={{ top: 30, bottom: 30 }}
            >
            </BarChart>
        )
    }
}

export default StreakChart;