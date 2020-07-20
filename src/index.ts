import chrono = require('chrono-node');

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
    return encodeURI(
      "/is-it-ethical-to-invest-in?"
      + (instrument.NSECode ? "NSECode=" + instrument.NSECode : "") +
      + (instrument.BSECode ? "&BSECode=" + instrument.BSECode : "")
      + (instrument.Name ? "&Name=" + instrument.Name : "")
      + "&Halal=" + (instrument.Halal === null ? 0 : 1)
    )
  }