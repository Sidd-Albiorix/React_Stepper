import React, { useState } from 'react'
import DataContext from './Context'

function ContextProvider({ children }) {
    const [empData, setEmpData] = useState(localStorage.getItem('EmpData') ? JSON.parse(localStorage.getItem('EmpData')) : [])
    const [currEmpIndex, setCurrEmpIndex] = useState(localStorage.getItem('SelectedEmp') ? JSON.parse(localStorage.getItem('SelectedEmp')) : null)

    return (
        <DataContext.Provider value={{ allEmpData: [empData, setEmpData], currentEmpIndex: [currEmpIndex, setCurrEmpIndex] }}>
            {children}
        </DataContext.Provider>
    )
}

export default ContextProvider