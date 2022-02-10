import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import BlurCircularIcon from '@mui/icons-material/BlurCircular';
import PageFirst from "./StepperComp/PageFirst";
import PageSecond from "./StepperComp/PageSecond";
import PageThird from "./StepperComp/PageThird";
import PageFourth from "./StepperComp/PageFourth";
import PageFinal from "./StepperComp/PageFinal";
import { blue } from '@mui/material/colors';

const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];

export default function App() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  var SwitchComp = () => {
    if (activeStep === 0)
      return <PageFirst />;
    else if (activeStep === 1)
      return <PageSecond />;
    else if (activeStep === 2)
      return <PageThird />;
    else if (activeStep === 3)
      return <PageFourth />;
  }

  return (
    <Container fixed>
      <Box sx={{ padding: '25px' }}>
        <Typography variant="h4" sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <BlurCircularIcon sx={{ color: blue[500], fontSize: 40 }} /> Eden
        </Typography>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

        {activeStep === steps.length ?
          <PageFinal />
          : (
            <>
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
                <Typography component="div">
                  <SwitchComp />
                  <Button sx={{ mt: 3, width: '63ch' }} variant="contained" onClick={handleNext}>{activeStep === steps.length - 1 ? 'Launch Eden' : 'Create Workspace'}</Button>
                </Typography>
              </Box>
            </>
          )}
      </Box>
    </Container>
  );
}