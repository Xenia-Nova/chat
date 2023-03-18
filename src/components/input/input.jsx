import React from 'react';
import { Field } from 'formik';
import styles from './input.module.scss'

export const Input = ({ name, type, label }) => {
  const handleFocus = (e) => {
    e.target.removeAttribute('readonly')
  }
  return (
    <div className={styles.inputWrapper}>
      <Field name={name} >
        {({ field, meta }) => (
          <>
            <input
              id={name}
              type={type}
              className={styles.input}
              {...field}
              readOnly
              onFocus={handleFocus}
            />
            <label className={styles.label} htmlFor={name} id={`label-${name}`}>
              <span className={field.value ? styles.inputWithValue : styles.text}>{label}</span>
            </label>
          </>
        )}
      </Field>
    </div>

  );
};
