import { useState } from 'react';
import Register from '../components/Register';
import Signin from '../components/Signin';
import { Breadcrumbs } from '@mui/material';
import { Link } from 'react-router-dom';

const SigninOrRegister = () => {
  const [steps, setSteps] = useState(0);

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/" className='breadCrumLink'>home</Link>
        <span className="breadCrumText" > Signin or Register </span>
      </Breadcrumbs>
      <div className="signupContainer">
        {steps === 0 && <Signin setSteps={setSteps} />}
        {steps === 1 && <Register />}
      </div>
    </>
  );
};

export default SigninOrRegister;
