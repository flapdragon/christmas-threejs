export default function Overlay({ inside, setInside }) {
  const getTitleFill = () => {
    const classArray = [ "white-fill", "red-fill", "green-fill" ]
    const max = 2
    const min = 0
    return classArray[ Math.floor(Math.random() * (max - min + 1) + min) ]
  }

  return (
    <>
      <header>
        <img draggable={false} width="100%" src="/merry_xmas.svg" className={getTitleFill()} />
      </header>
      <footer className="footer">
        <button
          className="button--explore"
          onClick={() => {
            setInside(!inside)
          }}>
          SCROLL TO LOOK INSIDE
        </button>
        <br />
        Stolen with love by David Dean. Using LumaAI for the outside Gaussian Splatting and BlockadeLabs for internal snow globe.
      </footer>
    </>
  )
}
