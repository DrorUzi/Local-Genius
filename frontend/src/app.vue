<template>
  <div id="app">
    <main-header></main-header>
    <section class="main">
      <router-view />
      <a v-if="isScroll" class="scroll-up" href="#" v-scroll-to="{el:'#app', force:false}">
        <img class="arrow-up" src="@/assets/img/arrow-up.png" />
      </a>
    </section>
    <main-footer></main-footer>
    <mobile-nav></mobile-nav>
  </div>
</template>

<script>
import mainHeader from "./components/main-header";
import mainFooter from "./components/main-footer";
import mobileNav from "./components/mobile-nav";
import pushNotifService from "./services/push.notif.service";
export default {
  data() {
    return {
      isScroll: false
    };
  },
  async created() {
    if (this.$store.getters.loggedInUser){
      this.$store.dispatch({ type: "createUserSocket" });
    await this.$store.dispatch({ type: "loadUsers" });
    await this.$store.dispatch({ type: "loadCities" });
    await this.$store.dispatch({ type: "loadNotifs" });
    }
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("beforeunload", () => {
      window.removeEventListener("scroll", this.handleScroll);
      this.$store.dispatch("deleteUserSocket");
    });
  },
  components: {
    mainHeader,
    mobileNav,
    mainFooter
  },
  methods: {
    handleScroll() {
      this.isScroll = window.scrollY > 500;
    }
  }
};
</script>