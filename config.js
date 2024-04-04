export const sqlConfig = {  
    server: '192.168.1.50',
    port: 1433,
    user: 'Sa',
    password: '01022007',
    database: 'Sesi',
    options: {
      enableArithAbort : true,
      encrypt: false,
      trustServerCertificate: true,
    },
    connectionTimeout : 5000,
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
  }
  