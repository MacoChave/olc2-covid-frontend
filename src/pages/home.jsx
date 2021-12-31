import { useState } from "react"
import { Box, Button, Step, StepLabel, Stepper } from "@mui/material"
import { SelectAnalysis } from "../components/analisis"
import { UploadFile } from "../components/uploadFile"
import { ParamsAnalysis } from "../components/paramsAnalysis"

export const Home = (props) => {
    const [ activeStep, setActiveStep ] = useState(0)
    const [ mode, setMode ] = useState([])
    const [ base64, setBase64 ] = useState('')
    const [ separator, setSeparator ] = useState(',')

    /**
     * @description Convert file to Base64
     * @param {File} file 
     * @returns {Promise}
     */
    const fileToBase64 = file => {
        return new Promise(res => {
            let base64 = ''
            // Init FileReader
            let reader = new FileReader()
            // Convert file to Base 64 text
            reader.readAsDataURL(file)
            // On reader load something
            reader.onload = () => {
                base64 = reader.result
                res(base64)
            }
        })
    }

    /**
     * 
     * @param {InputEvent} e 
     */
    const handleFileChooser = (e) => {
        e.preventDefault()
        let file = e.target.files[0]

        fileToBase64(file)
        .then(res => {
            setBase64(res)
        })
        .catch(err => console.error(err))
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }
    
    const handleReset = () => {
        setActiveStep(0)
    }
    
    const steps = [
        {label: 'Seleccionar análisis', content: <SelectAnalysis setMode={setMode}/>}, 
        {label: 'Subir archivo', content: <UploadFile setSep={setSeparator} handleFileChooser={handleFileChooser} />}, 
        {label: 'Completar campos', content: <ParamsAnalysis base64={base64} mode={mode} sep={separator} />}
    ]

    return(
        <Box sx={{ width: '100%', marginTop: 3 }}>
            <Stepper activeStep={activeStep}>
                {steps.map((step, index) => {
                    const stepProps = {}
                    const labelProps = {}
                    return (
                        <Step key={step.label} {...stepProps}>
                            <StepLabel {...labelProps}> {step.label} </StepLabel>
                        </Step>
                    )
                })}
            </Stepper>
            <Box sx={{ height: 500, width: '100%', p: 2 }}> { steps[activeStep].content } </Box>
            {activeStep === steps.length -1 ? (
                <>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2}}>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button onClick={handleReset}>Reset</Button>
                </Box>
                </>
            ) : (
                <>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt:2 }}>
                    <Button 
                    color='inherit' 
                    disabled={activeStep === 0} 
                    onClick={handleBack} 
                    sx={{ mr: 1 }} >Atras</Button>
                    <Box sx={{ flex:'1 1 auto' }} />
                    <Button onClick={handleNext}>Next</Button>
                </Box>
                </>
            )}
        </Box>
    )
}