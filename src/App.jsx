import {
	BrowserRouter as Router,
	Route,
	Routes,
} from "react-router-dom";

import PostsPage from "./Pages/PostsPage";
import ChallengeShortPage from "./Pages/ChallengeShortPage";
import ChallengePage from "./Pages/ChallengePage";
import ProfileEditPage from "./Pages/ProfileEditPage";

export default function App() {
	return (
		<Router>

		<Routes>
			{/*<Route path="/login" element={} />*/}
			{/*<Route path="/register" element={} />*/}
			<Route path="/posts" element={<PostsPage/>} />
			<Route path="/challenges" element={<ChallengePage/>} />
			<Route path="/shorts" element={<ChallengeShortPage/>} />
			<Route path="/profile" element={<ProfileEditPage/>} />
			<Route path="welcome" element={<p>Welcome!</p>} />
			{/*<Route path="*" element={<NotFoundPage />} />*/}
		</Routes>
		</Router>
	);
}