import React, { useState } from 'react'

export const NumberContext = React.createContext()

const NumberProvider = props => {
    const [ number, setNumber ] = useState('')
    const [ storeNumber, setStoreNumber] = useState('')
    const [ functionTyle, setFunctionType] = useState('')

    const handleSetDusplayValue = num => {
        if((!number.includes('.') || num !== '.' ) && numer.length < 8){
            setNumber(`${(number + num).replace(/^0+/, '')}`)
        }
    }

    const handleBackButton = () => {
        if(number !== ''){
            const deleterNumber = number.slice(0, number.length -1)
            setNumber(deleterNumber)
        }
    }

    const handleClearValue = () => {
        setNumber('')
        setStoreNumber('')
        setFunctionType('')
    }

    return (<NumberContext.Provider
    value = {{handleSetDusplayValue, handleBackButton, handleClearValue}}
    >
        
    </NumberContext.Provider>)
}

export default NumberProvider