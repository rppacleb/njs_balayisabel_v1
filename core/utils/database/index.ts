import { __TBL } from "@/core/utils/enum";

// utils/db.js
const DB_NAME = "hms_app_db";
const DB_VERSION = 1;
const STORE_NAME = [__TBL.USERS, __TBL.HOSPITALS];

export default class DB {
  private db: IDBDatabase | null = null;

  constructor() {
    this.initDB();
  }

  private initDB(): Promise<IDBDatabase> {
    if (typeof window === "undefined") {
      return Promise.reject("IndexedDB SSR error");
    }

    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onerror = (event: Event) => {
        reject(
          `Database error: ${(event.target as IDBOpenDBRequest).error?.message}`
        );
      };

      request.onsuccess = (event: Event) => {
        this.db = (event.target as IDBOpenDBRequest).result;
        resolve(this.db);
      };

      request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
        const db = (event.target as IDBOpenDBRequest).result;
        STORE_NAME.forEach((tbl) => {
          if (!db.objectStoreNames.contains(tbl)) {
            if (tbl === "tbl_users") {
              const store = db.createObjectStore(tbl, { keyPath: "email" });
              store.createIndex("email", "email", { unique: true });
            } else {
              db.createObjectStore(tbl, {
                keyPath: "id",
                autoIncrement: true,
              });
            }
          }
        });
      };
    });
  }

  private getDB(): Promise<IDBDatabase> {
    return this.db ? Promise.resolve(this.db) : this.initDB();
  }

  __admin(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.getDB().then((db) => {
        const transaction = db.transaction("tbl_users", "readwrite");
        const store = transaction.objectStore("tbl_users");
        const getRequest = store.get("super@admin.com");

        getRequest.onsuccess = (event: Event) => {
          const existingData = (event.target as IDBRequest).result;

          if (!existingData) {
            const putRequest = store.add({
              fullname: "BIBB Super Admin",
              email: "super@admin.com",
              password: "balayisabelSA",
            });

            putRequest.onsuccess = (event: Event) =>
              resolve((event.target as IDBRequest).result);

            putRequest.onerror = (event: Event) =>
              reject(
                `Error updating data: ${(event.target as IDBRequest).error}`
              );
          } else {
            reject("Record not found");
          }
        };

        getRequest.onerror = (event: Event) =>
          reject(`Error getting data: ${(event.target as IDBRequest).error}`);
      });
    });
  }

  create(__TBL: string, data: any, method = "add"): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getDB().then((db) => {
        const transaction = db.transaction(__TBL, "readwrite");
        const store = transaction.objectStore(__TBL);
        const request = (store as any)[method](data);

        request.onsuccess = (event: Event) => {
          resolve((event.target as IDBRequest).result);
        };

        request.onerror = (event: Event) => {
          reject(`Error adding data: ${(event.target as IDBRequest).error}`);
        };
      });
    });
  }

  read(__TBL: string, method = "get", id = ""): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getDB().then((db) => {
        const transaction = db.transaction(__TBL, "readonly");
        const store = transaction.objectStore(__TBL);
        let request: IDBRequest;
        if (method === "all") {
          request = store.getAll();
        } else {
          request = (store as any)[method](id);
        }

        request.onsuccess = (event: Event) => {
          resolve((event.target as IDBRequest).result);
        };

        request.onerror = (event: Event) => {
          reject(`Error getting data: ${(event.target as IDBRequest).error}`);
        };
      });
    });
  }

  update(
    __TBL: string,
    id: string,
    newData: any,
    method = "put"
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getDB().then((db) => {
        const transaction = db.transaction(__TBL, "readwrite");
        const store = transaction.objectStore(__TBL);

        const getRequest = store.get(id);

        getRequest.onsuccess = (event: Event) => {
          const existingData = (event.target as IDBRequest).result;

          if (existingData) {
            const updatedData = { ...existingData, ...newData };
            const putRequest = (store as any)[method](updatedData);

            putRequest.onsuccess = (event: Event) => {
              resolve((event.target as IDBRequest).result);
            };

            putRequest.onerror = (event: Event) => {
              reject(
                `Error updating data: ${(event.target as IDBRequest).error}`
              );
            };
          } else {
            reject("Record not found");
          }
        };

        getRequest.onerror = (event: Event) => {
          reject(`Error getting data: ${(event.target as IDBRequest).error}`);
        };
      });
    });
  }

  delete(__TBL: string, id: string, method = "delete"): Promise<void> {
    return new Promise((resolve, reject) => {
      this.getDB().then((db) => {
        const transaction = db.transaction(__TBL, "readwrite");
        const store = transaction.objectStore(__TBL);
        const request = (store as any)[method](id);

        request.onsuccess = () => {
          resolve();
        };

        request.onerror = (event: Event) => {
          reject(`Error deleting data: ${(event.target as IDBRequest).error}`);
        };
      });
    });
  }
}

export const __LOCALDB = new DB();
