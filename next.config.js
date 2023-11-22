/** @type {import('next').NextConfig} */
const nextConfig = {
    // Imageタグでsrcに使用する外部ドメインを設定
    images: {
        domains: ['raw.githubusercontent.com'],
    }
}

module.exports = nextConfig
