import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import RegisterForm from '../Components/RegisterPage';
import Preferences from '../Components/PreferencePage'
import WelcomePage from './WelcomePage';
import RegisterProfile from '../Components/RegisterProfile';
import RegisterConfirmation from '../Components/RegisterCofirmation';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


const steps = ['Registra tus datos', 'Elige tus preferencias', 'Edita tu perfil', 'Crea tu cuenta'];
const schema = yup.object().shape({
	username: yup.string().required("Se requiere el nombre de usuario"),
	fullname: yup.string().required("Se requiere el nombre completo"),
	email: yup.string().required("Se requiere el email"),
	gender: yup.string().required("Se requiere el género"),
	password: yup.string().required('Se requiere el password').min(6, 'Debe tener al menos 6 caracteres'),
    preferences: yup.array().required('Selecciona al menos una categoría'),
    avatar: yup.string().required().default("https://www.iprcenter.gov/image-repository/blank-profile-picture.png/@@images/image.png"),
    biography: yup.string().required().default(`Hola, soy ${yup.ref(`username`)}`),
	confirmPassword: yup
	  .string()
	  .oneOf([yup.ref('password'), null], 'Las contraseñas no son iguales')
	  .required('Se requiere confirmar el password')
	  .min(6, 'Debe tener al menos 6 caracteres'),
});

export default function UserRegisterPage() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const {
		register,
		handleSubmit,
        watch,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	})
	
	const onSubmit = (data) => console.log(data)

    const isStepOptional = (step) => {
        return step === 2;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
        // You probably want to guard against something like this,
        // it should never occur unless someone's actively trying to break something.
        throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
        const newSkipped = new Set(prevSkipped.values());
        newSkipped.add(activeStep);
        return newSkipped;
        });
    };

    return (
        <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
                labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
                );
            }
            if (isStepSkipped(index)) {
                stepProps.completed = false;
            }
            return (
                <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
            );
            })}
        </Stepper>

        {activeStep === steps.length ? (
            <React.Fragment>
            <WelcomePage></WelcomePage>
            </React.Fragment>
        ) : (
            <React.Fragment>
            
                    { activeStep + 1 === 1 && <section style={{marginTop:'16px'}}>
                        <RegisterForm register={register} errors={errors} onSubmit={onSubmit} handleSubmit={handleSubmit}></RegisterForm>
                    </section>}

                    { activeStep + 1 === 2 && <section>
                        <Preferences></Preferences>
                    </section>}

                    { activeStep + 1 === 3 && <section>
                        <RegisterProfile></RegisterProfile>
                    </section>}

                    { activeStep + 1 === 4 && <section>
                        <RegisterConfirmation></RegisterConfirmation>
                    </section>}
                
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
                >
                Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                    Skip
                </Button>
                )}

                <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
            </Box>
            <prev>
                {JSON.stringify(watch(), null, 2)}
            </prev>
            </React.Fragment>
        )}
        </Box>
    );
}