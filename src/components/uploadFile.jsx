import { Box, Button, MenuItem, TextField } from '@mui/material';
import { useState } from 'react';

const separators = [
    { value: ',', label: ',' },
    { value: ';', label: ';' },
    { value: '|', label: '|' },
]

export const UploadFile = ({ setSep, handleFileChooser }) => {

    const [ currentSeparator, setCurrentSeparator ] = useState(',')

    const handleChange = (e) => {
        setSep(e.target.value)
        setCurrentSeparator(e.target.value)
    }

	return (
		<>
        <Box component='form'>
            <TextField 
            select 
            label = 'Separador para archivos CSV'
            value={currentSeparator}
            onChange={handleChange}
            helperText='Seleccionar un separador para archivos csv' >
                {separators.map((option) => (
                    <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                ))}
            </TextField>
			<label htmlFor='btn-upload'>
				<input accept='.json, .csv, xls, xlsx' id='btn-upload' type='file' onChange={handleFileChooser} hidden />
				<Button variant='contained' component='span'>
					Seleccionar archivo
				</Button>
			</label>
        </Box>
		</>
	);
};
