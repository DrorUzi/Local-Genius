<template>
  <section class="messenger-container">
    <recent-chats :user="user" :chats="recentChats" @selectChat="selectChat"></recent-chats>
    <chat v-if="selectedChat" :user="user" @sendMsg="sendMsg" :chat="selectedChat"></chat>
  </section>
</template>

<script>
import chat from "./messenger/chat";
import recentChats from "./messenger/recent-chats";
export default {
  components: {
    recentChats,
    chat
  },
  data() {
    return {
      user: null
    };
  },
  methods: {
    selectChat(chat) {
      this.$store.dispatch({ type: "selectChat", chatId: chat._id });
      this.$store.dispatch({ type: "updateChat", chat });
      //12
    },
    sendMsg(msg) {
      this.$store.dispatch({
        type: "sendMsg",
        chatId: this.selectedChat._id,
        msg
      });
    }
  },
  computed: {
    recentChats() {
      return this.$store.getters.chats;
    },
    selectedChat() {
      return this.$store.getters.currChat;
    }
  },
  created() {
    this.$store.dispatch({ type: "loadChats" });
    this.user = this.$store.getters.loggedInUser;
  }
};
</script>