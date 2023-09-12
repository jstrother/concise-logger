import { v4 } from 'uuid';

/**
 * uses uuid - v4
 * @returns string
 */

export function generateRandomString() {
  const randomString = v4();
  return randomString;
}
