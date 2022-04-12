import { FaAddressBook } from 'react-icons/fa';
import styled from 'styled-components';
import UserMenu from '../userMenu/UserMenu';

import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

const Link = styled.a`
  text-decoration: none;
  text-underline-offset: 1px;
  &:hover {
    text-decoration: underline;
    margin-left: 30px;
    color: yellowgreen;
  }
`;
const HeaderName = styled.h1`
  margin: 50px;
  border: 2px solid #000;
  border-radius: 7px;
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
const Text = styled.p`
  color: blueviolet;
`;
const Mail = styled.div`
  font-size: 15px;
`;

const Header = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const userEmail = useSelector(authSelectors.getUserEmail);
  return (
    <>
      <HeaderName>
        <Link href="/">
          PHONEBOOK <FaAddressBook />
        </Link>
        <Text>Create your phonebook</Text>
        <Mail>{isLoggedIn && <UserMenu emailUser={userEmail} />}</Mail>
      </HeaderName>
    </>
  );
};

export default Header;
