import { ContentPasteOffSharp, Save } from '@mui/icons-material';
import { Button, IconButton, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { useModal } from '../hooks/useModal';
import {
	analysisService,
	percentageService,
	prediceService,
	rateService,
	reportService,
	trendService,
} from '../services/analizeService';
import { Modal } from './modal';

export const ParamsAnalysis = ({ ext, mode, sep }) => {
	const { isOpenModal, handleOpenModal, handleCloseModal } = useModal(false);
	const [messageModal, setMessageModal] = useState(<></>);
	const [loading, setLoading] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		mode = {
			...mode,
			ext: ext,
			sep: sep,
		};

		setLoading(true);
		switch (mode.tag) {
			case 'Tendencia':
				console.log('Go to tendencia');
				trendService(mode).then((res) => {
					console.log(res);
					setLoading(false);
					setMessageModal(
						<>
							<img src={res.Grafica} alt='Gráfica de tendencia' />
							<p>
								<span>Ecuación: </span>
								{res.Ecuacion}
							</p>
							<p>
								<span>Tendencia: </span>
								{res.Coeficiente > 0 ? 'Alcista' : 'Bajista'}
							</p>
						</>
					);
					handleOpenModal();
				});
				break;
			case 'Predicción':
				prediceService(mode).then((res) => {
					console.log(res);
					setLoading(false);
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
				analysisService(mode).then((res) => {
					let graph = res.Grafica;
					let array = res.Array;
					let arrRes = array.map((val) => (
						<Box>
							<p>
								<span>Ecuación: </span>
								{val.ecuacion}
							</p>
							<p>
								<span>Pais: </span> {val.pais}
							</p>
						</Box>
					));
					setLoading(false);
					setMessageModal(
						<>
							<img src={graph} alt='Gráfica de ecuación' />
							<Box>{arrRes}</Box>
						</>
					);
					handleOpenModal();
				});
				break;
			case 'Porcentaje':
				console.log('Go to Porcentaje');
				percentageService(mode).then((res) => {
					console.log(res);
					setLoading(false);
					setMessageModal(
						<>
							<img src={res.Grafica} alt='Gráfica de ecuación' />
							<p>
								<span>Ecuación de la tendencia: </span>
								{res.Ecuacion}
							</p>
							<p>
								<span>Porcentaje del total: </span>
								{`${Number(res.Porcentaje).toFixed(2)} %`}
							</p>
						</>
					);
				});
				handleOpenModal();
				break;
			case 'Muertes promedio':
				console.log('Go to Muertes promedio');
				break;
			case 'Muertes según región':
				console.log('Go to Muertes según región');
				break;
			case 'Tasa de comportamiento':
				console.log('Go to Tasa de comportamiento');
				rateService(mode).then((res) => {
					console.log(res);
					setLoading(false);
					setMessageModal(
						<>
							<img src={res.Grafica} alt='Gráfica de ecuación' />
							<p>
								<span>
									Ecuación de la tasa de comportamiento:{' '}
								</span>
								{res.Ecuacion}
							</p>
							<p>
								<span>Tasa total: </span>
								{`${res.Porcentaje} Casos activos / Muertes`}
							</p>
						</>
					);
				});
				handleOpenModal();
				break;
			case 'Comportamiento':
				console.log('Go to Comportamiento');
				break;
			case 'Tasa de crecimiento':
				console.log('Go to Tasa de crecimiento');
				rateService(mode).then((res) => {
					console.log(res);
					setLoading(false);
					setMessageModal(
						<>
							<img src={res.Grafica} alt='Gráfica de ecuación' />
							<p>
								<span>Ecuación de la tasa de crecimiento:</span>
								{res.Ecuacion}
							</p>
							<p>
								<span>Tasa total: </span>
								{`${res.Tasa} Casos activos / Muertes`}
							</p>
						</>
					);
				});
				handleOpenModal();
				break;
			case 'Tasa de mortalidad':
				console.log('Go to Tasa de mortalidad');
				rateService(mode).then((res) => {
					console.log(res);
					setLoading(false);
					setMessageModal(
						<>
							<img src={res.Grafica} alt='Gráfica de ecuación' />
							<p>
								<span>Ecuación de la tasa de mortalidad: </span>
								{res.Ecuacion}
							</p>
							<p>
								<span>Tasa de mortalidad total: </span>
								{`${res.Tasa} Muertes / Total`}
							</p>
						</>
					);
				});
				handleOpenModal();
				break;
			case 'Factor de muerte':
				console.log('Go to Factor de muerte');
				break;
			case 'Comparación':
				console.log('Go to Comparación');
				break;
			default:
				setLoading(false);
				break;
		}
	};

	const handleGenReport = (e) => {
		e.preventDefault();
		console.log('Get report');
		reportService().then((res) => {
			if (res.isSuccess) window.open(res.link, '_blank');
			else console.error('Hubo un problema');
		});
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
				<IconButton
					color='secondary'
					aria-label='Download report'
					onClick={handleGenReport}>
					<Save />
				</IconButton>
			</Box>
			{isOpenModal && (
				<Modal
					isOpen={isOpenModal}
					closeModal={handleCloseModal}
					title='Resultados del análisis'>
					{messageModal}
				</Modal>
			)}
			{loading && (
				<div className='loading__container'>
					{/* <img
						src='https://picsum.photos/50/50/?blur'
						alt='virus icon'
					/> */}
					<img
						src='https://firebasestorage.googleapis.com/v0/b/maco-apps.appspot.com/o/virus.png?alt=media&token=425369b4-9748-440a-bd36-ab12a1b2eba6'
						alt='virus icon'
					/>
				</div>
			)}
		</Box>
	);
};
