<template>
  <div>
    <v-container>
      <div class="header">
          On page load, todos are loaded before nottodos
      </div>
      <v-card>
        <v-card-title>TODOS ( state.todos.todos )

        </v-card-title>
        <v-divider></v-divider>
        <v-list>
          <v-list-tile v-for="todo in todos" :key="todo.text">
            <v-list-tile-content>
              {{ todo.text }}
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>

      <v-card>
        <v-card-title>TODOS DIFF FN ( state.todos.todos_diff_fn )</v-card-title>
        <v-divider></v-divider>
        <v-list>
          <v-list-tile v-for="todo_diff_fn in todos_diff_fn" :key="todo_diff_fn.text">
            <v-list-tile-content>
              {{ todo_diff_fn.text }}
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
      
      <v-divider />

      <v-card>
        <v-card-title>NOT TODOS (state.nottodos.todos)</v-card-title>
        <v-divider></v-divider>
        <v-list>
          <v-list-tile v-for="nottodo in nottodos" :key="nottodo.text">
            <v-list-tile-content>
              {{ nottodo.text }}
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>

      <v-card>
        <v-card-title>NOT TODOS (state.nottodos.nottodos)</v-card-title>
        <v-divider></v-divider>
        <v-list>
          <v-list-tile v-for="nottodo2 in nottodos2" :key="nottodo2.text">
            <v-list-tile-content>
              {{ nottodo2.text }}
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>

    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'todos',
  // computed: mapState(['currentUser', 'userProfile'])
  computed:{
    ...mapState({
      todos: state => state.todos.todos,
      todos_diff_fn: state => state.todos.todos_diff_fn,
      nottodos: state => state.nottodos.todos,
      nottodos2: state => state.nottodos.nottodos,
      nottodos_diff_fn: state => state.nottodos.todos_diff_fn,
      currentUser: state => state.currentUser,
      userProfile: state => state.userProfile
    }),
  }
}
</script>