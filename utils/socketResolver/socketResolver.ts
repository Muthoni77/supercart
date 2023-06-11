import { io } from "socket.io-client";

const URL = process.env.BACKEND_URL!;
// export const socket = io(URL, {
//   transports: ["websocket"],
// });

export const wssResolver = () => {
  const connectUrl = `ws://localhost:4000`;
  const socket = io(connectUrl, {
    transports: ["websocket"],
  });
  return socket;
};
// export const wssResolver = (namespace) => {
//   const connectUrl = `wss://${
//     initialState.backendUrl.split("//")[1]
//   }${namespace}`;
//   const socket = io.connect(connectUrl, {
//     transports: ["websocket"],
//   });
//   return socket;
// };
