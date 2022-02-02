import useGame from "../hooks/useGame";


const Game = () => {

  const { title, year } = useGame()
  return (
    <>
      <h1>Game Component</h1>
      <p>Title: {title}</p>
      <p>Year: {year}</p>
    </>
  )
}

export default Game;