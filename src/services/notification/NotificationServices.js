import { createContext, useState, useContext } from 'react'


const Notification = ({ message = 'aqui estamos', severity }) => {
    const notificationStyles = {
        position: 'absolute',
        top: 100,
        right: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'auto',
        height: 'auto',
        backgroundColor: severity === 'success' ? 'green' : 'red',
        padding: '10px 20px 10px 20px',
        color: 'white'

    }

    if (message === '') {
        return null
    }

    return (
        <div style={notificationStyles}>
            {message}
        </div>
    )
}


const NotificationContext = createContext()

export const NotificationServicesProvider = ({ children }) => {
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('')

    const setNotification = (severity, message) => {
        setMessage(message)
        setSeverity(severity)
        setTimeout(() => {
            setMessage('')
        }, 5000)
    }

    return (
        <NotificationContext.Provider value={ setNotification }>
            <Notification message={message} severity={severity} />
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotificationServices = () => {
    return useContext(NotificationContext)
}