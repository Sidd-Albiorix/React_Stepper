import React, { useContext, useState } from 'react'
import { Button, Grid } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { FieldArray } from 'formik';
import FormModel from '../../../FormHelpers/FormModels';
import TextInput from "../../Common/TextInput"

function ExpDetails(props) {
    const { values, errors } = props
    const { experienceDetails } = values
    let modelDetails = FormModel.experienceDetails;

    return (
        <React.Fragment>
            <h2>Experience Details</h2>

            <FieldArray name="experienceDetails">
                {({ remove, push }) => (
                    <React.Fragment>
                        {experienceDetails && experienceDetails.length > 0 ?
                            <Grid container rowSpacing={3} columnSpacing={3} style={{ width: '90%', margin: 'auto' }}>
                                {experienceDetails.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <Grid item xs={3}>
                                            <TextInput label={modelDetails.comName.label} name={`experienceDetails.${index}.comName`} />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <TextInput label={modelDetails.position.label} name={`experienceDetails.${index}.position`} />
                                        </Grid>
                                        <Grid item xs={2}>
                                            <TextInput label={modelDetails.totalYear.label} name={`experienceDetails.${index}.totalYear`} type="number" />
                                        </Grid>
                                        <Grid item xs={2}>
                                            <TextInput label={modelDetails.lastCTC.label} name={`experienceDetails.${index}.lastCTC`} type="number" />
                                        </Grid>

                                        <Grid item xs={2} style={{ textAlign: 'center' }}>
                                            <Button variant='outlined' onClick={() => remove(index)}>Delete</Button>
                                        </Grid>
                                    </React.Fragment>
                                ))}
                            </Grid>
                            :
                            typeof errors.experienceDetails === 'string' && <div style={{ textAlign: 'center', color: 'red' }}>{errors.experienceDetails}</div>}

                        <div style={{ width: '100%', textAlign: 'center', marginTop: '12px' }}>
                            <Button variant="contained" startIcon={<AddIcon />} onClick={() => { push({ comName: '', position: '', totalYear: '', lastCTC: '' }) }}>
                                Add Experience </Button>
                        </div>
                    </React.Fragment>
                )}
            </FieldArray >
        </React.Fragment>
    )
}

export default ExpDetails