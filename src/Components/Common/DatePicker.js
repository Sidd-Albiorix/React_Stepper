import React, { useEffect, useState } from 'react';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { useField } from 'formik';
import TextInput from './TextInput';

//Common component of datepicker with formik wrapper
function DatePicker(props) {
    const [field, meta, helper] = useField(props);
    const { touched, error } = meta;
    const { setValue } = helper;
    const isError = touched && error && true;
    const { value } = field;
    const [selectedDate, setSelectedDate] = useState(null);

    useEffect(() => {
        if (value) {
            const date = new Date(value);
            setSelectedDate(date);
        }
    }, [value]);

    const onDateChange = (date) => {
        if (date) {
            setSelectedDate(date);
            try {
                const ISODateString = date.toISOString();
                setValue(ISODateString);
            } catch (error) {
                setValue(date);
            }
        } else {
            setValue(date);
        }
    }

    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <DesktopDatePicker {...field} {...props}
                value={selectedDate} onChange={onDateChange}
                renderInput={(params) => <TextInput {...params} variant="standard" fullWidth error={isError} helperText={isError && error} />} />
        </LocalizationProvider>
    )
}

export default DatePicker;