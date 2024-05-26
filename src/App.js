import {Route, Switch,BrowserRouter} from 'react-router-dom'
import Home from './Components/Home'
import AboutUs from "./Components/AboutUs"
import Features from "./Components/Features"
import ContactUs from "./Components/ContactUs"


const App = () => (
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about-us" component={AboutUs}/>
    <Route exact path="/features" component={Features}/>
    <Route exact path="/contact-us" component={ContactUs}/>
  </Switch>
  </BrowserRouter>
)
export default App