import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Home = () => (
  <Layout>
    <SEO title="Home" />
    <div className="intro">
      <h1>Hi there <span role="img" aria-label="greeting">👋</span></h1>
      <h2>My name is Liang Sun.</h2>
      <p><span role="img" aria-label="role">👨🏻‍💻</span> I am a web developer.</p>
      <p><span role="img" aria-label="location">📍</span> Located in Espoo, Finland.</p>
      <p><span role="img" aria-label="skills">✌️</span> Developing both in frontend and backend.</p>
      <p><span role="img" aria-label="languages">🚀</span> Preferable with PHP, Golang, Ruby, Python and Javascript.</p>
      <p><span role="img" aria-label="hobbies">❤️</span> Love chess, reading, fishing, photographing, and many sports.</p>
    </div>
  </Layout>
)

export default Home
