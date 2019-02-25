<template>
  <div class="container">
    <h1>{{ message }}</h1>
    <button @click="data.isShowing = !data.isShowing">Press For Hooks</button>
    <h3>
      {{data.isShowing}}
    </h3>
    opposite
    <h3>
      {{opposite}}
    </h3>
  <button @click="toggleShow">Press For Mixin</button>
    <h3>
      {{isShowing}}
    </h3>
    opposite
    <h3>
      {{!isShowing}}
    </h3>
    
  </div>
</template>

<script>
import { toggleHook  } from './hooks/hooks.js';
import {toggle} from './mixins/toggle.js'
import Header from './Header.vue';

export default {
  name: 'App',
  data() {
    return {
      message: 'Hooks App Example',
    };
  },
  mixins: [toggle],
 hooks(){
   return toggleHook(true) 
  }
};
</script>

<style scoped>
  .container {
    width: 600px;
    margin: 50px auto;
    text-align: center;
  }
</style>