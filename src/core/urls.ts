type AppRoute = () => string

export interface AppRoutes {
  root: AppRoute
  newProduct: AppRoute
}

export const urls: AppRoutes = {
  root: () => `/`,
  newProduct: () => `/new`,
}
