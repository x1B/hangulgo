<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--primary,
.button--secondary {
  cursor: pointer;
  display: inline-block;
  border-radius: 4px;
  padding: 10px 30px;
}

.button--primary {
  border: 1px solid #3b8070;
  color: #3b8070;
}

.button--primary:hover {
  color: #fff;
  background-color: #3b8070;
}


button.button--option {
  border-radius: 0;
  border-left-width: 0;
  margin: 0;
}
button.button--option:first-of-type {
  border-left-width: 1px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
button.button--option:last-of-type {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.button--secondary {
  border: 1px solid #35495e;
  color: #35495e;
  margin-left: 15px;
}

.button--secondary:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
