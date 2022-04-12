import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';

const UserPage = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5} md={4}>
          <ContactForm />
          <Filter />
        </Grid>
        <Grid item xs={12} sm={7} md={8}>
          <ContactList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserPage;
