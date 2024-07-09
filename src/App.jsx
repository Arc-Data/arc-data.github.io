import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import ProjectDetail from "./pages/ProjectDetail"
import MainLayout from "./layouts/MainLayout"
import { PageProvider } from "./context/PageContext"

function App() {
	return (
		<BrowserRouter>
		<PageProvider>
			<Routes>
				<Route element={<MainLayout />}>
					<Route path="/" element={<Home/>} />
					<Route path="/projects/:id" element={<ProjectDetail/>} />
				</Route>
			</Routes>
		</PageProvider>
		</BrowserRouter>
	)
}

export default App