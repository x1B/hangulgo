<template>
  <span>
    <span class="roman">{{ transcript.romanization }}</span>
    <br>
    <span class="ipa">[{{ transcript.ipa }}]</span>
  </span>
</template>

<script>
export default {
  props: {
    transcript: {
      type: Object,
      required: true,
      validator ({ ipa, romanization }) {
        return typeof ipa === 'string' &&
          typeof romanization === 'string';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.roman {
  font-weight: bold;
  opacity: 0.9;
}

.ipa {
  font-family: Helvetica, Arial, sans-serif;
  font-size: .8em;
}
</style>
