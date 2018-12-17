import React from 'react'
import ReactDOM from 'react-dom'
import "../src/setupTests"
import { shallow, mount, render } from 'enzyme'

import DisplayTimer from '../src/components/DisplayTimer'

describe("DisplayTimer", () => {
  it("should render statement",() => {
    let mockPropsTime = jest.fn(() => ({ minutes: 1, seconds: 10 }))
    const wrapper = mount(<DisplayTimer time={mockPropsTime}/>)

    expect(wrapper.contains("DisplayTimer ")).toEqual(true)
  })

  it("should take time and convert to digital MM:SS format", () => {
    let mockPropsTime = jest.fn(() => ({ minutes: 1, seconds: 10 }))
    const wrapper = mount(<DisplayTimer time={mockPropsTime}/>)

    expect(wrapper.contains("01:10"))
  })

})
