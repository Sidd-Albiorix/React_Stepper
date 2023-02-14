import React from 'react'
import { Grid } from '@mui/material'
import DatePicker from '../../Common/DatePicker';
import FormModel from '../../../FormHelpers/FormModels';
import TextInput from '../../Common/TextInput';

function OrgDetails() {
    const { joiningDate, nextAppraisalDate, currCTC } = FormModel.organizationDetails;

    return (
        <div>
            <h2>Organization Details</h2>
            <Grid container rowSpacing={3} columnSpacing={3}>
                <Grid item xs={4}>
                    <DatePicker name={joiningDate.name} label={joiningDate.label} inputFormat="DD/MM/YYYY" fullWidth />
                </Grid>
                <Grid item xs={4}>
                    <DatePicker name={nextAppraisalDate.name} label={nextAppraisalDate.label} inputFormat="DD/MM/YYYY" fullWidth />
                </Grid>
                <Grid item xs={4}>
                    <TextInput name={currCTC.name} label={currCTC.label} fullWidth type="number" />
                </Grid>
            </Grid>
        </div>
    )
}

export default OrgDetails