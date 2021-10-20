

let message = "default message";


export const getMessage = () => message;

export const setMessage = (msg) => {

  if (msg.length > 3) {
    message = msg;
  }

};
