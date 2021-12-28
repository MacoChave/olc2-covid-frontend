import { Button } from '@mui/material';

export const UploadFile = ({ files, handleFileChooser }) => {

    // const handleUpload = (e) => {
    //     e.preventDefault()
    //     let file = e.target.files[0]
    //     if (!file) return
    //     // application/json | application/vnd.ms-excel
    //     console.log(file)
        
    //     const reader = new FileReader()
    //     reader.onload = (e) => {
    //         let target = e.target
    //         if (target !== undefined && target !== null) {
    //             var content = target.result
    //         }
    //     }
    //     reader.readAsText(file)
    // }
	return (
		<>
			<label htmlFor='btn-upload'>
				<input accept='.json, .csv' id='btn-upload' type='file' onChange={handleFileChooser} hidden />
				<Button variant='contained' component='span'>
					Seleccionar archivo
				</Button>
			</label>
		</>
	);
};
