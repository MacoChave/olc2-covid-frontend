import { useState } from 'react';

/**
 *
 * @param {boolean} initState
 * @returns
 */
export const useModal = (initState) => {
	const [isOpenModal, setIsOpenModal] = useState(initState);

	const handleOpenModal = () => {
		setIsOpenModal(true);
	};

	const handleCloseModal = () => {
		setIsOpenModal(false);
	};
	return { isOpenModal, handleOpenModal, handleCloseModal };
};
