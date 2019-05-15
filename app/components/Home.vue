<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br/>
    <router-link class="button" to="/page">avancer</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Bienvenue aventurier !'
    };
  }
};
</script>
