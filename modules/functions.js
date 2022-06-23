/**
 * Returns if the server is running in production mode or not
 * @returns {boolean}
 */
const isProd = process.env.NODE_ENV === 'production';
export { isProd };