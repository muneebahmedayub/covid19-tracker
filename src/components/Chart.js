import { Grid } from '@material-ui/core'
import React from 'react'

import { Line, Bar } from 'react-chartjs-2'

const Chart = ({ dailyData, data: { confirmed, recovered, deaths }, country }) => {
    const lineChart = (
        dailyData.length ? (
            <Line
                data={{
                    labels: dailyData.map(({ reportDate }) => reportDate),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed.total),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true
                    }, {
                        data: dailyData.map(({ deaths }) => deaths.total),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true
                    }]
                }}
            />
        ) : null
    )

    // console.log(confirmed ? confirmed.value : 0) 
    const barChart = (
        <Bar
            data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [{
                    label: 'People',
                    backgroundColor: [
                        'rgba(0, 0, 255, 0.5)',
                        'rgba(0, 255, 0, 0.5)',
                        'rgba(255, 0, 0, 0.5)',
                    ],
                    data: [confirmed ? confirmed.value : 0, recovered ? recovered.value : 0, deaths ? deaths.value : 0]
                }]
            }}
            options={{
                legend: { display: false },
                title: { display: true, text: `Current state in ${country}` }
            }}
        />
    )

    return (
        <div>
            <Grid container justify='center'>
                <Grid item xs={12} md={10}>
                    {country ? barChart : lineChart}
                </Grid>
            </Grid>
        </div>
    )
}

export default Chart
