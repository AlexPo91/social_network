import React from 'react'
import { create } from 'react-test-renderer'
import ProfileStatus from './ProfileStatus'

describe("Profile status Component", ()=>{
  test("Status from props should be in the state", ()=>{
    const component = create(<ProfileStatus status="my post"/>)
    const instatce = component.getInstance()
    expect(instatce.state.status).toBe("my post")
  })
})