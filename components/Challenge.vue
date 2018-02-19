<template>
  <div class="challenge">
    <h1>{{ step.challenge }}</h1>
    <button
      v-for="option in step.options"
      class="button--secondary button--option"
      :key="option.key">
      <span class="option--roman">{{ option.romanization }}</span>
      <br>
      <span class="option--ipa">[{{ option.ipa }}]</span>
    </button>
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

<style scoped lang="scss">
h1 {
  font-size: 8rem;
}

button {
  font-size: 2rem;
  &:hover * {
    color: white;
  }
}

.option--roman {
  font-weight: bold;
  color: #333;
}
</style>
