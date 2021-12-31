import { Button, TextField } from "@mui/material";
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
            {mode.field.map((value, index) => (
                <Box key={value.require}>
                    {/* <TextField id={value.require} label={value.require} variant='outlined' onBlur={(e) => console.log(e.target.value) } /> */}
                    <TextField id={value.require} label={value.require} variant='outlined' onBlur={(e) => mode.field[index].match = e.target.value } />
                </Box>
            ))}
            <Box>
                <Button variant="contained" onClick={handleSubmit}>Analizar</Button>
            </Box>
        </Box>
	);
};
