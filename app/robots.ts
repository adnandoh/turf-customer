import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/_next/', '/admin/'],
        },
        sitemap: 'https://turfngroup.com/sitemap.xml',
        host: 'https://turfngroup.com',
    }
}