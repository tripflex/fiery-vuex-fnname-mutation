<template>
  <div>
    <navigation-drawer/>
    <router-view :class="{ 'has-alert': !isOnline }"/>
  </div>
</template>

<script>
import NavigationDrawer from '@/components/NavigationDrawer'

export default {
  name: 'account',
  components: {
    NavigationDrawer
  },
  computed:{
    ...mapState({
      todos: state => state.todos.todos,
      nottodos: state => state.nottodos.todos,
    }),
  }
}
</script>

<style scoped>
.has-alert {
  margin-top: 60px !important;
}
</style>
