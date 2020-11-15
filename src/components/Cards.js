import React from 'react'

import { Card, CardContent, Grid, Typography } from '@material-ui/core'

import CountUp from 'react-countup';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'Loading ....';
    }
    const cards = [
        {
            name: 'Infected',
            numbers: confirmed.value,
            lastUpdate,
            description: 'Number of active cases of COVID-19',
            class: 'infected'
        },
        {
            name: 'Recovered',
            numbers: recovered.value,
            lastUpdate,
            description: 'Number of recoveries from COVID-19',
            class: 'recovered'
        },
        {
            name: 'Deaths',
            numbers: deaths.value,
            lastUpdate,
            description: 'Number of deaths caused by COVID-19',
            class: 'deaths'
        }
    ]
    return (
        <div className='cardsContainer'>
            <Grid container justify='center' spacing={3}>

                {cards.map(item => (
                    <Grid item component={Card} key={Math.random()} xs={10} sm={4} md={3} className={`card ${item.class}`}>
                            <CardContent>
                                <Typography color='textSecondary'>{item.name}</Typography>
                                <Typography variant='h5'>
                                    <CountUp start={0} end={item.numbers} duration={2.5} separator=',' />
                                </Typography>
                                <Typography color='textSecondary'>{new Date(item.lastUpdate).toDateString()}</Typography>
                                <Typography variant='body2'>{item.description}</Typography>
                            </CardContent>
                    </Grid>
                ))}

            </Grid>
        </div>
    )
}

export default Cards
