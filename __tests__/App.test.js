import React from 'react'
import ReactDOM from 'react-dom'
import "../src/setupTests"
import { shallow, mount, render } from 'enzyme'

import App from '../src/App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

describe('App', () => {
  it('set the state with #addTime', () => {
    const wrapper = shallow(<App />)
    wrapper.instance().addTime({minutes: 2, seconds: 10})

    expect(wrapper.state()).toEqual({minutes: 2, seconds: 10})
  })


})
