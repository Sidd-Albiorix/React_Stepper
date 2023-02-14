import React from 'react'
import { Grid } from '@mui/material'
import FormModel from "../../../FormHelpers/FormModels"
import TextInput from "../../Common/TextInput"

function BankDetails() {
    let modelDetails = FormModel.bankDetails;

    return (
        <div>
            <h2>BankDetails</h2>
            <Grid container rowSpacing={3} columnSpacing={3}>
                {
                    Object.values(modelDetails).map(formField => (
                        <Grid item xs={4}>
                            <TextInput label={formField.label} name={formField.name} />
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

export default BankDetails