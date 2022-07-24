import { Route, Routes } from 'react-router-dom';
import Contact from 'routes/Contact';
import Home from 'routes/Home';
import Layout from 'routes/Layout';
import Projects from 'routes/Projects';

interface Page {
  name: string
  component: JSX.Element
}

const pages: Page[] = [
  {name: "home", component: <Home />},
  {name: "projects", component: <Projects />},
  {name: "contact", component: <Contact />},
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
