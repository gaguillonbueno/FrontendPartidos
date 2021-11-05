<template>
  <div id="home" class="container">
    <Head></Head>
    <Form></Form>
    <List></List>
  </div>
</template>

<script>
import Head from "./../components/Head.vue"
import Form from "./../components/Form.vue"
import List from "./../components/List.vue"

export default {
  name: "Home",
  components: {
    Head,
    Form,
    List,
  },
};
</script>
