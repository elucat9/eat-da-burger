if (process.env.JAWS_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'thh2lzgakldp794r.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: '	kx6t8i8aqdlpk489',
        password: 'umz400fbpc6euvci',
        database: 'tja1gja9o8kbckqx',
    })
}