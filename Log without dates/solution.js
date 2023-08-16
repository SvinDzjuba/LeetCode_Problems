function checkLogs(log) {
    let days = 1;
    if (log.length === 0) return 0;

    for (let i = 0; i < log.length; i++) {
        let dateInSeconds = parseDateToSeconds(log[i]);
        if ((i - 1) >= 0) {
            let previos = parseDateToSeconds(log[i - 1]);
            if (dateInSeconds < previos || dateInSeconds == previos) {
                days++;
            }
        }
    }
    function parseDateToSeconds(date) {
        let dateTime = date.split(':');
        let seconds = Math.floor(Number(dateTime[0]) * 3600
            + Number(dateTime[1]) * 60
            + Number(dateTime[2]));
        return seconds;
    }
    return days;
}
console.log(checkLogs(["12:00:00","12:00:00","00:00:00"]));