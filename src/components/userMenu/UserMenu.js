import React from 'react';
import PropTypes from 'prop-types';
import LoadingButton from '@mui/lab/LoadingButton';
import { MdOutlineLogout } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import styled from '@emotion/styled';

const UserName = styled.span`
  text-transform: uppercase;
  display: flex;
  align-items: center;
`;

const UserMenu = ({ emailUser }) => {
  const dispatch = useDispatch();
  return (
    <UserName>
      {emailUser}
      <LoadingButton
        type="click"
        onClick={() => dispatch(authOperations.logOutOperation())}
        variant="outlined"
        size="small"
        endIcon={<MdOutlineLogout />}
        sx={{ ml: 2 }}
      >
        Logout
      </LoadingButton>
    </UserName>
  );
};

UserMenu.propTypes = {
  emailUser: PropTypes.string.isRequired,
};

export default UserMenu;
