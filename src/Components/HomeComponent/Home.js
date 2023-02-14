import React, { useState, useContext } from 'react'
import './home.css';
import {
    Button, Table, TableBody, TableCell, TableContainer, TableRow, TableHead, Paper
} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import StepperComp from '../StepperComponent/StepperComp';
import DataContext from '../../Context/Context';

function Home() {
    const [showStepper, setShowStepper] = useState(false)
    const { allEmpData, currentEmpIndex } = useContext(DataContext)
    const [empData, setEmpData] = allEmpData
    const [currEmpIndex, setCurrEmpIndex] = currentEmpIndex
    const tableHeaders = ['Name', 'Company', 'Department', 'Designation', 'Email', 'Mobile Number', 'Action']

    //Set edit employee data
    const onEditEmp = (index) => {
        setShowStepper(true)
        setCurrEmpIndex(index)
        localStorage.setItem('SelectedEmp', index)
    }

    //Delete employee data
    const onDeleteEmp = (index) => {
        let confirmText = "Do you want to delete employee no :- " + (Number(index) + 1);
        if (window.confirm(confirmText) === true) {
            let filteredData = empData.filter((item, i) => index !== i)
            setEmpData(filteredData)
            localStorage.setItem('EmpData', filteredData.length > 0 ? JSON.stringify(filteredData) : [])
        }
    }

    return (
        <div className='mainWrapper'>
            {
                showStepper ?
                    <StepperComp setShowStepper={setShowStepper} />
                    :
                    <>
                        <h2>Employee Management System</h2>
                        <div style={{ textAlign: 'right' }}>
                            <Button variant="contained" startIcon={<PersonAddIcon />} onClick={() => setShowStepper(true)}
                                disableElevation disabled={showStepper === true}> Employee </Button>
                        </div>
                        <div className='tableWrapper'>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            {
                                                tableHeaders.map(item => (
                                                    <TableCell key={item}>{item}</TableCell>
                                                ))
                                            }
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {empData.map((row, i) => (
                                            <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                                <TableCell>{row['Personal Details'].firstName}</TableCell>
                                                <TableCell>{row['Experience Details'].comName}</TableCell>
                                                <TableCell>{row['Professional Details'].department}</TableCell>
                                                <TableCell>{row['Experience Details'].position}</TableCell>
                                                <TableCell>{row['Personal Details'].email}</TableCell>
                                                <TableCell>{row['Personal Details'].mobileNumber}</TableCell>
                                                <TableCell>
                                                    <Button onClick={() => onEditEmp(i)}> Edit </Button>
                                                    <Button onClick={() => onDeleteEmp(i)} style={{ marginLeft: '5px' }}> Delete </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </>
            }
        </div>
    )
}

export default Home