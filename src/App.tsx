
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {PuzzlePage} from './pages/puzzle-page';
import {GiftBox} from './pages/gift-box';
import {AgePage} from './pages/age-page';
import {PhotoQuiz} from './pages/photo-quiz';
import {Footer} from './components/footer';
import {CasinoPage} from './pages/casino-page';
import {FinalPage} from './pages/final-page';

import styles from './App.module.scss';

const App = () => {
  return (
    <div className={`${styles['app-wrapper']} ${styles.bg}`}>
      <div className={styles.lightLayer} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GiftBox nextRoute="/before-we-start" />} />
          <Route path="/before-we-start" element={<AgePage nextRoute="/puzzle" />} />
          <Route path="/puzzle" element={<PuzzlePage nextRoute="/photo-quiz" />} />
          <Route path="/photo-quiz" element={<PhotoQuiz nextRoute="/casino-forecasts" />} />
          <Route path="/casino-forecasts" element={<CasinoPage nextRoute="/my-message-to-you" />} />
          <Route path="/my-message-to-you" element={<FinalPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  )
}

export default App
