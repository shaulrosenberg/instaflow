import { HashRouter as Router, Routes, Route } from "react-router-dom"

import PstIndex  from "./views/pst-index"
import LoginPage from './views/login-page'

function App() {

	return (
		<>
			<Router>
				<Routes>
					<Route path='/pst' element={<PstIndex />} />
					<Route path='/login' element={<LoginPage />} />
				</Routes>
			</Router>
		</>
	)
}

export default App
