import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className = "w-full flex-col flex-center"> 
    <h1 className = "head_text text-center">
        Discover & Share
        <br className = "max-md:hidden"/>
        <span className = "orange_gradient text-center">AI-Powered Prompts</span>
    </h1>
    <p className = "desc text-center">
        PromTopia is a AI open source AI Prompting tool
        for modern world to discover, create and share prompts. 
    </p>
    <Feed/>
    </section>
  )
}

export default Home
