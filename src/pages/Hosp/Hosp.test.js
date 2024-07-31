import { render, screen } from '@testing-library/react';
import Hosp from './Hosp';

test('renders learn react link', () => {
    render(<Hosp/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument(); 
});