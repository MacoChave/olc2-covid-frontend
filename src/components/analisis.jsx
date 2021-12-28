import {
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
} from '@mui/material';
import { useState } from 'react';

const items = [
	{tag: 'Tendencia de la infección por Covid-19 en un País', require: ['pais']},
	{tag: 'Predicción de infectados en un País', require: ['pais']},
	{tag: 'Indice de progresión de la pandemia', require: []},
	{tag: 'Predicción de mortalidad por COVID en un Departamento', require: []},
	{tag: 'Predicción de mortalidad por COVID en un País', require: ['pais']},
	{tag: 'Análisis del número de muertes por coronavirus en un País', require: ['pais']},
	{tag: 'Tendencia del número de infectados por día de un País', require: ['pais']},
	{tag: 'Predicción de casos de un país para un año', require: ['pais']},
	{tag: 'Tendencia de la vacunación de en un País', require: ['pais']},
	{tag: 'Ánalisis Comparativo de Vacunaciópn entre 2 paises', require: []},
	{tag: 'Porcentaje de hombres infectados por covid-19 en un País desde el primer caso activo', require: ['pais']},
	{tag: 'Ánalisis Comparativo entres 2 o más paises o continentes', require: []},
	{tag: 'Muertes promedio por casos confirmados y edad de covid 19 en un País', require: ['pais']},
	{tag: 'Muertes según regiones de un país - Covid 19', require: ['pais']},
	{tag: 'Tendencia de casos confirmados de Coronavirus en un departamento de un País', require: ['pais']},
	{tag: 'Porcentaje de muertes frente al total de casos en un país, región o continente', require: ['pais']},
	{tag: 'Tasa de comportamiento de casos activos en relación al número de muertes en un continente', require: []},
	{tag: 'Comportamiento y clasificación de personas infectadas por COVID-19 por municipio en un País', require: ['pais']},
	{tag: 'Predicción de muertes en el último día del primer año de infecciones en un país', require: ['pais']},
	{tag: 'Tasa de crecimiento de casos de COVID-19 en relación con nuevos casos diarios y tasa de muerte por COVID-19', require: []},
	{tag: 'Predicciones de casos y muertes en todo el mundo - Neural Network MLPRegressor', require: []},
	{tag: 'Tasa de mortalidad por coronavirus (COVID-19) en un país', require: ['pais']},
	{tag: 'Factores de muerte por COVID-19 en un país', require: ['pais']},
	{tag: 'Comparación entre el número de casos detectados y el número de pruebas de un país', require: ['pais']},
	{tag: 'Predicción de casos confirmados por día', require: []}
];

export const SelectAnalysis = ({ setMode }) => {
    const [ selectedIndex, setSelectedIndex ] = useState(-1)

    const handleSelect = (e) => {
        e.preventDefault()
        let indexSelected = items.findIndex((value) => value.tag === e.target.innerText)
        setSelectedIndex(indexSelected)
		setMode(items[indexSelected])
    }
	return (
		<Box sx={{ width: '100%', height: '100%', overflowY: 'scroll', bgcolor: 'Background.paper' }}>
			<List>
				{items.map((value, index) => (
					<ListItem key={index} disablePadding>
						<ListItemButton selected={selectedIndex === index}  onClick={handleSelect}>
							<ListItemText primary={value.tag} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);
};
