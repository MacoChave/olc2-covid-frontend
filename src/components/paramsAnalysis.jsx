import { Box, TextField } from "@mui/material"

export const ParamsAnalysis = ({ files, mode }) => {
    return(
        <Box component='form' noValidate autoComplete="off">
            {mode.require.map(req => (
                <TextField label={`Nombre de campo ${req}`} variant='outlined' />
            ))}
        </Box>
    )
}