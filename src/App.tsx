import { Route, Routes } from 'react-router-dom';
import Home from 'routes/Home';
import Layout from 'routes/Layout';

interface Page {
  name: string
  component: JSX.Element
}

const pages: Page[] = [
  {name: "projects", component: <p>Projects</p>},
  {name: "contact", component: <p>Contact</p>},
]

function App() {
  return (
      <Routes>
        <Route
          path='*'
          element={<Layout pages={pages} />}
        >
          <Route index element={<Home />} />
          {pages.map(page => { return <Route key={page.name} path={page.name} element={page.component} />})}
        </Route>
      </Routes>
  );
}

export default App;
