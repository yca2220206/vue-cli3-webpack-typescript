<template>
  <div class="home">
    <HelloWorld :msg="msg"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  data() {
     return {
       msg: '1234',
     }
  },
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
