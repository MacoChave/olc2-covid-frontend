import { useState } from "react"
import { Box, Button, Step, StepLabel, Stepper } from "@mui/material"
import { SelectAnalysis } from "../components/analisis"
import { UploadFile } from "../components/uploadFile"
import { ParamsAnalysis } from "../components/paramsAnalysis"

export const Home = (props) => {
    const [ activeStep, setActiveStep ] = useState(0)
    const [ mode, setMode ] = useState([])
    const [ files, setFiles ] = useState([])
    const [ separator, setSeparator ] = useState(',')

    const handleFileChooser = (e) => {
        e.preventDefault()
        setFiles(e.target.files)
        
        // let file = e.target.files[0]
        // if (!file) return
        // // application/json | application/vnd.ms-excel
        
        // const reader = new FileReader()
        // reader.onload = (e) => {
        //     let target = e.target
        //     if (target !== undefined && target !== null) {
        //         var content = target.result
        //         if (file.type === 'application/json') {
        //             console.log(JSON.parse(content))
        //         } else {
        //             // let jsonFile = csvToJson(content)
        //         }
        //     }
        // }
        // reader.readAsText(file)
    }

    // const csvToJson = (csvContent) => {
    //     var array = csvContent.split("\n")
    //     let result = []
    //     let headers = array[0].split(separator)
    //     for (let index = 1; index < array.length - 1; index++) {
    //         const element = array[index];
    //         let obj = {}
    //         let s = ''
    //         let flag = 0
    //         for (let ch of element) {
    //             if (ch === '"' && flag === 0) flag = 1
    //             else if (ch === '"' && flag === 1) flag = 0
                
    //             if (ch === separator && flag === 0) ch = '|'
    //             if (ch !== '"') s += ch
    //         }

    //         let properties = s.split("|")

    //         for (const j in headers) {
    //             if (properties[j].includes(separator)) obj[headers[j]] = properties[j].split(separator).map(item => item.trim())
    //             else obj[headers[j]] = properties[j]
    //         }

    //         result.push(obj)
    //     }
    //     return result
    // }
    
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
        {label: 'Completar campos', content: <ParamsAnalysis files={files} mode={mode} sep={separator} />}
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