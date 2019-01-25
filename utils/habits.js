export function getHabit(habitList, habitName) {
    const habit = habitList.find(habit => habit.name === habitName);
    return !!habit? habit : null 
}

export default getHabit;