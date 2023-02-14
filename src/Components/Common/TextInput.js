import React from 'react'
import { TextField } from '@mui/material'
import { useField } from 'formik'

//Common component of textfield with formik wrapper
function TextInput(props) {
    const [field, meta] = useField(props);

    function renderHelperText() {
        if (meta.touched && meta.error)
            return meta.error;
    }

    return (
        <TextField fullWidth variant="standard"
            error={meta.touched && meta.error && true}
            helperText={renderHelperText()}
            {...field} {...props}
        />
    )
}

// function TextInput(props) {
//     // const { errorText, ...rest } = props;
//     // const [field, meta] = useField(props);

//     // function renderHelperText() {
//     //     if (touched && errors)
//     //         return errors;
//     // }

//     return (
//         <TextField fullWidth variant="standard" {...props}
//         // error={touched && errors && true}
//         // helperText={renderHelperText()}
//         // {...field} {...props}
//         />
//     )
// }

export default TextInput