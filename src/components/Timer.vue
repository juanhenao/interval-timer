<template>
  <div class="hello">{{currentTime}}</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Timer",
  props: {
    msg: String
  },
  data: function() {
    return {
      time: 0,
      currentInterval: 0,
      intervals: [10 * 1000, 15 * 1000],
      currentPhase: 0
    };
  },
  computed: {
    currentTime(): string {
      return new Date(this.time).toISOString().slice(14, 19);
    }
  },
  methods: {
    startTimer() {
      this.currentInterval = setInterval(() => {
        this.time = this.time + 1000;
        if (this.time > this.intervals[this.currentPhase]) {
          clearInterval(this.currentInterval);
          this.currentPhase = (this.currentPhase + 1) % this.intervals.length;
          this.time = 0;
          this.startTimer();
        }
      }, 1000);
    }
  },
  mounted: function() {
    this.startTimer();
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
