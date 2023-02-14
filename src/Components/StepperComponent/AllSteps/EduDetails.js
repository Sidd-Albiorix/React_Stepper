import React from 'react'
import { Button, Grid } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { FieldArray } from 'formik';
import FormModel from '../../../FormHelpers/FormModels';
import TextInput from "../../Common/TextInput"

function EduDetails(props) {
    const { values, errors } = props;
    const { educationDetails } = values
    let modelDetails = FormModel.educationDetails;

    return (
        <React.Fragment>
            <h2>Education Details</h2>

            <FieldArray name="educationDetails">
                {({ remove, push }) => (
                    <React.Fragment>
                        {educationDetails && educationDetails.length > 0 ?
                            <Grid container rowSpacing={3} columnSpacing={3} style={{ width: '90%', margin: 'auto' }}>
                                {educationDetails.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <Grid item xs={3}>
                                            <TextInput label={modelDetails.degreeName.label} name={`educationDetails.${index}.degreeName`} required />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <TextInput label={modelDetails.universityName.label} name={`educationDetails.${index}.universityName`} required />
                                        </Grid>
                                        <Grid item xs={2}>
                                            <TextInput label={modelDetails.result.label} name={`educationDetails.${index}.result`} type="number" required />
                                        </Grid>
                                        <Grid item xs={2}>
                                            <TextInput label={modelDetails.yearOfPassing.label} name={`educationDetails.${index}.yearOfPassing`} type="number" required />
                                        </Grid>

                                        <Grid item xs={2} style={{ textAlign: 'center' }}>
                                            <Button variant='outlined' onClick={() => remove(index)}> Delete</Button>
                                        </Grid>
                                    </React.Fragment>
                                ))}
                            </Grid>
                            :
                            typeof errors.educationDetails === 'string' && <div style={{ textAlign: 'center', color: 'red' }}>{errors.educationDetails}</div>}

                        <div style={{ width: '100%', textAlign: 'center', marginTop: '12px' }}>
                            <Button variant="contained" startIcon={<AddIcon />} onClick={() => { push({ degreeName: '', universityName: '', result: '', yearOfPassing: '' }) }}>
                                Add Education </Button>
                        </div>
                    </React.Fragment>
                )}
            </FieldArray >
        </React.Fragment>
    );
}

export default EduDetails