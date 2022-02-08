<template>
  <div>
    <button class="btn">neutral</button>
    <button class="btn btn-primary">primary</button>
    <button class="btn btn-secondary">secondary</button>
    <button class="btn btn-accent">accent</button>
    <button class="btn btn-ghost">ghost</button>
    <button class="btn btn-link">link</button>
  </div>
  <hr/>
  <button @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>renderer/components/Home.vue</code> to test hot module replacement.
  </p>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  setup () {
    const count = ref(0);

    return { count };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
