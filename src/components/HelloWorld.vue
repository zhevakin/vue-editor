<template>
  <div class="hello">
    <h1 class="text-lg mb-4">Editor</h1>
    <tailwind-editor/>
  </div>
</template>

<script>
  import TailwindEditor from './TailwindEditor'

  export default {
    name: 'HelloWorld',
    components: { TailwindEditor },
    props: {
      msg: String,
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    margin: 0 auto;
    max-width: 520px;
  }
</style>
