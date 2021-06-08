import * as React from "react"
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <p>Добро пожаловать!</p>
        <p>Этот блог - записки, конспекты, техники, которые применяются в прогрессивных психотерапиях указанных выше.</p>
        <p>Записываю всё для себя, чтобы лучше понимать происходящее.</p>

        <h3>Все статьи</h3>
        <ul>
          <li><a href={'/articles/parasympathetic-breath'}>Парасимпатическое дыхание для увеличения силы воли</a></li>
          <li><a href={'/articles/inner-trigger'}>Триггер - только внутренний</a></li>
        </ul>
      </main>
    </Layout>
  )
}

export default IndexPage
