
export function getTodayFormatedDate() {
    const date = new Date;
    return today = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
}

export function isHabitDoneToday(habit) {
    return !!habit.streak.find(item => item === getTodayFormatedDate());
}

export default getTodayFormatedDate;