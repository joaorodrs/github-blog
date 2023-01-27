import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/default'

import Home from './pages/Home'
import PostDetail from './pages/Post'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/post/:id" element={<PostDetail />} />
      </Route>
    </Routes>
  )
}