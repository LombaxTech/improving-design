export const getDateAfterNDays = (n) => {
    return new Date(new Date().getTime() + n * 24 * 60 * 60 * 1000);
};
export const roundMinutes = (date) => {
    date.setHours(date.getHours() + Math.round(date.getMinutes() / 60));
    date.setMinutes(0, 0, 0); // Resets also seconds and milliseconds

    return date;
};

export const smallBigString = (string1, string2) => {
    if (string1 > string2) return string2 + string1;
    return string1 + string2;
};

