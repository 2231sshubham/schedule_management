function dateToUnix (params) {
    
    const { date,time} = params
    const dateTime = date + ' ' + time

    const unixDate = new Date(dateTime).getTime()/1000

    return unixDate
} 

module.exports = { dateToUnix }