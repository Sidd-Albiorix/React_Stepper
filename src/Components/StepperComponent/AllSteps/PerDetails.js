import React from 'react'
import { Grid, FormControlLabel, Checkbox } from '@mui/material'
import FormModel from "../../../FormHelpers/FormModels"
import TextInput from "../../Common/TextInput"
import DatePicker from '../../Common/DatePicker';
import { useFormikContext } from 'formik';

function PerDetails(props) {
    const { values } = props;
    const { setFieldValue } = useFormikContext()
    const { firstName, middleName, lastName, email, mobileNumber, dateOfBirth, presentAddress, permanentAddress } = FormModel.personalDetails

    //handle checkbox change for Permanent Address same as Present Address 
    const onCheckChange = ({ checked }) => {
        if (checked)
            setFieldValue('permanentAddress', values.presentAddress)
    }

    return (
        <div>
            <h2>Personal Details</h2>
            <Grid container rowSpacing={3} columnSpacing={2} style={{ marginBottom: '20px' }}>
                <Grid item xs={4}>
                    <TextInput label={firstName.label} name={firstName.name} required />
                </Grid>
                <Grid item xs={4}>
                    <TextInput label={middleName.label} name={middleName.name} required />
                </Grid>
                <Grid item xs={4}>
                    <TextInput label={lastName.label} name={lastName.name} required />
                </Grid>
                <Grid item xs={4}>
                    <TextInput label={email.label} name={email.name} required />
                </Grid>
                <Grid item xs={4}>
                    <TextInput label={mobileNumber.label} name={mobileNumber.name} required />
                </Grid>
                <Grid item xs={4}>
                    <DatePicker label={dateOfBirth.label} name={dateOfBirth.name} inputFormat="DD/MM/YYYY" />
                </Grid>
            </Grid>
            <Grid container rowSpacing={2} columnSpacing={2}>
                <Grid item xs={4}>
                    <TextInput label={presentAddress.label} name={presentAddress.name} required />
                </Grid>
                <Grid item xs={4}>
                    <TextInput label={permanentAddress.label} name={permanentAddress.name} />
                </Grid>
                <Grid item xs={4} style={{ textAlign: 'left' }}>
                    <FormControlLabel control={<Checkbox onChange={e => onCheckChange(e.target)} />} label="Permanent Address same as Present Address" />
                </Grid>
            </Grid>
        </div>
    )
}

export default PerDetails