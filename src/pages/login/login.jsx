import React from 'react';
import { Field, Form, Formik } from 'formik';
import styles from './login.module.scss';
import { Input } from '../../components/input/input';
import { Button } from '../../components/button/button';
import { useNavigate } from 'react-router-dom';
import { CHAT } from '../../constants/routesTypes';

export const Login = () => {
  const navigate = useNavigate();

  const initialFormValues = {
    userName: '',
    password: '',
  }

  const handleSubmitForm = () => {
    return navigate(CHAT)
  }

  return (
    <div className={styles.registrationWrapper}>
      <Formik
        onSubmit={handleSubmitForm}
        initialValues={initialFormValues}
      >
        <Form className={styles.form}>
          <h2 className={styles.title}>Log In</h2>
          <Input type="text" name="userName" label="User name"/>
          <Input type="password" name="password" label="Password" />
          <Button text="Confirm" type="submit" />
        </Form>
      </Formik>
    </div>
  );
};
