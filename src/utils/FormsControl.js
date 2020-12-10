import React from 'react'
import styles from './FormsControl.module.css'



export const Textarea = ({input, meta, ...props}) => {
    let errorValidationForm = meta.touched && meta.error
    return (
        <div className={styles.formControl + " " + (errorValidationForm ? styles.error : '')}>
            <div><textarea {...input} {...props}/></div>
    { errorValidationForm && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    let errorValidationForm = meta.touched && meta.error
    return (
        <div className={styles.formControl + " " + (errorValidationForm ? styles.error : '')}>
            <div><input {...input} {...props}/></div>
    { errorValidationForm && <span>{meta.error}</span>}
        </div>
    )
}