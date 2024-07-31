import { render, screen } from '@testing-library/react';
import Lab from './Lab';

test('renders learn react link', () => {
    render(<Lab/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument(); 
});