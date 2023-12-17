import Dexie from 'dexie';

export const db = new Dexie ('waffle');
db.version(1).stores({
    saves: 'name'
});