export const routesDB = async (props) => {
  const indexedDB =
    window.indexedDB ||
    window.mozIndexedDB ||
    window.webkitIndexedDB ||
    window.msIndexedDB ||
    window.shimIndexedDB;

  const request = indexedDB.open("__chalo", 1);

  request.onerror = (event) => {
    console.log("An error occurred with IndexedDB");
    console.error(event);
  };

  request.onupgradeneeded = () => {
    const db = request.result;
    db.createObjectStore("routes", {
      keyPath: "routeId",
    });
  };

  return new Promise(async (resolve, reject) => {
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction("routes", "readwrite");
      const store = transaction.objectStore("routes");
      const idQuery = store.getAll();

      idQuery.onsuccess = async () => {
        let value = props?.value;
        let remove = props?.remove;
        let add = props?.add;
        const result = idQuery.result;
        if (value && remove) {
          const routeIndex = result.findIndex(
            (res) => res.routeId === value.routeId
          );
          const deleteRoute = store.delete(result[routeIndex].routeId);
          deleteRoute.onsuccess = function () {
            console.log("Route has been removed");
            const routes = store.getAll();
            routes.onsuccess = async () => {
              resolve(routes.result);
            };
          };
        } else if (value && add) {
          store.put(value);
          const routes = store.getAll();
          routes.onsuccess = async () => {
            resolve(routes.result);
          };
        } else {
          const result = idQuery.result;
          resolve(result);
        }
      };

      transaction.onclose = () => {
        db.close();
      };
    };
  });
};
