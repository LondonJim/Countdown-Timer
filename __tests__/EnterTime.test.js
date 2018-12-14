import React from 'react'
import ReactDOM from 'react-dom'
import "../src/setupTests"
import { shallow, mount, render } from 'enzyme'

import EnterTime from '../src/components/EnterTime'

describe("Home", () => {
  it("should render About title",() => {
    const wrapper = mount(<EnterTime />)

    expect(wrapper.contains("Enter Starting Time")).toEqual(true)
  });

});
