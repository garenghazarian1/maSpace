import Dexie from 'dexie';

const db = new Dexie('todoDatabase');
db.version(1).stores({
  todos: '++id, message'
});

export default db;
