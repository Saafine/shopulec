import { DBSchema, openDB } from 'idb'

interface ShopulecDB extends DBSchema {
  products: {
    value: string
    key: string
  }
}

const DB_NAME = 'shopulec-db'
const DB_VERSION = 1

async function open() {
  return await openDB<ShopulecDB>(DB_NAME, DB_VERSION, {
    upgrade(db) {
      db.createObjectStore('products', {
        autoIncrement: true,
      })
    },
  })
}

export async function addProduct(label: string): Promise<void> {
  const db = await open()
  await db.put('products', label, label)
  db.close()
}

export async function deleteProduct(label: string): Promise<void> {
  const db = await open()
  await db.delete('products', label)
  db.close()
}

export async function getProducts(): Promise<string[]> {
  const db = await open()
  const products = await db.getAll('products')
  db.close()
  return products
}
