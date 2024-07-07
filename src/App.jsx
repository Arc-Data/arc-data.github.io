import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import ProjectDetail from "./pages/ProjectDetail"
import MainLayout from "./layouts/MainLayout"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<MainLayout />}>
					<Route path="/" element={<Home/>} />
					<Route path="/projects/:id" element={<ProjectDetail/>} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App