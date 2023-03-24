import Landing from "./Landing"
import { render, screen } from '@testing-library/react'

test('to have Dev Flicks in h1', () => {
    const expected = render(<Landing />)
    const initial = screen.getByRole('heading', {level: 1})
    expect(initial).toBe(expected)})
