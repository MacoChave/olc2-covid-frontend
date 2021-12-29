import {
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
} from '@mui/material';
import { useState } from 'react';

const items = [
	{
		tag: 'Tendencia de la infección por Covid-19 en un País', 
		field: [{require: 'pais', match: ''}]
	},
	{
		tag: 'Predicción de infectados en un País', 
		field: [{require: 'pais', match: ''}]
	},
	{
		tag: 'Indice de progresión de la pandemia', 
		field: [{require: '', match: ''}]
	},
	{
		tag: 'Predicción de mortalidad por COVID en un Departamento', 
		field: [{require: '', match: ''}]
	},
	{
		tag: 'Predicción de mortalidad por COVID en un País', 
		field: [{require: 'pais', match: ''}]
	},
	{
		tag: 'Análisis del número de muertes por coronavirus en un País', 
		field: [{require: 'pais', match: ''}]
	},
	{
		tag: 'Tendencia del número de infectados por día de un País', 
		field: [{require: 'pais', match: ''}]
	},
	{
		tag: 'Predicción de casos de un país para un año', 
		field: [{require: 'pais', match: ''}]
	},
	{
		tag: 'Tendencia de la vacunación de en un País', 
		field: [{require: 'pais', match: ''}]
	},
	{
		tag: 'Ánalisis Comparativo de Vacunaciópn entre 2 paises', 
		field: [{require: '', match: ''}]
	},
	{
		tag: 'Porcentaje de hombres infectados por covid-19 en un País desde el primer caso activo', 
		field: [{require: 'pais', match: ''}]
	},
	{
		tag: 'Ánalisis Comparativo entres 2 o más paises o continentes', 
		field: [{require: '', match: ''}]
	},
	{
		tag: 'Muertes promedio por casos confirmados y edad de covid 19 en un País', 
		field: [{require: 'pais', match: ''}]
	},
	{
		tag: 'Muertes según regiones de un país - Covid 19', 
		field: [{require: 'pais', match: ''}]
	},
	{
		tag: 'Tendencia de casos confirmados de Coronavirus en un departamento de un País', 
		field: [{require: 'pais', match: ''}]
	},
	{
		tag: 'Porcentaje de muertes frente al total de casos en un país, región o continente', 
		field: [{require: 'pais', match: ''}]
	},
	{
		tag: 'Tasa de comportamiento de casos activos en relación al número de muertes en un continente', 
		field: [{require: '', match: ''}]
	},
	{
		tag: 'Comportamiento y clasificación de personas infectadas por COVID-19 por municipio en un País', 
		field: [{require: 'pais', match: ''}]
	},
	{
		tag: 'Predicción de muertes en el último día del primer año de infecciones en un país', 
		field: [{require: 'pais', match: ''}]
	},
	{
		tag: 'Tasa de crecimiento de casos de COVID-19 en relación con nuevos casos diarios y tasa de muerte por COVID-19', 
		field: [{require: '', match: ''}]
	},
	{
		tag: 'Predicciones de casos y muertes en todo el mundo - Neural Network MLPRegressor', 
		field: [{require: '', match: ''}]
	},
	{
		tag: 'Tasa de mortalidad por coronavirus (COVID-19) en un país', 
		field: [{require: 'pais', match: ''}]
	},
	{
		tag: 'Factores de muerte por COVID-19 en un país', 
		field: [{require: 'pais', match: ''}]
	},
	{
		tag: 'Comparación entre el número de casos detectados y el número de pruebas de un país', 
		field: [{require: 'pais', match: ''}]
	},
	{
		tag: 'Predicción de casos confirmados por día', 
		field: [{require: '', match: ''}]
	}
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
