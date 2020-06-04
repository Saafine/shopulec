import { DBSchema, openDB } from 'idb'
import { ShopItem } from './models'
import { VERSION } from './predefined'

interface ShopulecDB extends DBSchema {
  products: {
    key: 'state'
    value: ShopItem[]
  }
  version: {
    key: 'version'
    value: number
  }
}

const DB_NAME = 'shopulec-db'
const DB_VERSION = 1

async function open() {
  return await openDB<ShopulecDB>(DB_NAME, DB_VERSION, {
    upgrade(db) {
      db.createObjectStore('version')
      db.createObjectStore('products')
    },
  })
}

export async function getProductsFromPersistentStorage(): Promise<ShopItem[]> {
  const db = await open()
  const version: number | undefined = await db.get('version', 'version')
  const products = version === VERSION ? await db.get('products', 'state') : []
  await db.put('version', VERSION, 'version')
  db.close()
  return products || []
}

export async function updatePersistentStorage(
  shopItems: ShopItem[]
): Promise<void> {
  const db = await open()
  await db.put('products', shopItems, 'state')
  db.close()
}
