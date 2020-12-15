import React from 'react'
import { reduxForm } from 'redux-form'
import { createField, Input, Textarea } from '../../../utils/FormsControl'

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return(
        <form onSubmit={handleSubmit}>
            <div><button>Save</button></div>
            {error && <div>
            {error.map(el=>{
                return(
                    <div>{el}</div>
                )
            })}
        </div>}
            <div>
                <b>Full Name: </b>{createField('input', Input, 'fullName', 'Full Name', [])}
            </div>
            <div>
                <b>Looking for a job: </b>{createField('checkbox', Input, 'lookingForAJob', '', [])}
            </div>
            <div>
                <b>Looking for a job description: </b>{createField('input', Input, 'lookingForAJobDescription', 'Looking for a job description', [])}
            </div>
            <div>
                <b>About Me: </b>{createField('textarea', Textarea, 'aboutMe', 'About me', [])}
            </div>
            <div>
                <b>Contacts: </b> {Object.keys(profile.contacts).map(el=>{
                    return <div key={el}><b>{el}: {createField('input', Input, 'contacts.' + el, el, [])}</b></div>
                })}
            </div>
        </form>
    )
}
const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataReduxForm