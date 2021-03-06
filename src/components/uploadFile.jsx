import { Box, Button, MenuItem, TextField } from '@mui/material';
import { useState } from 'react';

const separators = [
	{ value: ',', label: ',' },
	{ value: ';', label: ';' },
	{ value: '|', label: '|' },
];

export const UploadFile = ({ setSep, handleFileChooser }) => {
	const [currentSeparator, setCurrentSeparator] = useState(',');

	const handleChange = (e) => {
		setSep(e.target.value);
		setCurrentSeparator(e.target.value);
	};

	return (
		<>
			<Box component='form'>
				<Box>
					<label htmlFor='btn-upload'>
						<input
							accept='.json, .csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
							id='btn-upload'
							type='file'
							onChange={handleFileChooser}
							hidden
						/>
						<Button variant='contained' component='span'>
							Seleccionar archivo
						</Button>
					</label>
				</Box>
				<Box>
					<TextField
						select
						label='Separador'
						value={currentSeparator}
						size='small'
						margin='normal'
						onChange={handleChange}
						helperText='Seleccionar un separador para archivos csv'>
						{separators.map((option) => (
							<MenuItem key={option.value} value={option.value}>
								{option.label}
							</MenuItem>
						))}
					</TextField>
				</Box>
			</Box>
		</>
	);
};
