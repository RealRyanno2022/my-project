
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import VerifyEmailParedDown from './VerifyEmailParedDown';
import axios from 'axios';

jest.mock('axios'); // Mocks axios module

describe('<VerifyEmailParedDown />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should send an email when "SEND CODE" button is pressed', async () => {
    const email = 'test@example.com';
    const generatedCode = '123456789012'; // This should be a mocked code

    // Manually mock axios.post to provide custom implementation
    axios.post.mockImplementation((url, data) => {
      // Check if the request URL and payload are correct
      if (
        url === 'https://candii-vapes.herokuapp.com/send_email' &&
        data.name === 'Candii' &&
        data.email === email &&
        data.message === `Your verification code is: ${generatedCode}`
      ) {
        // Return a successful response
        return Promise.resolve({ data: 'Email sent successfully' });
      } else {
        // Return a failed response
        return Promise.reject(new Error('Failed to send email'));
      }
    });

    const { getByPlaceholderText, getByText } = render(<VerifyEmail />);

    const emailInput = getByPlaceholderText('Email');
    const sendCodeButton = getByText('SEND CODE');

    // Fill out the form
    fireEvent.changeText(emailInput, email);

    // Press the SEND CODE button
    fireEvent.press(sendCodeButton);

    // Wait for the axios.post mock implementation to resolve
    await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));

    // Expect the axios.post to be called with the right arguments
    expect(axios.post).toHaveBeenCalledWith('https://candii-vapes.herokuapp.com/send_email', {
      name: 'Candii',
      email,
      message: `Your verification code is: ${generatedCode}`,
    });
  });
});