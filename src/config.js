module.exports = {
  PORT: process.env.PORT || 9000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DB_URL: process.env.DATABASE_URL || 'postgresql://dunder-mifflin@localhost/blogful',
}