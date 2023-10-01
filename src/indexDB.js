const dbName = 'search_results_db';
const storeName = 'search_results_store';

export const initializeDB = () => {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(dbName, 1);

    request.onerror = () => {
      reject('Error opening IndexedDB');
    };

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
      }
    };

    request.onsuccess = () => {
      resolve(request.result);
    };
  });
};

export const storeSearchResults = async (results) => {
  const db = await initializeDB();
  const transaction = db.transaction([storeName], 'readwrite');
  const store = transaction.objectStore(storeName);

  for (const result of results) {
    store.add(result);
  }
};

export const getStoredSearchResults = async () => {
  const db = await initializeDB();
  const transaction = db.transaction([storeName], 'readonly');
  const store = transaction.objectStore(storeName);

  return new Promise((resolve, reject) => {
    const request = store.getAll();

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject('Error retrieving search results from IndexedDB');
    };
  });
};
