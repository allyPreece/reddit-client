import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Subreddit } from './features/Subreddit/Subreddit';
import { Post } from './features/Post/Post';
import { Header } from './features/Header/Header';
// import { SubredditMenu } from './components/SubredditMenu/SubredditMenu';
// import { SearchResults } from './components/SearchResults/SearchResults';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Subreddit />} />
          {/* <Route path='/search' element={<SearchResults />} /> */}
          <Route path='/:subreddit' element={<Subreddit />} />
          <Route path='/:subreddit/:postId' element={<Post />} />
        </Routes>
        {/* <SubredditMenu /> */}
      </main>
    </div>
  );
}

export default App;