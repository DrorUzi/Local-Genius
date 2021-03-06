'use strict';

import httpService from '@/services/http.service'

// how to get specific values from the bookings db :
// you will need to send a filterBy object :
// to get bookings for specific user  -  _id : <ID>
// to get values for guide  -  isGuide:true  else will be by user
// to get recent  -  recent : 1,
// to get upcoming  -  upcoming : 1,
// to get specific amount  -   amount : <AMOUNT>
async function query(filterBy = {}) {
    let queryStr = ``

    if (filterBy._id){
        if (filterBy.isGuide) queryStr += `toGuideId=${filterBy._id}&`
        else queryStr += `byUserId=${filterBy._id}&`
    }
    for (const param in filterBy) {
        queryStr += `${param}=${filterBy[param]}&`
    }
    const bookings = await httpService.get(`booking/?${queryStr}`)
    return bookings
}

async function add(booking) {
    const bookingConfirm = await httpService.post(`booking`, booking)
    return bookingConfirm
}

export default {
    query,
    add,
}