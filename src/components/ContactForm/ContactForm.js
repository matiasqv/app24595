import { useState } from 'react'
import './ContactForm.css'

const ContactForm = ({ setContact }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [comment, setComment] = useState('')

    console.log(name)

    const handleContactForm = (e) => {
        e.preventDefault()
        const objContact = {
            name,
            phone,
            address,
            comment
        }
        console.log(objContact)
        console.log(name)
        setContact(objContact)


        /*         setName('')
                setPhone('')
                setAddress('')
                setComment('') */


    }

    return (
        <div className='ContactContainer'>
            <h3 id= 'titulo'>Contacto</h3>
            <form className='ContactForm' onSubmit={handleContactForm}>
                <label className='LabelContact'>Nombre:
                    <input
                        className='InputContact'
                        type='text'
                        placeholder='Juan Lopez'
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                    />
                </label>
                <label className='LabelContact'>Telefono:
                    <input
                        className='InputContact'
                        type='text'
                        pattern="[0-9_-]{1,15}"
                        placeholder='+53-011-5458-5698'
                        value={phone}
                        /* required */
                        onChange={({ target }) => setPhone(target.value)}
                    />
                </label>
                <label className='LabelContact'>Direccion:
                    <input
                        className='InputContact'
                        type='text'
                        value={address}
                        onChange={({ target }) => setAddress(target.value)}
                    />
                </label>
                <label className='LabelContact'>Comentario:
                    <input
                        className='InputContact'
                        type='text'
                        value={comment}
                        onChange={({ target }) => setComment(target.value)}
                    />
                </label>
                <button className='Button' id='buttonConfirmar' type='submit'>Confirmar</button>
            </form>
        </div>
    )
}



export default ContactForm