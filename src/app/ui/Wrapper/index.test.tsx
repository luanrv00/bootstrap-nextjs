import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import React from 'react'
import {Wrapper} from '.'

describe('Wrapper', () => {
  it('render Wrapper', () => {
    render(<Wrapper />)
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})
