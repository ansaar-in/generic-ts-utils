import chrono = require('chrono-node');

export const isToday = (dateTime: string) => {
    const parsedDateTime = chrono.parseDate(dateTime);
    if (parsedDateTime) {
        const currentdate = new Date();
        if (currentdate.setHours(0, 0, 0, 0) === parsedDateTime.setHours(0, 0, 0, 0)) {
            return true;
        }
    }
}

/**
 * Function to parse input as date
 * @param dateTime date time
 */
export const parseDate = (dateTime: string) => {
    return chrono.parseDate(dateTime);
}

/**
 * Factory function to tell if the time stamp passed as parameter has passed or not
 * @function hasTimePassed
 * @param dateTime the timestamp to compare with
 */
export const hasTimePassed = (dateTime: string) => {
    const parsedDateTime = chrono.parseDate(dateTime);
    if (parsedDateTime) {
        const currentdate = new Date();
        if (currentdate.getTime() < parsedDateTime.getTime()) {
            return true;
        }
    }
}

/**
 * Factory function to tell if the time stamp passed as parameter is future or not
 * @function isTimeFuture
 * @param dateTime the timestamp to compare with
 */
export const isTimeFuture = (dateTime: string) => {
    const parsedDateTime = chrono.parseDate(dateTime);
    if (parsedDateTime) {
        const currentdate = new Date();
        if (currentdate.getTime() > parsedDateTime.getTime()) {
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

/**
 * Function to round a number to 2 decimals
 * @function RoundDecimalsTo2
 * @param number decimal number to round
 * @returns number rounded to 2 decimals
 */
export const RoundDecimalsTo2 = (number) => {
    return Math.round((number + Number.EPSILON) * 100) / 100;
}

/**
 * Function to suggest a profitable stock sale price
 * @function SuggestStockSalePrice
 * @param avgPrice average price at which the account holder purchased the shares
 * @param upperCircuitLimit the upper circuit limit for the instrument / stock
 * @returns suggestedStockSalePrice
 */
export const SuggestStockSalePrice = (avgPrice, upperCircuitLimit) => {
    if (avgPrice < upperCircuitLimit) {
        let suggestion = RoundDecimalsTo2(((upperCircuitLimit - avgPrice) / 2) + avgPrice);
        // tick = 0.05 according to Zerodha
        const suggestionCentury = suggestion * 100,
            tick = suggestionCentury % 5;
        if (tick !== 0) {
            suggestion = (suggestionCentury - tick) / 100;
        }
        return suggestion;
    }
}

export const sleep = (ms: number) => {
    return new Promise((res, rej) => {
        setTimeout(async () => {
            res();
        }, ms);
    });
}
