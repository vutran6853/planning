import Vue from 'vue'
import './introScreen.css'

const IntroScreen = Vue.extend({
  name: 'IntroScreen',
  methods: {
    handleRouteTo() {
      this.$router.push({
        path: '/whereTo'
      })
    }
  },
  render() {
    return (
      <div class="introScreen_container">
        <h1>Welcome to WhatYourPlan</h1>
        <button onclick={this.handleRouteTo}>Start</button>
      </div>
    )
  }
})

export default IntroScreen