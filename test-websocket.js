// Run: node test-websocket.js

import { io } from 'socket.io-client';

const socket = io('http://localhost:3000/chat', {
  path: '/socket.io',
});

socket.on('connect', () => {
  console.log('Connected:', socket.id);

  socket.emit('message', { text: 'Hello from test script!' }, (response) => {
    console.log('Server response:', response);
    socket.disconnect();
  });
});

socket.on('connect_error', (err) => {
  console.error('Connection failed:', err.message);
});
