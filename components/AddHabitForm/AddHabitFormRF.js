import { reduxForm } from 'redux-form';
import AddHabitFormView from './AddHabitFormView';

const FORM = 'Add';

const AddHabitFormRF = reduxForm({
  form: FORM,
})(AddHabitFormView);

export default AddHabitFormRF;