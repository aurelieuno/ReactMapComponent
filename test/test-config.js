import React from 'react'
import chai, {expect} from 'chai'
import {mount, shallow, configure} from 'enzyme'
import {spy} from 'sinon'
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()})

global.expect = expect
global.spy = spy
global.mount = mount
global.shallow = shallow
global.React = React
