import Vue from 'vue'
import './calendar.css'

const Calendar = Vue.extend({
  name: 'Calendar',
  data() {
    return {
      isActive: false,
      weekWord: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      selectedDay: 10
    }
  },
  methods: {
    handleRenderDay() {
      let dayStartNum = 1
      let dayEndNum = 31
      let htmlTemplet = []
      for (let i = dayStartNum; i <= dayEndNum; i++) {
        if (i === this.selectedDay) {
          htmlTemplet.push(
            <li key={i}><span class="active">{i}</span></li>
          )
        } else {
          htmlTemplet.push(
            <li key={i} onclick={() => this.handleSetActive(i)}>{i}</li>
          )
        }
      }
      return htmlTemplet
    },
    handleSetActive(passDays) {
      console.log('object');
      this.selectedDay = passDays
    } 
  },
  render() {
    let renderWeek = this.weekWord.map((value) => (
      <li key={value}>{value}</li>
    ))

    return (
      <div class="calendar_container">
        <div class="month">
          <ul>
            <li class="prev">&#10094;</li>
            <li>March 2020</li>
            <li class="next">&#10095;</li>
          </ul>
        </div>

        <ul class="weekdays">
          {renderWeek}
        </ul>

        <ul class="days">
          {/* <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li><span class="active">10</span></li>
          <li>11</li>
          <li>12</li>
          <li>13</li>
          <li>14</li>
          <li>15</li>
          <li>16</li>
          <li>17</li>
          <li>18</li>
          <li>19</li>
          <li>20</li>
          <li>21</li>
          <li>22</li>
          <li>23</li>
          <li>24</li>
          <li>25</li>
          <li>26</li>
          <li>27</li>
          <li>28</li>
          <li>29</li>
          <li>30</li>
          <li>31</li> */}
          {this.handleRenderDay()}
        </ul>
      </div>
    )
  }
})

export default Calendar
