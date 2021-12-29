import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";

export const ParamsAnalysis = ({ files, mode, sep }) => {
	const handleSubmit = (e) => {
        e.preventDefault()
        getContentFile()
	};

	const getContentFile = () => {
		let file = files[0];
		if (!file) return;
		// application/json | application/vnd.ms-excel

		const reader = new FileReader();
		reader.onload = (e) => {
			let target = e.target;
			if (target !== undefined && target !== null) {
				var content = target.result;
				if (file.type === 'application/json') {
					console.log(JSON.parse(content));
				} else {
					let jsonFile = csvToJson(content);
					console.log(jsonFile);
				}
			}
		};
		reader.readAsText(file);
	};

	const csvToJson = (csvContent) => {
		var array = csvContent.split('\n');
		let result = [];
		let headers = array[0].split(sep);
		for (let index = 1; index < array.length - 1; index++) {
			const element = array[index];
			let obj = {};
			let s = '';
			let flag = 0;
			for (let ch of element) {
				if (ch === '"' && flag === 0) flag = 1;
				else if (ch === '"' && flag === 1) flag = 0;

				if (ch === sep && flag === 0) ch = '|';
				if (ch !== '"') s += ch;
			}

			let properties = s.split('|');

			for (const j in headers) {
				if (properties[j].includes(sep))
					obj[headers[j]] = properties[j]
						.split(sep)
						.map((item) => item.trim());
				else obj[headers[j]] = properties[j];
			}

			result.push(obj);
		}
		return result;
	};

	return (
        <Box>
            {mode.field.map((value, index) => (
                <Box>
                    <TextField id={value.require} key={value.require} label={value.require} variant='outlined' onChange={(e) => console.log(e.target.value) } />
                </Box>
            ))}
            <Box>
                <Button variant="contained" onClick={handleSubmit}>Analizar</Button>
            </Box>
        </Box>
	);
};
