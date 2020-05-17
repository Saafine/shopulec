type AppRoute = () => string

export interface AppRoutes {
  root: AppRoute
  list: AppRoute
}

export const urls: AppRoutes = {
  root: () => `/`,
  list: () => `/list`,
}
