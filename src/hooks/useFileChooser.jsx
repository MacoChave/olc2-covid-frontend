import { useState } from "react"

export const useFileChooser = (initState) => {
    const [ files, setFiles ] = useState(initState)

    const handleFileChooser = (e) => {
        setFiles(e.target.files)
    }
    return { file: files, handleFileChooser }
}