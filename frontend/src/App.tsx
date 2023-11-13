import { Route, HashRouter as Router, Routes } from 'react-router-dom'

import LoginPage from './views/login-page'
import PstIndex from './views/pst-index'

function App() {

	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<PstIndex />} />
					<Route path='/login' element={<LoginPage />} />
				</Routes>
			</Router>
		</>
	)
}

export default App
