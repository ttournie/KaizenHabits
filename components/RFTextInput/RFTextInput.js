import PropTypes from 'prop-types';
import React from 'react';
import { TextInput, Text } from 'react-native';

const RFTextInput = ({
  input: { onChange, onBlur, onFocus, value },
  meta: { error, touched, valid }
}) => (
  <React.Fragment>
    <TextInput
      onChangeText={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      value={value}
      style={[{ borderColor: !valid && touched ? 'red' : 'gray' }]}
    />
    {!valid && touched && <Text>{error}</Text>}
  </React.Fragment>
);

RFTextInput.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
}

export default RFTextInput;