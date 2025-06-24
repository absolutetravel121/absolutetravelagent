import React from 'react'

const FormInputGroup = () => {
  return (
        <div className={styles.inputBox}>
          <label htmlFor="Email" className={styles.label}>Email</label>
          <PrimaryInput
            placeholder={"example@gmail.com"}
            type={"text"}
            className={styles.input}
          />
        </div>
  )
}

export default FormInputGroup
