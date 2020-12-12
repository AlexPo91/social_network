import React, { useEffect, useState } from "react";

const ProfileStatusWithHooks = React.memo((props) => {
  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

  useEffect(()=>{
    setStatus(props.status)
  },[props.status])
  const activateMode = () => {
    setEditMode(true)
  };
  const deActivateMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  };
  const changeStatus = (e) => {
      setStatus(e.target.value)
  }
    return (
      <>
        {!editMode && (
          <div>
            <span onClick={activateMode}>{props.status}</span>
          </div>
        )}
        {editMode && (
          <div>
            <input autoFocus onBlur={deActivateMode} onChange={changeStatus} value={status} />
          </div>
        )}
      </>
    );
})

export default ProfileStatusWithHooks;
