import { useState } from 'react';
import { Box, Button, Step, StepLabel, Stepper } from '@mui/material';
import { SelectAnalysis } from '../components/analisis';
import { UploadFile } from '../components/uploadFile';
import { ParamsAnalysis } from '../components/paramsAnalysis';
import { uploadDataFile } from '../services/analizeService';

export const Home = (props) => {
	const [activeStep, setActiveStep] = useState(0);
	const [mode, setMode] = useState([]);
	const [ext, setExt] = useState('csv');
	const [separator, setSeparator] = useState(',');
	const [file, setFile] = useState(null);

	/**
	 * Obtiene la extensión del archivo
	 * @param {string} type Tipo de archivo
	 * @returns {string}
	 */
	const getExtension = (type) => {
		switch (type) {
			case 'vnd.ms-excel':
				return 'csv';
			case 'json':
				return 'json';
			default:
				return 'xlsx';
		}
	};

	/**
	 *
	 * @param {InputEvent} e
	 */
	const handleFileChooser = (e) => {
		e.preventDefault();
		let file = e.target.files[0];

		if (file) {
			setFile(file);
			setExt(getExtension(file.type.replace('application/', '')));
		}
	};

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	const handleUpload = () => {
		console.log('Iniciando...');
		if (file !== null) {
			uploadDataFile(file, ext)
				.then((res) => console.log('Esperando...'))
				.catch((err) => console.err(err))
				.finally((onf) => console.log('Terminó...'));
		} else console.info('No hay archivo');
	};

	const steps = [
		{
			label: 'Seleccionar análisis',
			content: <SelectAnalysis setMode={setMode} />,
		},
		{
			label: 'Subir archivo',
			content: (
				<>
					<UploadFile
						setSep={setSeparator}
						handleFileChooser={handleFileChooser}
					/>
					<Button onClick={handleUpload}>Subir archivo</Button>
				</>
			),
		},
		{
			label: 'Completar campos',
			content: <ParamsAnalysis ext={ext} mode={mode} sep={separator} />,
		},
	];

	return (
		<Box sx={{ width: '100%', marginTop: 3 }}>
			<Stepper activeStep={activeStep}>
				{steps.map((step, index) => {
					const stepProps = {};
					const labelProps = {};
					return (
						<Step key={step.label} {...stepProps}>
							<StepLabel {...labelProps}>{step.label}</StepLabel>
						</Step>
					);
				})}
			</Stepper>
			<Box sx={{ height: 500, width: '100%', p: 2 }}>
				{steps[activeStep].content}
			</Box>
			{activeStep === steps.length - 1 ? (
				<>
					<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
						<Box sx={{ flex: '1 1 auto' }} />
						<Button onClick={handleReset}>Reset</Button>
					</Box>
				</>
			) : (
				<>
					<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
						<Button
							color='inherit'
							disabled={activeStep === 0}
							onClick={handleBack}
							sx={{ mr: 1 }}>
							Atras
						</Button>
						<Box sx={{ flex: '1 1 auto' }} />
						<Button onClick={handleNext}>Next</Button>
					</Box>
				</>
			)}
		</Box>
	);
};
