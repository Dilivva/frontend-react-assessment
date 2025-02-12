import React, { ReactElement } from 'react'
import { createHashRouter, RouteObject } from 'react-router-dom'
import ErrorPage from './components/error-page'
import { getDefaultLayout } from './components/layout'
import HomePage from './pages/home'

// Define a custom RouteObject type to handle your specific requirements
interface CustomRouteObject extends Omit<RouteObject, 'children'> {
  Component?: React.FC & { getLayout?: (page: ReactElement) => ReactElement }
  children?: CustomRouteObject[]
}

export const routerObjects: CustomRouteObject[] = [
  {
    path: '/',
    Component: HomePage,
    children: [],
  },
]

export function createRouter(): ReturnType<typeof createHashRouter> {
  const routeWrappers = routerObjects.map((router): RouteObject => {
    const children = router.children?.map((child): RouteObject => {
      const getLayout = child.Component?.getLayout || getDefaultLayout
      const ChildComponent = child.Component!
      return {
        ...child,
        element: getLayout(<ChildComponent />),
        Component: undefined, // Ensure this field is not passed to the router
        ErrorBoundary: ErrorPage,
      }
    })

    const getLayout = router.Component?.getLayout || getDefaultLayout
    const Component = router.Component!
    const page = getLayout(<Component />)

    return {
      ...router,
      element: page,
      Component: undefined, // Ensure this field is not passed to the router
      ErrorBoundary: ErrorPage,
      children, // Attach child routes
    }
  })

  return createHashRouter(routeWrappers)
}
