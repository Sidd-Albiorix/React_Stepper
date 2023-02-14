import React from 'react'
import { FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemText, FormHelperText } from '@mui/material'
import { useField } from 'formik'

//Common component of dropdown/select with formik wrapper
function DropDown(props) {
    const { label, data, ...rest } = props;
    const [field, meta, helper] = useField(props);
    const { value } = field;
    const selectedValue = value || [];
    const isError = meta.touched && meta.error && true;;
    const { setValue } = helper

    function onSelectChange(event) {
        const {
            target: { value },
        } = event;
        setValue(typeof value === 'string' ? value.split(',') : value);
    }

    function renderHelperText() {
        if (isError) {
            return <FormHelperText>{meta.error}</FormHelperText>;
        }
    }

    return (
        <FormControl fullWidth {...rest} error={isError}>
            <InputLabel>{label}</InputLabel>
            <Select {...field} multiple value={selectedValue} variant="standard"
                onChange={onSelectChange} renderValue={(selected) => selected.join(', ')}>
                {data.map((skill) => (
                    <MenuItem key={skill} value={skill}>
                        <Checkbox checked={selectedValue.indexOf(skill) > -1} />
                        <ListItemText primary={skill} />
                    </MenuItem>
                ))}
            </Select>
            {renderHelperText()}
        </FormControl>
    )
}

export default DropDown