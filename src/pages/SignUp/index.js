import Title, { Form } from "../../components/Form/index";

import FormImage from "../../components/FormImage/index";
import React from "react";
import Styles from "./style.module.scss";

const SignUp = () => {
  return (
    <section className={`${Styles.formContainer} flex flex-row`}>
      <div className='w-1/2'>
        <Title formTitle='Create your Account' />
        <Form inputLabel='Email Address' />
        <Form inputLabel='Full Name' />
        <Form inputLabel='Your Role' />
        <Form inputLabel='Password' />
      </div>
      <div>
        <FormImage className='w-1/2' />
      </div>
    </section>
  );
};

export default SignUp;
