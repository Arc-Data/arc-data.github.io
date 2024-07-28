import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom"
import Home from './pages/Home'
import ProjectDetail from "./pages/ProjectDetail"
import MainLayout from "./layouts/MainLayout"
import { PageProvider } from "./context/PageContext"
import ScrollToTop from "./components/ScrollToTop"

function App() {
	return (
		<HashRouter>
		<ScrollToTop/>
		<PageProvider>
			<Routes>
				<Route element={<MainLayout />}>
					<Route path="/" element={<Home/>} />
					<Route path="/projects/:id" element={<ProjectDetail/>} />
				</Route>
			</Routes>
		</PageProvider>
		</HashRouter>
	)
}

export default App