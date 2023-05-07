import { openDB } from 'idb';

// Creates the database
const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Adds content to the database
export const putDb = async (content) => {
  const db = await openDB('jate', 1);
  const tx = db.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const id = await store.put({ content });
  await tx.complete;
  console.log(`Added item with id ${id} to the jate database`);
}
// Gets content from the database
export const getDb = async () => {
  const db = await openDB('jate', 1);
  const tx = db.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const items = await store.getAll();
  await tx.complete;
  console.log(`Retrieved ${items.length} items from the jate database`);
  return items;
}

initdb();
