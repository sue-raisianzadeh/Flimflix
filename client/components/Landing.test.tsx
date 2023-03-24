import Landing from "./Landing"
import { render, screen } from '@testing-library/react'


test('to have Dev Flicks in h1', () => {
    render(<Landing />) 
    const title = screen.getByText("Dev Flicks")
    console.log(title);
    
    expect(title).toMatch('Dev Flicks')})
