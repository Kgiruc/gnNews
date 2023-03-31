import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { changeResults } from "../app/features/resultsSlice"

function MainContent() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeResults(0));
  }, []);

  return (
    <div className="main__content">wybierz kraj</div>
  )
}

export default MainContent