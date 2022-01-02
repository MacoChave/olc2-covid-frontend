import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { useModal } from '../hooks/useModal';
import { prediceService } from '../services/analizeService';
import { Modal } from './modal';

export const ParamsAnalysis = ({ base64, mode, sep }) => {
	const { isOpenModal, handleOpenModal, handleCloseModal } = useModal(false);
	const [messageModal, setMessageModal] = useState(<></>);

	const handleSubmit = (e) => {
		e.preventDefault();

		base64 = base64.replace('data:', '');
		let dataFile = base64.split(';base64,');
		let applicationType = dataFile[0].replace('application/', '');
		mode = {
			...mode,
			file: dataFile[1],
			ext: getExtension(applicationType),
			sep: sep,
		};

		switch (mode.tag) {
			case 'Tendencia':
				console.log('Go to tendencia');
				break;
			case 'Predicción':
				prediceService(mode).then((res) => {
					console.log(res);
					setMessageModal(
						<>
							<img src={res.Grafica} alt='Gráfica de ecuación' />
							<p>
								<span>Ecuación: </span>
								{res.Ecuacion}
							</p>
							<p>
								<span>Predicción: </span> {res.Predecir}
							</p>
						</>
					);
					handleOpenModal();
				});
				break;
			case 'Índice':
				console.log('Go to índice');
				break;
			case 'Análisis':
				console.log('Go to Análisis');
				break;
			case 'Porcentaje':
				console.log('Go to Porcentaje');
				break;
			case 'Muertes promedio':
				console.log('Go to Muertes promedio');
				break;
			case 'Muertes según región':
				console.log('Go to Muertes según región');
				break;
			case 'Tasa de comportamiento':
				console.log('Go to Tasa de comportamiento');
				break;
			case 'Comportamiento':
				console.log('Go to Comportamiento');
				break;
			case 'Tasa de crecimiento':
				console.log('Go to Tasa de crecimiento');
				break;
			case 'Tasa de mortalidad':
				console.log('Go to Tasa de mortalidad');
				break;
			case 'Factor de muerte':
				console.log('Go to Factor de muerte');
				break;
			case 'Comparación':
				console.log('Go to Comparación');
				break;
			default:
				break;
		}
	};

	/**
	 * @description Get extension file from application type
	 * @param {string} applicationType
	 * @returns {string}
	 */
	const getExtension = (applicationType) => {
		switch (applicationType) {
			case 'vnd.ms-excel':
				return 'csv';
			case 'json':
				return 'json';
			case 'vnd.openxmlformats-officedocument.spreadsheetml.sheet':
				return 'xlsx';
			default:
				return 'xls';
		}
	};

	return (
		<Box>
			<Typography variant='subtitle1' mt={2}>
				Parametrizar columnas
			</Typography>
			{mode.field.map((value, index) => (
				<Box key={value.require}>
					<TextField
						id={value.require}
						label={value.require}
						variant='outlined'
						margin='normal'
						size='small'
						onBlur={(e) =>
							(mode.field[index].match = e.target.value)
						}
					/>
				</Box>
			))}
			<Typography variant='subtitle1' mt={2}>
				Definir filtros
			</Typography>
			{mode.filter.map((value, index) => (
				<Box key={value.key}>
					<TextField
						id={value.key}
						label={value.key}
						variant='outlined'
						margin='normal'
						size='small'
						onBlur={(e) =>
							(mode.filter[index].value = e.target.value)
						}
					/>
				</Box>
			))}
			<Box>
				<Button variant='contained' onClick={handleSubmit}>
					Analizar
				</Button>
			</Box>
			{isOpenModal && (
				<Modal
					isOpen={isOpenModal}
					closeModal={handleCloseModal}
					title='Resultados del análisis'>
					{messageModal}
				</Modal>
			)}
		</Box>
	);
};
