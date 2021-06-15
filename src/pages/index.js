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
          <li><a href={'/articles/cognitive-bias'}>Когнитивные искажения</a></li>
          <li><a href={'/articles/theory-of-mind'}>Theory of Mind (ToM) / чтение мыслей, чувств / интуиция</a></li>
          <li><a href={'/articles/inner-trigger'}>Триггер - только внутренний</a></li>
          <li><a href={'/articles/parasympathetic-breath'}>Парасимпатическое дыхание для увеличения силы воли</a></li>
        </ul>
      </main>
    </Layout>
  )
}

export default IndexPage
