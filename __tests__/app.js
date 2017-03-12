import 'react-native';
import React from 'react';
import App from '../app.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('Linking', () => {
    return {
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        openURL: jest.fn(),
        canOpenURL: jest.fn(),
        getInitialURL: jest.fn(),
    }
});

jest.mock('react-native-sound', () => 'Sound');
jest.mock('../components/jukebox', () => 'JukeBox');

it('renders correctly', () => {
  const tree = renderer.create(
    <App />
  );
});