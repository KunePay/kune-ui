// @flow
/**
 * This util is meant to be used to simplifying throwing errors using only a string.
 * The input string can use a class name within square brackets at the start of it
 * to generate a custom error class for easier debugging with `try...catch`.
 */

class KuneError extends Error {
  constructor(errorClassName: string, ...params) {
    // Pass remaining arguments to Error constructor
    super(...params);

    // Maintains proper stack trace for where our error was thrown
    Error.captureStackTrace(this, KuneError);

    // Custom debugging information
    this.name = errorClassName;
  }
}

/**
 * 
 * @param {message} string 
 * 
 * If message parameter starts with a classname within square brackets,
 * i.e `'[MyCustomErrorClass]'`, said class will be used as thrown Error's
 * `name` property.
 * 
 * The error thrown will be `instanceof KuneError`.
 */
export default function throwKuneError(message: string): void {
  const bracketErrorClassRegex = /^\[([^\]\s]+?)\]/;
  const bracketErrorClass = bracketErrorClassRegex.exec(message);

  if (bracketErrorClass !== null) {
    const errorClass = bracketErrorClass[1];
    const errorMessage = message.replace(/^\[([^\]\s]+?)\]\s*/, '');

    throw new KuneError(errorClass, errorMessage);
  } else {
    throw new Error(message);
  }
};
