export function getHabit(habitList, habitName) {
    return habitList.find(habit => habit.name === habitName);
}

export default getHabit;