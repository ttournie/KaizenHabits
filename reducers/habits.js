import { AsyncStorage } from "react-native"
import { getTodayFormatedDate } from '../utils/dates';

const ADD_HABIT = 'ADD_HABIT';
const REMOVE_HABIT = 'REMOVE_HABIT';
const DONE_HABIT = 'DONE_HABIT';
const UNDONE_HABIT = 'UNDONE_HABIT';

// const initial = {
//     habitList: [],
// };

// Testing Data
const initial = {
    habitList: [
        {
            key: 'read',
            name: 'read',
            streak: [
                '1-1-2019',
                '2-1-2019',
                '3-1-2019',
                '4-1-2019',
                '5-1-2019',
                '6-1-2019',
                '18-1-2019',
                '19-1-2019',
                '21-1-2019',
                '22-1-2019',
                '23-1-2019',
                '18-2-2019',
                '19-2-2019',
                '21-2-2019',
                '22-2-2019',
                '23-2-2019',
                '18-3-2019',
                '19-3-2019',
                '21-3-2019',
                '18-12-2019',
                '19-12-2019',
                '21-12-2019',
            ]
        },
        {
            key: 'Gym',
            name: 'Gym',
            streak: [
                '1-1-2019',
                '2-1-2019',
                '23-1-2019',
                '1-2-2019',
                '3-2-2019',
                '8-2-2019',
                '10-2-2019',
                '18-2-2019',
                '19-2-2019',
                '21-2-2019',
                '22-2-2019',
                '23-2-2019',
                '18-3-2019',
                '19-3-2019',
                '21-3-2019',
            ]
        }
    ],
}

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
                        return {...habit, streak: [...habit.streak, getTodayFormatedDate()]}
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
                        return {...habit, streak: habit.streak.filter(item => item !== getTodayFormatedDate())}
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