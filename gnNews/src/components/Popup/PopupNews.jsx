function PopupNews({ newscontent, newsauthor, newsurl, setOpen }) {
  return (
    <div>
        <button onClick={() => setOpen()}>x</button>
        <p>{newscontent}</p>
        <p>{newsauthor}</p>
        <a href={newsurl}>{newsurl}</a>
    </div>
  )
}

export default PopupNews