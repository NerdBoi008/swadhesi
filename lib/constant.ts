export const supportPhone = '+1 (123) 456-7890'

export const supportEmail = 'inquiry@swadhesi.com'

export const supportAddress = '123 Main St, City, Country'

export const socialLinks: Array<{
    social: string
    link: string
}> = [
    { social: 'Facebook', link: 'https://facebook.com' },
    { social: 'Instagram', link: 'https://instagram.com' },
    { social: 'Twitter', link: 'https://twitter.com' },
    { social: 'Pinterest', link: 'https://pinterest.com' },
    { social: 'LinkedIn', link: 'https://linkedin.com' },
]

export const footerLinks: Array<{
    heading: string
    links: Array<{ name: string; path: string }>
}> = [
    {
        heading: 'Main Menu',
        links: [
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Products', path: '/products' },
            { name: 'Tops', path: '/tops' },
            { name: 'Dresses', path: '/dresses' },
            { name: 'Co-ords', path: '/co-ords' },
        ],
    },
    {
        heading: 'Support',
        links: [
            { name: 'Contact Us', path: '/' },
            { name: 'Privacy Policy', path: '/about' },
            { name: 'Return & Refund Policy', path: '/products' },
            { name: 'Shipping Policy', path: '/tops' },
            { name: 'Terms & Conditions', path: '/dresses' },
        ],
    },
]