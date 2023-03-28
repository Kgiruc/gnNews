import { useDispatch } from "react-redux"
import { changeResults } from "../app/features/resultsSlice"

function MainContent() {
  const dispath = useDispatch()

  dispath(changeResults(0))

  return (
    <div>wybierz kraj</div>
  )
}

export default MainContent