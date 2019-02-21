import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, PickerIOS, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';

const RFFrequencyPicker = ({
    input: { onChange, value },
    meta: { error, touched, valid },
    label,
    items
}) => (
    <RNPickerSelect
        hideIcon
        placeholder={{
            label: label,
            value: null,
        }}
        items={items}
        onValueChange={value => onChange(value)}
        value={value}
        style={{ inputIOS: styles.picker }}
    >
        <View style={styles.pickerContainer}>
            <Text style={styles.pickerLabel}>{value ? value : label}</Text>
            <View style={styles.pickerIconContainer}><Ionicons name="md-arrow-dropdown" size={30} /></View>
        </View>
    </RNPickerSelect>
    );

const styles = StyleSheet.create({
    picker: {
        fontSize: 14,
        textAlign: 'center',
        color: 'black',
    },
    pickerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: 15,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 10,
    },
    pickerIconContainer: {
        alignSelf: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    pickerLabel: {
        marginRight: 20,
        fontSize: 18,
        textAlign: 'center',
    },
});

RFFrequencyPicker.propTypes = {
    input: PropTypes.shape({
        onChange: PropTypes.func.isRequired,
        value: PropTypes.string.isRequired,
    }).isRequired,
    label: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default RFFrequencyPicker;