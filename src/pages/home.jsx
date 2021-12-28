import { useState } from "react"
import { Box, Button, Step, StepLabel, Stepper } from "@mui/material"
import { SelectAnalysis } from "../components/analisis"

const steps = [
    {label: 'Seleccionar análisis', content: <SelectAnalysis/>}, 
    {label: 'Subir archivo', content: <></>}, 
    {label: 'Completar campos', content: <></>}]

export const Home = (props) => {
    const [ activeStep, setActiveStep ] = useState(0)
    
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }
    
    const handleReset = () => {
        setActiveStep(0)
    }

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
            {activeStep === steps.length ? (
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
                    <Button onClick={handleNext}> {activeStep === steps.length - 1 ? 'Finish': 'Next'} </Button>
                </Box>
                </>
            )}
        </Box>
    )
}