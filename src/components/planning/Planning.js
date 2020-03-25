import Vue from 'vue'
import './planning.css'
import { constants } from '../../store/store'

const { action } = constants

const Planning = Vue.extend({
  name: 'Planning',
  data() {
    return {
      apprendItem: '',
      isHoveOverX: false,
      hoveWhatItemID: '',
      isEditItem: false,
      editModeCount: 0,
      isShowComplete: false,
      isShowAll: true,
      isShowPending: false
    }
  },
  mounted() {
    console.log('this.$store', this.$store)
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
          this.$store.dispatch(constants.action.setNewItemToList, {
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
      this.$store.dispatch(action.setItemComplete, passID)
    },
    handleRemoveItem(passID) {
      this.$store.dispatch(action.removeItemFromList, passID)
    },
    handleShowComplete() {
      this.$store.dispatch(action.setShowCompleteItems)
      this.isShowAll = false
      this.isShowComplete = true
    },
    handleShowPending() {
      this.$store.dispatch(action.setShowPendingItems)
      this.isShowPending = true
      this.isShowComplete = false
      this.isShowAll= false
    },
    handleShowAllItem() {
      this.isShowAll = true,
      this.isShowComplete = false
    },
  },
  computed: {
    copyLists: {
      get() {
        return this.$store.getters.showCopyLists
      }
    }
  },
  render() {
    // console.log('this', this.$store)
    let renderList = this.$store.state.lists.map((value) => {
        return (
          <div key={value.id} class="list_items_container"
            onmouseenter={() => this.handleSetHoveringEnter(value.id)} 
            onmouseleave={(event) => this.handleSetHoveringLeave(event, value.id)}
          >
            {/* <input class="item_complete_mark_inner" type="checkbox" oninput={() => this.handleSetComplete(value.id)}></input> */}
            <label class="item_complete_mark" style={{backgroundColor: value.complete ? 'lightskyblue': 'white'}} onclick={() => this.handleSetComplete(value.id)}></label>
            <p style={{textDecoration: value.complete ? 'line-through' : 'none', color: value.complete ? 'lightgrey' : 'black' }}>{value.item}</p>
            {this.isHoveOverX && this.hoveWhatItemID === value.id ? (<p onclick={() => this.handleRemoveItem(value.id)}>X</p>) : null}
          </div>
        )
      })

    let renderCopyList = this.isShowComplete ? this.copyLists.map((value) => {
      console.log('object', value);
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
    }) : null

    let renderButtonControl = this.$store.state.lists.length !== 0 ? (
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
          {this.isShowAll ? renderList : renderCopyList}
          {renderButtonControl}
          
        </div>
      </div>
    )
  }
})

export default Planning