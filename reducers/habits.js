import { AsyncStorage } from "react-native"

const ADD_HABIT = 'ADD_HABIT';
const REMOVE_HABIT = 'REMOVE_HABIT';

const initial = {
    habitList: [],
    habitName: '',
};

export const initialState = { ...initial };

export default function habitReducer(state = initial, action) {
    switch (action.type) {
        case ADD_HABIT: {
            let newState = { ...state};
            if(state.habitList) {
                newState = { ...state, habitList: [...state.habitList, action.habit] }
            } else {
                newState = { ...state, habitList: [action.habit] }
            }
            AsyncStorage.setItem('habitList', JSON.stringify(newState.habitList));
            return newState;
        }
        case REMOVE_HABIT: {
            return { ...state, 
                habitList: state.habitList.filter(habit => habit.key !== action.habit.key)
            };
        }
        default:
            return state;
    }
}

export const addHabit = (habit) => ({
    type: ADD_HABIT,
    habit
});

export const removeHabit = (habit) => ({
    type: REMOVE_HABIT,
    habit
});