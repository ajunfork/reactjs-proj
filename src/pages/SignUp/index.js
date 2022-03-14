import Title, { Form } from "../../components/Form/index";

import FormImage from "../../components/FormImage/index";
import React from "react";
import Styles from "./style.module.scss";

const SignUp = () => {
  return (
    <section className={`${Styles.formContainer} flex flex-row`}>
      <div
        className={`h-screen w-1/2 flex flex-col justify-center items-center`}
      >
        <Title formTitle='Create your Account' />
        <form action='' className={`flex flex-col justify-start items-start`}>
          <Form inputLabel='Email Address' required='true' />
          <Form inputLabel='Full Name' required={true} />
          <Form inputLabel='Your Role' required={true} />
          <Form inputLabel='Password' required={true} />
        </form>
      </div>
      <div className='w-1/2'>
        <FormImage />
      </div>
    </section>
  );
};

export default SignUp;
