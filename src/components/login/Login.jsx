import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from "../../router/Router";
import { getUserByEmailAndPassword } from "../../services/userInfo";
import Swal from 'sweetalert2';


import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { object, string } from 'yup';

const Login = () => {
  const navigate = useNavigate();

  const {
    userLogged: { userLogged, userLoggedDispatch },
  } = useContext(AppContext);

  const schema = object({
    email: string().email().required('required field'),
    password: string().min(4).required('required field'),
  });

  const findUser = async values => {
    const userFound = await getUserByEmailAndPassword(
      values.email.trim(),
      values.password.trim()
    );

    if (userFound) {
      const action = {
        type: 'LOGIN',
        payload: {
          isAuthenticated: true,
          user: userFound,
        },
      };
      userLoggedDispatch(action);
      Swal.fire({
        icon: 'success',
        title: 'Felicidades',
        text: `Bienvenido ${userFound.name}`,
      });
    } else {
      alert('error', 'Wrong credentials');
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: (values, actions) => {
      findUser(values);
      actions.resetForm({});
    },
  });

  return (
    <main>
      <form onSubmit={formik.handleSubmit}>
        <FormControl isInvalid={formik.errors.email} className='formControl'>
          <FormLabel>email</FormLabel>
          <Input
            type='email'
            name='email'
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={formik.errors.password} className='formControl'>
          <FormLabel>password</FormLabel>
          <Input
            type='password'
            className='input'
            name='password'
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
        </FormControl>
        <button type='submit'>Sign In</button>
      </form>
    </main>
  );
};

export default Login;
