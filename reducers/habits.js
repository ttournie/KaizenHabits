import { AsyncStorage } from "react-native"

const ADD_HABIT = 'ADD_HABIT';
const REMOVE_HABIT = 'REMOVE_HABIT';
const DONE_HABIT = 'DONE_HABIT';
const UNDONE_HABIT = 'UNDONE_HABIT';

const initial = {
    habitList: [],
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
        case DONE_HABIT: {
            const newState = {...state,
                habitList: state.habitList.map(habit => {
                    if(habit.key === action.habit.key) {
                        return {...habit, done: true}
                    }
                    return habit
                }),
            };
            return newState;
        }
        case UNDONE_HABIT: {
            const newState = {...state,
                habitList: state.habitList.map(habit => {
                    if(habit.key === action.habit.key) {
                        return {...habit, done: false}
                    }
                    return habit
                }),
            };
            return newState;
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

export const checkHabit = (habit) => ({
    type: DONE_HABIT,
    habit
});

export const unCheckHabit = (habit) => ({
    type: UNDONE_HABIT,
    habit
});