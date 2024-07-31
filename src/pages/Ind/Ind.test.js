import { render, screen } from '@testing-library/react';
import Ind from './Ind';

test('renders learn react link', () => {
    render(<Ind/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument(); 
});