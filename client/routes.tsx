import { Route, createRoutesFromElements } from 'react-router-dom'

import App from './components/App.tsx'
import Home from './components/Home.tsx'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
  </Route>
)