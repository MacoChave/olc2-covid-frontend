import {
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
} from '@mui/material';
import { useState } from 'react';
import { items } from '../consts/analysisOptions';

export const SelectAnalysis = ({ setMode }) => {
    const [ selectedIndex, setSelectedIndex ] = useState(-1)

	// console.log(items.filter(value => value.tag === 'Predicción'))
	// console.log(items.filter(value => value.tag === 'Tendencia'))
	// console.log(items.filter(value => value.tag === 'Índice'))
	// console.log(items.filter(value => value.tag === 'Análisis'))
	// console.log(items.filter(value => value.tag === 'Porcentaje'))
	// console.log(items.filter(value => value.tag === 'Muertes promedio'))
	// console.log(items.filter(value => value.tag === 'Muertes según región'))
	// console.log(items.filter(value => value.tag === 'Tasa de comportamiento'))
	// console.log(items.filter(value => value.tag === 'Comportamiento'))
	// console.log(items.filter(value => value.tag === 'Tasa de crecimiento'))
	// console.log(items.filter(value => value.tag === 'Tasa de mortalidad'))
	// console.log(items.filter(value => value.tag === 'Factor de muerte'))
	// console.log(items.filter(value => value.tag === 'Comparación'))

    const handleSelect = (e) => {
        e.preventDefault()
        let indexSelected = items.findIndex((value) => value.title === e.target.innerText)
        setSelectedIndex(indexSelected)
		setMode(items[indexSelected])
    }
	return (
		<Box sx={{ width: '100%', height: '100%', overflowY: 'scroll', bgcolor: 'Background.paper' }}>
			<List>
				{items.map((value, index) => (
					<ListItem key={index} disablePadding>
						<ListItemButton selected={selectedIndex === index}  onClick={handleSelect}>
							<ListItemText primary={value.title} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);
};
