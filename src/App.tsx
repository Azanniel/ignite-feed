import { Header } from './components/Header';

import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Siderbar';

export function App() {
  return (
    <div>
      <Header />
  
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          conteudo
        </main>
      </div>
    </div>
  )
}