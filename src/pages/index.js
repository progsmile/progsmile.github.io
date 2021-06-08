import * as React from "react"
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <p>Добро пожаловать!</p>
        <p>Этот блог - записки, конспекты, техники, которые применяются в прогрессивных психотерапиях указанных выше.</p>
        <p>Делюсь тем что было полездно для меня.</p>

        <h3>Все статьи</h3>
        <ul>
          <li>
            <a href={'/articles/parasympathetic-breath'}>Парасимпатическое дыхание</a>
          </li>
        </ul>
      </main>
    </Layout>
  )
}

export default IndexPage
