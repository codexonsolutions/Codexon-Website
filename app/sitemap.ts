import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://codexonsolutions.com';

    const routes = [
        '',
        '/about',
        '/services',
        '/projects',
        '/contact',
        '/privacy',
        '/terms',
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));
}
