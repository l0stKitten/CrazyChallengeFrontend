import React, { useState, Fragment, useRef } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import RegisterForm from '../Components/RegisterPage';
import Preferences from '../Components/PreferencePage'
import WelcomePage from './WelcomePage';
import RegisterProfile from '../Components/RegisterProfile';
import RegisterConfirmation from '../Components/RegisterConfirmation';

import { useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import  schema  from '../js/registersYupSchema'

const steps = ['Datos', 'Gustos', 'Perfil', 'Crea'];


export default function UserRegisterPage() {
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());
    const [value, setGenderValue] = useState(null);
    const [noPreferences, setNoPreferences] = useState(false);
    const [preferences, setSelectedButtons] = useState([]);
    const [selectedGender, setSelectedGender] = useState('');
    const [uploadedImage, setUploadedImage] = useState(null);
    const [termsAcepted, setTermsAcepted] = useState(false);
    const [termsnotAcepted, setTermsNotAcepted] = useState(false);

    const {
		register,
		handleSubmit,
        watch,
		formState: { errors, isValid},
		control,
        setValue
	} = useForm({
		resolver: yupResolver(schema),
	})
	
	const onSubmit = (data) => console.log(data)

    const handleGenderChange = (event) => {
        setSelectedGender(event.target.value);
    };

    const handleSetButtonStyle = (pref) => { 
        if (preferences.includes(pref.name)) {
        // If the button is already selected, remove it from the array and set the style to "outlined"
        setSelectedButtons((prev) => prev.filter((item) => item !== pref.name));
        } else {
        // If the button is not selected, add it to the array and set the style to "contained"
        setSelectedButtons((prev) => [...prev, pref.name]);
        }

    };

    const handleValidateForm = async () => {
        try {
          // Trigger form validation
          await handleSubmit(onSubmit)();
        } catch (error) {
          console.error('Form validation failed.', error);
        }
    };

    const isStepOptional = (step) => {
        return step === 2;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = async () => {
        try {
            if (!isValid) {
                handleValidateForm()
                return;
            }

            if (termsAcepted == false && activeStep === steps.length - 1){
                setTermsNotAcepted(true);
                return;
            }

            if (activeStep === steps.length - 1){
                console.log("REGISTRO EXITOSO")
            }

            if (activeStep === 1 && preferences.length === 0) {
                setNoPreferences(true)
                return;
            }

            setNoPreferences(false)
            let newSkipped = skipped;
            if (isStepSkipped(activeStep)) {
                newSkipped = new Set(newSkipped.values());
                newSkipped.delete(activeStep);
            }

            setActiveStep((prevActiveStep) => prevActiveStep + 1);
            setSkipped(newSkipped);
        } catch (error) {
            console.error('Form validation failed.', error);
        }
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
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Typography variant="h3" gutterBottom sx={{fontFamily: 'Poppins', p:3}}>
				Registro de Usuario
			</Typography>
        <Grid container spacing={2}>
        <Grid item xs={12}>
            <Box sx={{ padding: 1}}>
                <Stepper
                    activeStep={activeStep}
                    sx={{ width: '100%'}}
                >
                    
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
            </Box>
        </Grid>

        <Grid item xs={12}>
            <Box sx={{ padding: 2 }}>
                {activeStep === steps.length ? (
                    <React.Fragment>
                        <WelcomePage></WelcomePage>
                    </React.Fragment>
                ) : (
                    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <form>
                            { activeStep + 1 === 1 && <section style={{marginTop:'16px'}}>
                                <RegisterForm register={register} errors={errors} onSubmit={onSubmit} handleSubmit={handleSubmit} control={control} value={value} setValue={setGenderValue} selectedGender={selectedGender} handleGenderChange={handleGenderChange} ></RegisterForm>
                            </section>}

                            { activeStep + 1 === 2 && <section>
                                <Preferences register={register} selectedButtons={preferences} handleSetButtonStyle={handleSetButtonStyle} noPreferences={noPreferences}></Preferences>
                            </section>}

                            { activeStep + 1 === 3 && <section>
                                <RegisterProfile username={JSON.stringify(watch(), null, 2)} control={control} setValue={setValue} uploadedImage={uploadedImage} setUploadedImage={setUploadedImage} ></RegisterProfile>
                            </section>}

                            { activeStep + 1 === 4 && <section>
                                <RegisterConfirmation termsAcepted={termsAcepted} setTermsAcepted={setTermsAcepted} termsnotAcepted={termsnotAcepted} ></RegisterConfirmation>
                            </section>}
                        </form>
                    </Box>
                )}
            </Box>

            {activeStep < steps.length  && 
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={4}
                sx={{
                width: '100%', // Set width to 100% to stretch across the screen
                bottom: 0, // Align to the bottom of the screen
                p: 2, // Add padding for spacing
                }}
            >
                
                <Grid item>
                    <Button
                        variant="contained"
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                    >
                    Back
                    </Button>
                </Grid>

                {isStepOptional(activeStep) && (<Grid item>
                    <Button color="inherit" onClick={handleSkip} >
                        Skip
                    </Button>
                </Grid>)}
                        
                <Grid item>
                    <Button variant="contained" onClick={handleNext}>
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                </Grid>

            </Grid>
            }
        </Grid>
        
        </Grid>

        
        </Box>

    );
}