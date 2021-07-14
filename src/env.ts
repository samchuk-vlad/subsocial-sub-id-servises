const MB = 1024 ** 2

export const maxFileSizeBytes = parseInt(process.env.IPFS_MAX_FILE_SIZE_BYTES) || 2 * MB

export const maxFileSizeMB = maxFileSizeBytes / MB

export const reqTimeoutSecs = process.env.OFFCHAIN_REQ_TIMEOUT_SECS || 5

export const allowedOrigins = process.env.CORS_ALLOWED_ORIGIN?.split(',').map(x => x.trim()) || ['http://localhost']

export const port = process.env.OFFCHAIN_SERVER_PORT || 3001
