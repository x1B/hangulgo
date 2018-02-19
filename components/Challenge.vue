<template>
  <div class="challenge">
    <h1>{{ step.challenge }}</h1>
  </div>
</template>


<script>
export default {
  props: {
    step: {
      type: Object,
      required: true
    }
  }
}
</script>
