import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SignupForm from '../components/signupForm/SignupForm';

const Signup = () => {
  return (
    <Container maxWidth="lg">
      <Grid item xs={12} sm={6} md={6} sx={{ margin: '0 auto' }}>
        <SignupForm />
      </Grid>
    </Container>
  );
};

export default Signup;
