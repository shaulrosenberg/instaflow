import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { PstIndex } from "./views/pst-index"


function App() {

	return (
		<Router>
			<Routes>
				<Route path='/pst' element={<PstIndex />}>
					{/* inner route */}
				</Route>
			</Routes>
		</Router>
	)
}

export default App
