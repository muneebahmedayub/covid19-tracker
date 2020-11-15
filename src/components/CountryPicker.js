import React from 'react'
import { FormControl, NativeSelect } from '@material-ui/core'

const CountryPicker = ({countries, handleCountryChange, country}) => {
    return (
        <div className='coutryPicker'>
            <FormControl className='FormControl'>
                <NativeSelect value={country} onChange={(e) => {handleCountryChange(e.target.value)}}>
                    <option value="">Global</option>
                    {countries.map((country) => (
                        <option key={Math.random()} value={country.name}>{country.name}</option>
                    ))}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker
