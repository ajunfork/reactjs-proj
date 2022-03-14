import Title, { Form } from "../../components/Form/index";

import FormImage from "../../components/FormImage/index";
import React from "react";
import Styles from "./style.module.scss";

const SignIn = () => {
  return (
    <section className={`${Styles.formContainer} flex flex-row`}>
      <div
        className={`h-screen w-1/2 flex flex-col justify-center items-center`}
      >
        <Title formTitle='Welcome Back' />
        <form action='' className={`flex flex-col justify-start items-start`}>
          <Form inputLabel='Email Address' required={false} />
          <Form inputLabel='Password' required={false} />
        </form>
      </div>
      <div className='w-1/2'>
        <FormImage />
      </div>
    </section>
  );
};

export default SignIn;
