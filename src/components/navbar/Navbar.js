import Vue from 'vue'
import './navbar.css'

const Navbar = Vue.extend({
  name: 'Navbar',
  created() {
    console.log(this)
  },
  methods: {

    /***  Route to landing page   **/
    handleRoutToHome() {
      if (this.$route.path !== '/') {
        this.$router.push({
          path: '/'
        })
      }
      return null
    }
  },
  render() {
    return (
      <nav style={{display: 'flex', justifyContent: 'center'}} >
        <button
          onClick={this.handleRoutToHome}>
          Home
        </button>
      </nav>
    )
  }
})

export default Navbar
