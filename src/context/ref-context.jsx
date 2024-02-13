import {createContext,useRef} from 'react'

export const RefContext = createContext({})

export const RefContextProvider = ({children}) => {
    const volunteerRef = useRef(null)
    
    const scrollToVolunteer = () => {
        window.scrollTo({
            top: volunteerRef.current.offsetTop,
            behavior: "smooth"
        })
    }
    const value = {volunteerRef,scrollToVolunteer}

    return (
        <RefContext.Provider value={value}>
            {children}
        </RefContext.Provider>
    )
}