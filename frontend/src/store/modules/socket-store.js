import socket from '@/services/socket.service.js'

// socket.emit('test event', 'this is a testing string')
socket.on('userNotif', (data) =>{
    console.log(data)
})
export default {
    state: {
        
    },
    getters: {
        
    },
    mutations: {

    },
    actions: {
      ///********* needs to happen after login currently in app.vue created()*********/
        createUserSocket(context){
          let userId = context.rootState.userStore.loggedInUser._id
          socket.emit('createUserSocket',userId)
        },

        sendNotif(context, {to,msg}) {
          let notif ={
            to,msg
          }
            socket.emit('sendNotif', notif)
        },
        // getChatHistory(context, {chatId}) {
        //     socket.emit('getHistory', chatId)
        // }
    }
}