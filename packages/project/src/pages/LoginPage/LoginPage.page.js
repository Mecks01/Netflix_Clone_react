import './LoginPage.style.css';
import {Link} from 'react-router-dom'
import * as Yup from 'yup';
import { Formik } from 'formik';
import wait from '../../utils/wait';
import React from "react";
import Background from "../../components/Background.page";
import Footer from '../../components/Footer.page';
import NavBar from '../../components/NavBar.page';
import {
    TextField,
    CardContent,
    Checkbox,
    Grid,
    withStyles,
    FormControlLabel,
    Button
} from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';

const WhiteCheckbox = withStyles({
    root: {
      color: grey[400],
      '&$checked': {
        color: grey[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />)

const CssTextField = withStyles({
    root: {
        '& label': {
            color: '#8c8c8c',
        },
        '& label.Mui-focused': {
            color: '#8c8c8c',
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: '#8c8c8c',
            },
        },
    }
})(TextField);

const Login = () => {
    const [checked, setChecked] = React.useState(true);

    const handleChangeCheckBox = (event) => {
        setChecked(event.target.checked);
    };
    return (
        <>
            <NavBar />
            <Background />
            <Formik
                enableReinitialize
                initialValues={{
                   email: '',
                   password:''
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Merci de corriger votre Email').required('Merci de renseigner votre Email'),
                    password: Yup.string().min(5 , 'Your password must contain between 4 and 60 characters.').max(60,'Your password must contain between 4 and 60 characters.').required('Merci de renseigner votre mot de passe'),
                })}
                onSubmit={async (values, {
                    resetForm,
                    setErrors,
                    setStatus,
                    setSubmitting
                }) => {
                    try {
                        // NOTE: Make API request
                        await wait(200);
                        resetForm();
                        setStatus({ success: true });
                        setSubmitting(false);
                        console.log(values)
                    } catch (err) {
                        console.error(err);
                        setStatus({ success: false });
                        setErrors({ submit: err.message });
                        setSubmitting(false);
                    }
                }}
                >
                {({
                    errors,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                    touched,
                    values
                }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="wrapper">
                            <div className="login_body" >
                                <div className="login_box" >
                                    <h2>Sign In</h2>
                                <CardContent
                                    className="content"
                                >
                                    <Grid
                                        container
                                        spacing={2}
                                        className="container"
                                    >
                                        <Grid
                                            item
                                            md={12}
                                            xs={12}
                                        >
                                            <CssTextField
                                                error={Boolean(touched.email && errors.email)}
                                                helperText={touched.email && errors.email}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.email}
                                                fullWidth
                                                label="Email or phone Number"
                                                name="email"
                                                required
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid
                                            item
                                            md={12}
                                            xs={12}
                                        >
                                            <CssTextField
                                                error={Boolean(touched.password && errors.password)}
                                                helperText={touched.password && errors.password}
                                                type="password"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.password}
                                                fullWidth
                                                label="Password"
                                                name="password"
                                                required
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid
                                            item
                                            md={12}
                                            xs={12}
                                        >
                                            <Button
                                                fullWidth
                                                variant="contained"
                                                color="secondary"
                                                disabled={isSubmitting}
                                                type="submit"
                                            >
                                                Sign in
                                            </Button>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        spacing={1}
                                        className="container"
                                    >
                                        <Grid
                                            item
                                            md={6}
                                            xs={6}
                                        >
                                            <FormControlLabel
                                                control={<WhiteCheckbox checked={checked} onChange={handleChangeCheckBox} name="checked" />}
                                                label="Remember me"
                                                className="textCheckBox"
                                            />
                                        </Grid>
                                        <Grid
                                            item
                                            md={6}
                                            xs={6}
                                        >
                                            <Link to="/" className="textLink">Need help?</Link>
                                        </Grid>
                                        <Grid
                                            item
                                            md={12}
                                            xs={12}
                                        >
                                            <div className="login_fb">
                                                <span><img src={process.env.PUBLIC_URL + 'image/Facebook_icon.png'} alt="facebook"/></span>
                                                <span><a href="/">Login with Facebook</a></span>
                                            </div>
                                        </Grid>
                                        <Grid
                                            item
                                            md={12}
                                            xs={12}
                                        >
                                            <div className="sign_up">
                                                <p>New to Netflix? <a href="/">Sign up now.</a></p>
                                            </div>
                                        </Grid>
                                        <Grid
                                            item
                                            md={12}
                                            xs={12}
                                        >
                                            <div className="terms">
                                                <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="/">Learn more.</a></p>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </div>
                        </div>
                    </div> 
                </form>
            )}
            </Formik>
            <Footer />
        </>
    )
}

export default Login