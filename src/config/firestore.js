import fb from '@/config/firebase'

const db = fb.firestore()

// date issue fix according to firebase
const settings = {
  timestampsInSnapshots: true
}

db.settings(settings)

const dbs = {
  users: db.collection('users'),
  todos: db.collection('todos'),
  nottodos: db.collection('nottodos')
}

export default dbs
