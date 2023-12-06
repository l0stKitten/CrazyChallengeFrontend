import * as yup from 'yup';

const schema = yup.object().shape({
	username: yup.string().required("Se requiere el nombre de usuario"),
	fullname: yup.string().required("Se requiere el nombre completo"),
	email: yup.string().required("Se requiere el email").email('Ingrese un email válido'),
	gender: yup.string().required("Se requiere el género"),
	password: yup.string().required('Se requiere el password').min(6, 'Debe tener al menos 6 caracteres'),
    dateOfBirth: yup.date().required('Se requiere la fecha de nacimiento'),
    avatar: yup.string().notRequired().default("https://www.iprcenter.gov/image-repository/blank-profile-picture.png/@@images/image.png"),
    biography: yup.string().notRequired().default("Hola 😀"),
	confirmPassword: yup
	  .string()
	  .oneOf([yup.ref('password'), null], 'Las contraseñas no son iguales')
	  .required('Se requiere confirmar el password')
});

export default schema;