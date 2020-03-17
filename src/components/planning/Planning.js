import Vue from 'vue'
import './planning.css'

const Planning = Vue.extend({
  name: 'Planning',
  data() {
    return {
      lists: [],
      copyLists: [],
      apprendItem: '',
      isHoveOverX: false,
      hoveWhatItemID: '',
      isEditItem: false,
      editModeCount: 0
    }
  },
  methods: {
    handleSetApprendItem(event) {
      if (event.target.value !== '') {
        this.apprendItem = event.target.value
      }
      return null
    },
    handleSetItemToList(event) {
      if (event.key === 'Enter') {
        if (event.target.value !== '') {
          this.lists.push({
            id: Math.random().toPrecision(3),
            item: this.apprendItem,
            complete: false
          })
          this.apprendItem = ''
        }
        return null
      }
      return null
    },
    handleSetHoveringEnter(passID) {
      this.isHoveOverX = true
      this.hoveWhatItemID = passID
    },
    handleSetHoveringLeave() {
      this.isHoveOverX = false
    },
    handleSetComplete(passID) {
      // console.log('entert from phone');
      let oldLists = this.lists.map((value) => {
        if (value.id === passID) {
          value.complete = !value.complete
        }
        return value
      })
      this.lists = oldLists
    },
    handleRemoveItem(passID) {
      let oldLists = this.lists.filter((value) => {
        if (value.id !== passID) {
          return value
        }
        return null
      })
      this.lists = oldLists
    },
    handleEditItem(event) {
      if (event.type === 'click') {
        if (this.editModeCount !== 2) {
          this.editModeCount = this.editModeCount + 1
          if (this.editModeCount === 2) {
            this.editModeCount = true
          }
        }
      }
    },
    handleShowComplete() {
      let oldLists = this.lists.filter((value) => value.complete ? value : null)
      this.copyLists = oldLists
    },
    handleShowPending() {
      let oldLists = this.lists.filter((value) => !value.complete ? value: null)
      this.copyLists = oldLists
    },
    handleShowAllItem() {
      this.copyLists = []
    }
  },
  render() {
    let renderList = this.lists.map((value) => {
        return (
          <div key={value.id} class="list_items_container"
            onmouseenter={() => this.handleSetHoveringEnter(value.id)} 
            onmouseleave={(event) => this.handleSetHoveringLeave(event, value.id)}
            onclick={(event) => this.handleEditItem(event, value.id)}
          >
            {/* <input class="item_complete_mark_inner" type="checkbox" oninput={() => this.handleSetComplete(value.id)}></input> */}
            <label class="item_complete_mark" style={{backgroundColor: value.complete ? 'lightskyblue': 'white'}} onclick={() => this.handleSetComplete(value.id)}></label>
            <p style={{textDecoration: value.complete ? 'line-through' : 'none', color: value.complete ? 'lightgrey' : 'black' }}>{value.item}</p>
            {this.isHoveOverX && this.hoveWhatItemID === value.id ? (<p onclick={() => this.handleRemoveItem(value.id)}>X</p>) : null}
          </div>
        )
      })

    let renderCopyList = this.copyLists.map((value) => {
      return (
        <div key={value.id} class="list_items_container"
          onmouseenter={() => this.handleSetHoveringEnter(value.id)} 
          onmouseleave={(event) => this.handleSetHoveringLeave(event, value.id)}
          onclick={(event) => this.handleEditItem(event, value.id)}
        >
          <label class="item_complete_mark" style={{backgroundColor: value.complete ? 'lightskyblue': 'white'}} onclick={() => this.handleSetComplete(value.id)}></label>
          <p style={{textDecoration: value.complete ? 'line-through' : 'none', color: value.complete ? 'lightgrey' : 'black' }}>{value.item}</p>
          {this.isHoveOverX && this.hoveWhatItemID === value.id ? (<p onclick={() => this.handleRemoveItem(value.id)}>X</p>) : null}
        </div>
      )
    })

    let renderButtonControl = this.lists.length !== 0 ? (
      <div class="control_container">
        <button class="button" onclick={() => this.handleShowAllItem()}>All</button>
        <button class="button" onclick={() => this.handleShowPending()}>Pending</button>
        <button class="button" onclick={() => this.handleShowComplete()}>Complete</button>
      </div>
    ) : null

    return (
      <div class="planning_container">
        <div>
          <h1 class="planning_title">Planning</h1>
          <input type="text" 
            value={this.apprendItem} 
            oninput={this.handleSetApprendItem} 
            onkeypress={this.handleSetItemToList}
            placeholder="What needs to be done?"/>
        </div>
        <div>
          {this.copyLists.length === 0 ? renderList: renderCopyList}
          {renderButtonControl}
        </div>
      </div>
    )
  }
})

export default Planning