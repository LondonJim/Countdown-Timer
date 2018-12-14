import React from 'react'
import ReactDOM from 'react-dom'
import "../src/setupTests"
import { shallow, mount, render } from 'enzyme'

import EnterTime from '../src/components/EnterTime'

describe("EnterTime", () => {
  it("should render statement",() => {
    const wrapper = shallow(<EnterTime />)

    expect(wrapper.contains("Enter Starting Time")).toEqual(true)
  });

  it("should take change state variables: minutes, seconds",() => {
    const wrapper = shallow(<EnterTime />)
    wrapper.find('input').at(0).prop('onChange')({ target: { value: 1 } })
    wrapper.find('input').at(1).prop('onChange')({ target: { value: 15 } })

    expect(wrapper.state()).toEqual({ minutes: 1, seconds: 15})
  })

  it("should take submit changes to addTime",() => {
    let mockAddTime = jest.fn()
    const wrapper = shallow(<EnterTime addTime={mockAddTime}/>)
    const mockEvent = { preventDefault: jest.fn() }
    wrapper.find('input').at(0).prop('onChange')({ target: { value: 2 } })
    wrapper.find('input').at(1).prop('onChange')({ target: { value: 15 } })
    const submitNumbers = wrapper.find('#submit-form')
    submitNumbers.simulate('submit', mockEvent)

    expect(wrapper.state()).toEqual({ minutes: 0, seconds: 0})
  })

});
