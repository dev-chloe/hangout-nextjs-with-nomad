const API_KEY = process.env.API_KEY;

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: false
      },
      {
        source: "/old-blog/:path*",
        destination: "/new-blog/:path*",
        permanent: false
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
      }
    ]
  }
}