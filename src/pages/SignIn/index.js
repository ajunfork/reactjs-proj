import Title, { Form } from "../../components/Form/index";

import FormImage from "../../components/FormImage/index";
import React from "react";
import Styles from "./style.module.scss";

const SignIn = () => {
  return (
    <section className={`${Styles.formContainer} flex flex-row`}>
      <div className='w-1/2'>
        <Title formTitle='Sign in to your Account' />
        <Form inputLabel='Email Address' />
        <Form inputLabel='Password' />
      </div>
      <div>
        <FormImage className='w-1/2' />
      </div>
    </section>
  );
};

export default SignIn;
