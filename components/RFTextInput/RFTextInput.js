import PropTypes from 'prop-types';
import React from 'react';
import { TextInput } from 'react-native';

const RFTextInput = ({ input: { onChange, value }}) => ( 
  <TextInput
    onChangeText={onChange}
    value={value}
  />
);

RFTextInput.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
}

export default RFTextInput;