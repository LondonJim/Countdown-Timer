import React from 'react'
import ReactDOM from 'react-dom'
import "../src/setupTests"
import { shallow, mount, render } from 'enzyme'

import DisplayTimer from '../src/components/DisplayTimer'

describe("DisplayTimer", () => {
  it("should render statement",() => {
    const wrapper = shallow(<DisplayTimer />)

    expect(wrapper.contains("DisplayTimer")).toEqual(true)
  })
})
