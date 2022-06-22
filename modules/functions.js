

/**
 * Returns if the server is running in production mode or not
 * @returns {boolean}
 */
const isProd = () => { return process.env.NODE_ENV === 'production'; }
export { isProd };