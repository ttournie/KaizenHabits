import { reduxForm } from 'redux-form';
import AddHabitFormView from './AddHabitFormView';

const FORM = 'Add';

const validate = ({ habitName}) => {
  const errors = {};
  if (habitName === undefined) {
    errors.habitName = 'Required';
  } else if (habitName.trim() === '') {
    errors.habitName = 'Must not be blank';
  }
  return errors;
};


const AddHabitFormRF = reduxForm({
  form: FORM,
  validate
})(AddHabitFormView);

export default AddHabitFormRF;