import Vue from 'vue'
import './whereTo.css'
 
const WhereTo = Vue.extend({
  name: 'WhereTo',
  data() {
    return {
      pathString: [
        { id: 0, path: 'Planning'}, 
        { id: 1, path: 'Calendar' },
        { id: 2, path: 'Sale2'}, 
        { id: 3, path: 'Estinment2' }
      ]
    }
  },
  methods: {
    handleRouteTo(passPath) {
      this.$router.push({
        path: passPath.toLocaleLowerCase()
      })
    }
  },
  render() {
    let renderWhereToList = this.pathString.map((value) => {
      return (
        <button key={value.id} onclick={() => this.handleRouteTo(value.path)}>{value.path}</button>
      )
    })

    return (
      <div class="whereTo_container">
        <h1>How can we help you?</h1>
        <div>
          {renderWhereToList}
        </div>
      </div>
    )
  }
})

export default WhereTo