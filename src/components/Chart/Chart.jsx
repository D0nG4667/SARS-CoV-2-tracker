import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
    }, []);

    const lineChart = (
        dailyData.length //truthy falsy
            ? (
                <Line
                    data={{
                        labels: dailyData.map(({ date }) => date),
                        datasets: [{
                            data: dailyData.map(({ confirmed }) => confirmed),
                            label: 'Confirmed',
                            borderColor: '#3333ff',
                            fill: true,
                        }, {
                            data: dailyData.map(({ deaths }) => deaths),
                            label: 'Deaths',
                            borderColor: 'red',
                            backgroundColor: 'rgba(255, 0, 0, 0.7)',
                            fill: true,
                        }],
                    }}
                />
            ) : null
    );

    const barChart = (
        confirmed
            ? (
                <Bar
                    data={{
                        labels: ['Confirmed', 'Active', 'Recovered', 'Deaths'],
                        datasets: [{
                            label: 'People',
                            backgroundColor: [
                                'rgba(0, 0, 255, 0.7)',
                                'rgba(255, 204, 0, 0.7)',
                                'rgba(0, 255, 0, 0.7)',
                                'rgba(255, 0, 0, 0.7)'
                            ],
                            data: [confirmed.value, confirmed.value - (recovered.value + deaths.value), recovered.value, deaths.value]
                        }]

                    }}
                    options={{
                        legend: { display: false },
                        title: { display: true, text: `Current status in ${country}` },

                    }}

                />
            ) : null
    );

    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    )

};

export default Chart;
