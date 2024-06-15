import { Header } from "./components/Header";
import { Post } from "./components/Post";

import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Gerson"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil maxime reiciendis tenetur velit laborum nisi cupiditate nam aperiam veniam, vitae optio ipsam, recusandae, perspiciatis quam. Sint animi enim cumque esse."
          />
          <Post
            author="Renata"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil maxime reiciendis tenetur velit laborum nisi cupiditate nam aperiam veniam, vitae optio ipsam, recusandae, perspiciatis quam. Sint animi enim cumque esse."
          />
        </main>
      </div>
    </>
  );
}
