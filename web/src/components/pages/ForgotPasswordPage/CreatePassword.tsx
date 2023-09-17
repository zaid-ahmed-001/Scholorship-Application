import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Checkbox from '@mui/joy/Checkbox';
import FormControl from '@mui/joy/FormControl';
import FormLabel, { formLabelClasses } from '@mui/joy/FormLabel';
import Link from '@mui/joy/Link';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import { useNavigate } from "react-router-dom";
import ColorSchemeToggle from '../../utils/ColorSchemeToggle';
import ShowAlert from '../../utils/ShowAlert';
interface FormElements extends HTMLFormControlsCollection {
    password: HTMLInputElement;
    confirmpassword: HTMLInputElement;
}
interface SignInFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export default function CreatePassword() {
  React.useEffect(() => {
    document.title = "ForgotPassword - EduFundr";
    return () => {};
  }, []);
  const [AlertDisplay, setAlertDisplay] = React.useState('none');
  const navigate = useNavigate();
  function handleClickToSignUp() {
    navigate("/SignUp");
  }
  return (
      <Box
        sx={(theme) => ({
          width: '100%',
          transition: 'width var(--Transition-duration)',
          transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'center',
          backdropFilter: 'blur(4px)',
          backgroundColor: 'rgba(255 255 255 / 0.6)',
          [theme.getColorSchemeSelector('dark')]: {
            backgroundColor: 'rgba(19 19 24 / 0.4)',
          },
        })}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100dvh',
            width:'100%',
            maxWidth: '100%',
            px: 2,
          }}
        >
          <Box
            component="main"
            sx={{
              my: 'auto',
              py: 2,
              pb: 5,
              height: 500,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              width: 400,
              maxWidth: '100%',
              mx: 'auto',
              borderRadius: 'sm',
              '& form': {
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              },
              [`& .${formLabelClasses.asterisk}`]: {
                visibility: 'hidden',
              },
            }}
          >
            <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
              <Typography component="h1" fontSize="xl2" fontWeight="lg">
              Can't Access Your Account?
              </Typography>
              <Typography level="body-sm" textAlign='center' >
              Your online security is our priority, and we're here to help you regain access to your account seamlessly. Just follow the instructions, and you'll be back on track in no time, enjoying all the benefits of your account with ease.
              </Typography>
            </Box>
            <form
              onSubmit={(event: React.FormEvent<SignInFormElement>) => {
                event.preventDefault();
                const formElements = event.currentTarget.elements;
                setAlertDisplay('flex')
                if (formElements.password.value === formElements.confirmpassword.value) {
                  const data = {
                      text: formElements.password.value,
                  };
                  alert(JSON.stringify(data, null, 2));
                  navigate("/SignIn");
                } else {
                  setAlertDisplay('flex')
                }
              }}
            >
              <FormControl required>
                <FormLabel>New Password</FormLabel>
                <Input type="password" name="password" />
              </FormControl>
              <FormControl required>
                <FormLabel>Confirm Password</FormLabel>
                <Input type="password" name="confirmpassword" />
              </FormControl>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
              </Box>
              <Button type="submit"  fullWidth>
                Change Password
              </Button>
              <Link fontSize="sm" onClick={()=>navigate('../ForgotPassword')} fontWeight="lg">
                Return to Previous Page!
              </Link>
              <ShowAlert title="Password Doesn't Match!" display={AlertDisplay}/>
            </form>
          </Box>
          <Box component="footer" sx={{ py: 3 }}>
            <Typography level="body-xs" textAlign="center">
              © EduFundr By Zaid Ahmed & Shashank Mishra {new Date().getFullYear()}
            </Typography>
          </Box>
        </Box>
      </Box>
  );
}