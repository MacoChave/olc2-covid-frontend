import { Close } from '@mui/icons-material';
import { Button, IconButton, Typography } from '@mui/material';
import './modal.css';

export const Modal = ({ isOpen, closeModal, title, children }) => {
	const handleModalDialog = (e) => {
		e.stopPropagation();
	};

	return (
		<div
			className={`modal ${isOpen && 'modal--open'}`}
			onClick={closeModal}>
			<div className='modal__dialog' onClick={handleModalDialog}>
				<div className='modal__content'>
					<div className='modal__header'>
						<div className='modal__title'>
							<Typography variant='h5' component='h5'>
								{' '}
								{title}{' '}
							</Typography>
						</div>
						<IconButton
							color='primary'
							aria-label='Close modal'
							onClick={closeModal}>
							<Close />
						</IconButton>
					</div>
					<div className='modal__body'> {children} </div>
					<div className='modal__footer'>
						<Button
							id='accept-modal'
							variant='contained'
							onClick={closeModal}>
							Aceptar
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
