"use client";

import { io, Socket } from "socket.io-client";

let socket: Socket | null = null;

export const initSocket = () => {
  if (socket) {
    disSocket();
  }
  socket = io(); // Update with your server URL if needed
  return socket;
};

export const disSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};

export const getSocket = () => {
  if (!socket) {
    // throw new Error("Socket not initialized. Call initializeSocket first.");
  }
  return socket;
};
