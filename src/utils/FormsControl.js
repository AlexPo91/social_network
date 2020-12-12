import React from 'react'
import { Field } from 'redux-form'
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

export const createField = (type, component, name, placeholder, validate, text="") => (
    <div>
        <Field type={type} component={component} name={name} placeholder={placeholder} validate={validate}/>{text}
    </div>
)