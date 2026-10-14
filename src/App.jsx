import FeedbackForm from "./components/declarative-ui"
import ShoppingCart from "./components/state-structure"
import Accordion from "./components/state-lifting"
import Scoreboard from "./components/preserve-resetting-state"

import ShoppingCartUseReducer
 from "./components/reducer"
export default function App(){
  return(
    <>
    <FeedbackForm/>
    <ShoppingCart/>
    <Accordion />
    <Scoreboard />

    <ShoppingCartUseReducer/>
    </>
  )
}