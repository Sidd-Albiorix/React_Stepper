import React, { useState, useContext } from 'react';
import { Button, Box, Step, StepLabel, Stepper, CircularProgress } from '@mui/material';
import './StepperComp.css'
import PerDetails from './AllSteps/PerDetails'
import BankDetails from './AllSteps/BankDetails'
import EduDetails from './AllSteps/EduDetails'
import ProDetails from './AllSteps/ProDetails'
import ExpDetails from './AllSteps/ExpDetails'
import OrgDetails from './AllSteps/OrgDetails'
import { Form, Formik } from 'formik'
import DataContext from '../../Context/Context';

import FormValidationSchemas from '../../FormHelpers/FormValidationSchemas';
import FormInitialValues from '../../FormHelpers/FormInitialValues';

function StepperComp({ setShowStepper }) {
    const [activeStep, setActiveStep] = useState(0);
    const [localData, setLocalData] = useState({})

    const { allEmpData, currentEmpIndex } = useContext(DataContext)
    const [empData, setEmpData] = allEmpData
    const [currEmpIndex, setCurrEmpIndex] = currentEmpIndex

    const allSteps = ['Personal Details', 'Bank Details', 'Professional Details', 'Education Details', 'Experience Details', 'Organization Details'];
    const currentFormValidationSchema = FormValidationSchemas[allSteps[activeStep] + ' Schema']
    const currentFormInitialValues = currEmpIndex !== null ? empData[currEmpIndex][[allSteps[activeStep]]] : FormInitialValues[allSteps[activeStep]];;

    const [loading, setLoading] = useState(false);

    //To handle back step btn
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    //Shows each step content
    const showStepperContent = (activeStep, props) => {
        switch (activeStep) {
            case 0:
                return <PerDetails {...props} />

            case 1:
                return <BankDetails {...props} />

            case 2:
                return <ProDetails {...props} />

            case 3:
                return <EduDetails {...props} />

            case 4:
                return <ExpDetails {...props} />

            case 5:
                return <OrgDetails {...props} />

            default:
                return "404 Not Found!!!"
        }
    }

    //Form submit on each step
    const onFormSubmit = async (values) => {
        // alert(JSON.stringify(values, null, 2));

        let finalData = { ...localData, [allSteps[activeStep]]: values[allSteps[activeStep]] ? values[allSteps[activeStep]] : values }
        setLocalData(finalData)

        if (activeStep === allSteps.length - 1) {
            setLoading(true);

            let updatedData;
            await new Promise((resolve) => setTimeout(resolve, 500))

            if (currEmpIndex !== null) {
                empData[currEmpIndex] = finalData;
                updatedData = empData;
                setCurrEmpIndex(null);
            }
            else
                updatedData = [...empData, finalData]

            localStorage.setItem('EmpData', JSON.stringify(updatedData))
            setEmpData(updatedData)

            setShowStepper(false)
            setLoading(false);
        }
        else
            setActiveStep(activeStep + 1);
    }

    //handles redirection to employee list
    const onBackToList = () => {
        setShowStepper(false); setCurrEmpIndex(null); localStorage.setItem('SelectedEmp', null)
    }

    const styles = {
        btnMarginLeft: { marginLeft: '10px' }
    }

    return (
        <Box sx={{ width: '100%', margin: '20px 0px' }}>
            <Stepper activeStep={activeStep}>
                {allSteps.map((label) => {
                    return (
                        <Step key={label} >
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>

            <div className='stepperContentWrapper'>
                <Formik initialValues={currentFormInitialValues} validationSchema={currentFormValidationSchema}
                    onSubmit={onFormSubmit} enableReinitialize>
                    {(props) => (

                        <Form id={allSteps[activeStep]}>
                            {showStepperContent(activeStep, props)}
                            <div className='stepperBtnGroup'>
                                <Button onClick={onBackToList} variant="contained">Back to list</Button>

                                <div className='rightSideBtnGrp'>
                                    <Button disabled={activeStep === 0} onClick={handleBack} variant="outlined" style={styles.btnMarginLeft}>
                                        Back
                                    </Button>
                                    <Button variant={activeStep === allSteps.length - 1 ? "outlined" : "contained"} style={styles.btnMarginLeft} type="submit" startIcon={loading && <CircularProgress />} >
                                        {activeStep === allSteps.length - 1 ? 'Submit' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </Box>
    )
}

export default StepperComp;