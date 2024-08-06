import { useContext } from "react"
import { context } from "../contexts/Theme"

const useTheme=()=>useContext(context)

export default useTheme