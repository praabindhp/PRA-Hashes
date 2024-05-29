/**
 * The crypto module provides cryptographic functionality that includes a set of wrappers for OpenSSL's hash, HMAC, cipher, decipher, sign, and verify functions.
 * @namespace crypto
 */

const crypto = require("crypto");

/**
 * Calculates the MD5 hash of the given input.
 *
 * @param {string} input - The input string to be hashed.
 * @returns {string} The MD5 hash of the input.
 */
function hashWithMD5(input) {
  return crypto.createHash("md5").update(input).digest("hex");
}

/**
 * Hashes the input using the SHA256 algorithm.
 *
 * @param {string} input - The input to be hashed.
 * @returns {string} The hashed value in hexadecimal format.
 */
function hashWithSHA256(input) {
  return crypto.createHash("sha256").update(input).digest("hex");
}

/**
 * Hashes the input using SHA512 algorithm.
 * @param {string} input - The input to be hashed.
 * @returns {string} The hashed value in hexadecimal format.
 */
function hashWithSHA512(input) {
  return crypto.createHash("sha512").update(input).digest("hex");
}

/**
 * Calculates the PRA256 hash of the given input.
 *
 * @param {string} input - The input string to be hashed.
 * @returns {string} The PRA-256 hash of the input.
 */
function pra256(input) {
  const md5Hash = hashWithMD5(input);
  const sha512Hash = hashWithSHA512(md5Hash);
  const pra256Hash = hashWithSHA256(sha512Hash);
  return pra256Hash;
}

/**
 * Calculates the PRA512 hash of the given input.
 *
 * @param {string} input - The input string to be hashed.
 * @returns {string} The PRA512 hash of the input.
 */
function pra512(input) {
  const md5Hash = hashWithMD5(input);
  const sha256Hash = hashWithSHA256(md5Hash);
  const pra512Hash = hashWithSHA512(sha256Hash);
  return pra512Hash;
}

module.exports = { pra512, pra256 };
