import chrono = require('chrono-node');

export const isToday = (dateTime: string) => {
    const parsedDateTime = chrono.parseDate(dateTime);
    if (parsedDateTime) {
        const currentdate = new Date();
        if (currentdate.setHours(0,0,0,0) === parsedDateTime.setHours(0,0,0,0)) {
            return true;
        }
    }
}

export const isInCurrentMonth = (dateTime: string) => {
    const parsedDateTime = chrono.parseDate(dateTime);
    if (parsedDateTime) {
        const currentdate = new Date();
        const curMonth = currentdate.getMonth();
        const curYear = currentdate.getFullYear();

        if (curMonth === (parsedDateTime.getMonth()) && curYear === parsedDateTime.getFullYear()) {
            //in this month
            return true;
        } else {
            //not in this month
            return false;
        }

    }
}

export const getMonthFromDate = (date: Date) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    return monthNames[date.getMonth()]
}

export const GenerateLink = (instrument: any) => {

    let URL = `/is-it-ethical-to-invest-in?`
    if (instrument.NSECode) {
        URL += `NSECode=${instrument.NSECode}&`;
    }
    if (instrument.BSECode) {
        URL += `BSECode=${instrument.BSECode}&`;
    }
    if (instrument.Name) {
        URL += `Name=${instrument.Name}&`;
    }
    if (instrument.Halal) {
        URL += `Halal=1`;
    } else {
        URL += `Halal=0`;
    }

    return encodeURI(URL);
}
