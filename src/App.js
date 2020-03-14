import Vue from 'vue'
import './app.css'
import Navbar from './components/navbar/Navbar'

const App = Vue.extend({
  name: 'App',
  render() {
    return (
      <div class="app_container">
        {/* <Navbar /> */}
        <router-view></router-view>
      </div>
    )
  }
})

export default App