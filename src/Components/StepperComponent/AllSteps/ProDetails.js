import React from 'react'
import { Grid, Typography } from '@mui/material'
import FormModel from '../../../FormHelpers/FormModels';
import TextInput from '../../Common/TextInput';
import DropDown from '../../Common/DropDown';

function ProDetails() {
    const { designation, department, years, months, currLocation, skills } = FormModel.professionalDetails

    const skillsArr = ['React', 'Node', 'Angular', 'Vue'];

    return (
        <div>
            <h2>Professional Details</h2>
            <Grid container rowSpacing={3} columnSpacing={3}>
                <Grid item xs={6}>
                    <TextInput label={designation.label} name={designation.name} required />
                </Grid>

                <Grid item xs={6}>
                    <TextInput label={department.label} name={department.name} required />
                </Grid>

                <Grid item xs={6}>
                    <Grid container columnSpacing={2}>
                        <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography>Experience : </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <TextInput label={years.label} name={years.name} type='number' required />
                        </Grid>
                        <Grid item xs={4}>
                            <TextInput label={months.label} name={months.name} type='number' required />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={6}>
                    <TextInput label={currLocation.label} name={currLocation.name} required />
                </Grid>

                <Grid item xs={6}>
                    <DropDown name={skills.name} label={skills.label} data={skillsArr} required />
                </Grid>
            </Grid>
        </div>
    )
}

export default ProDetails