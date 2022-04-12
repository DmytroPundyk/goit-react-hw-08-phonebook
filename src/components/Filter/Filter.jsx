import { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { Header2, SearchInput } from './Filter.styled';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selector';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = e => dispatch(changeFilter(e.target.value));

  return (
    <div>
      <Header2>Contacts</Header2>
      Find contacts by name
      <SearchInput type="text" value={filter} onChange={handleChange} />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onchangeFilter: PropTypes.func,
};

export default memo(Filter);
