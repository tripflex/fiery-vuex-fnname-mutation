import { FieryRecordSave, FieryRecordRemove, fieryMutations, fieryMapMutations, fieryBindings, fieryState } from "fiery-vuex"
import dbs from '@/config/firestore'
const thisDB = dbs.nottodos

class Todo {
  name: string = ""
  done: boolean = false
  done_at: Date | null = null

  save: FieryRecordSave
  remove: FieryRecordRemove
}

const TodoOptions = {
  shared: true,
  type: Todo,
  include: ["name", "done", "done_at"],
  timestamps: ["done_at"],
  record: true,
  recordOptions: {
    save: "save",
    remove: "remove"
  }
}

export default {
  namespaced: true,
  state: {
    currentTodo: null as Todo | null,
    todos: [] as Todo[],
    nottodos: [] as Todo[],
    todos_diff_fn: [] as Todo[],
  },
  mutations: {
    ...fieryMutations({
      nextPage(state, payload, $fiery) {
        $fiery.pager(state.todos).next()
      }
    }),
    // with active record, we don't need $fiery mutation
    finishTodo(state, todo) {
      todo.done = true
      todo.done_at = new Date()
      todo.save()
    },
    ...fieryMapMutations({
      setTodos: "todos",
      setTodosFN: 'todos',
      setTodo: "currentTodo",
      setActualNotTodos: "todos_diff_fn",
      setNotTodos: 'nottodos'
    })
  },
  actions: {
    ...fieryBindings({
      setTodo(context, todoId, $fiery): Todo {
        return $fiery(
          thisDB.doc(todoId),
          TodoOptions,
          "setTodo"
        ) // must list mutation here
      },
      loadTodos(context, payload, $fiery): Todo[] {
        return $fiery(thisDB, TodoOptions, "setNotTodos")
      },
      loadTodosFN(context, payload, $fiery): Todo[] {
        return $fiery(thisDB, TodoOptions, "setTodosFN")
      },
      loadNotTodos(context, payload, $fiery): Todo[] {
        return $fiery(thisDB, TodoOptions, "setNotTodos")
      },
      loadActualNotTodos(context, payload, $fiery): Todo[] {
        return $fiery(thisDB, TodoOptions, "setActualNotTodos")
      },
      searchTodos(context, { done, limit }, $fiery): Todo[] {
        const options = {
          extends: TodoOptions,
          query: q => q.where("done", "==", done),
          limit: limit
        }
        return $fiery(thisDB, options, "setTodos")
      }
    })
  }
}

