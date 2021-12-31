import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { prediceService } from "../services/analizeService";

export const ParamsAnalysis = ({ base64, mode, sep }) => {
	const handleSubmit = (e) => {
        e.preventDefault()
		base64 = base64.replace('data:', '')
		let dataFile = base64.split(';base64,')
		let applicationType = dataFile[0].replace('application/', '')
		mode = {...mode, file: dataFile[1], ext: getExtension(applicationType), sep: sep}
		prediceService(mode)
	};

	/**
	 * @description Get extension file from application type
	 * @param {string} applicationType 
	 * @returns {string}
	 */
	const getExtension = (applicationType) => {
		switch (applicationType) {
			case 'vnd.ms-excel':
				return 'csv'
			case 'json':
				return 'json'
			case 'vnd.openxmlformats-officedocument.spreadsheetml.sheet':
				return 'xlsx'
			default:
				return 'xls'
		}
	}

	return (
        <Box>
			<Typography variant="subtitle1" mt={2}>Parametrizar columnas</Typography>
            {mode.field.map((value, index) => (
				<Box key={value.require}>
                    <TextField id={value.require} label={value.require} variant='outlined' margin="normal" size="small" onBlur={(e) => mode.field[index].match = e.target.value } />
                </Box>
            ))}
			<Typography variant="subtitle1" mt={2}>Definir filtros</Typography>
			{mode.filter.map((value, index) => (
				<Box key={value.key}>
					<TextField id={value.key} label={value.key} variant='outlined' margin="normal" size="small" onBlur={(e) => mode.filter[index].value = e.target.value } />
				</Box>
			))}
            <Box>
                <Button variant="contained" onClick={handleSubmit}>Analizar</Button>
            </Box>
        </Box>
	);
};
