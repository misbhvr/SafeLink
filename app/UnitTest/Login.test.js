import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Login from '../Login';

describe('Login component', () => {
    it('renders correctly', () => {
        const { getByPlaceholderText, getByText } = render(<Login/>);
        expect(getByPlaceholderText('Email')).toBeTruthy();
        expect(getByPlaceholderText('Password')).toBeTruthy();
        expect(getByText('Login')).toBeTruthy();
        expect(getByText('Don\'t have an account?')).toBeTruthy();
    });
});

it('performs login with valid credentials', () => {

    const mockRouter = { push: jest.fn() };
    const { getByPlaceholderText, getByText } = render(<Login router={mockRouter} />);
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Login');

    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'testpassword');
    fireEvent.press(loginButton);

});