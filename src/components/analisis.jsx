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
