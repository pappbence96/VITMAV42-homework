const config = {
  app: {
    port: 8080,
  },
  admin: {
    username: 'admin',
    password: 'admin',
  },
  session: {
    secret: 'asdasö1oihadovhaouoi1',
    resave: false,
    saveUninitialized: false,
  },
  db: {
    host: 'mongodb://localhost/ISHCB6',
  },
}

export default config
