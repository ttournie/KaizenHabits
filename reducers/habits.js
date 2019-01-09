import { AsyncStorage } from "react-native"

const ADD_HABIT = 'ADD_HABIT';
const REMOVE_HABIT = 'REMOVE_HABIT';

const initial = {
    habitName: '',
};

export const initialState = { ...initial };

export default function habitReducer(state = initial, action) {
    switch (action.type) {
        case ADD_HABIT: {
            AsyncStorage.setItem('habitName', action.habitName);
            return { ...state, habitName: action.habitName };
        }
        case REMOVE_HABIT: {
            return { ...state, habitName: '' };
        }
        default:
            return state;
    }
}

export const addHabit = (habitName) => ({
    type: ADD_HABIT,
    habitName
});
