<template>
  <div class="container">
    <div class="timer">
      <div class="text-timer">
        <p>{{currentTime}}</p>
      </div>
      <svg viewBox="0 0 106 106" xmlns="http://www.w3.org/2000/svg">
        <circle cx="53" cy="53" :r="radius" />
        <circle
          cx="53"
          cy="53"
          :r="radius"
          :stroke-dasharray="perimeter"
          :stroke-dashoffset="currentPct"
          class="progress-bar"
        />
      </svg>
    </div>
  </div>
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
      currentPhase: 0,
      currentPct: 0,
      radius: 50
    };
  },
  computed: {
    perimeter(): number {
      return 2 * Math.PI * this.radius;
    },
    currentTime(): string {
      return new Date(this.time).toISOString().slice(14, 19);
    }
  },
  methods: {
    startTimer() {
      this.currentInterval = setInterval(() => {
        this.time = this.time + 10;
        this.setStrokeDashOffset(
          (this.time / this.intervals[this.currentPhase]) * 100
        );
        if (this.time > this.intervals[this.currentPhase]) {
          clearInterval(this.currentInterval);
          this.currentPhase = (this.currentPhase + 1) % this.intervals.length;
          this.time = 0;
          this.currentPct = 0;
          this.startTimer();
        }
      }, 10);
    },
    setStrokeDashOffset(value: number) {
      this.currentPct = ((100 - value) / 100) * this.perimeter;
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
