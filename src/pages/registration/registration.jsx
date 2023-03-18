import React from 'react';
import { useNavigate } from "react-router-dom";
import { Form, Formik } from 'formik';
import { Input } from '../../components/input/input';
import { Button } from '../../components/button/button';
import styles from './registration.module.scss';
import { HTTP } from '../../utils/http';
import { snackbarEvents } from '../../utils/custom-event';
import { HOME } from '../../constants/routesTypes';


export const Registration = () => {
  const navigate = useNavigate();

  const initialFormValues = {
    userName: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: ''
  }
  const handleSubmitForm = (values, { resetForm }) => {
    const data = {
      username: values.userName,
      first_name: values.firstName,
      last_name: values.lastName,
      secret: values.password,
    }

    HTTP.post('users/', data).then(() => {
      document.dispatchEvent(snackbarEvents('snackbar', {
        message: 'You have successfully registered.',
        type: 'success-snackbar'
      }));
      resetForm();
      return navigate(HOME);
    })
  }

  return (
    <div className={styles.registrationWrapper}>
      <Formik
        onSubmit={handleSubmitForm}
        initialValues={initialFormValues}
      >
        <Form className={styles.form}>
          <h2 className={styles.title}>Registration</h2>
          <Input type="text" name="userName" label="User name"/>
          <Input type="text" name="firstName" label="First name"/>
          <Input type="text" name="lastName" label="last name"/>
          <Input type="password" name="password" label="Password" />
          <Input type="password" name="confirmPassword" label="Confirm password" />
          <Button text="Confirm" type="submit" />
        </Form>
      </Formik>
    </div>
  );
};
