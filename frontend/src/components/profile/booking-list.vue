<template>
  <div class="bookings-list">
    <booking-preview v-for="(booking,idx) in bookings" :key="idx" :booking="booking"></booking-preview>
  </div>
</template>

<script>
import bookingPreview from "../profile/booking-preview";
export default {
  data() {
    return {
      bookings: null
    };
  },
  async created() {
    await this.$store.dispatch({ type: "loadBookings" });
    var bookings = this.$store.getters.bookings;
    this.bookings = bookings.reverse()
    
  },
  components: {
    bookingPreview
  }
};
</script>

<style>
</style>