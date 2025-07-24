export const COMPANY_INFO = {
  name: 'Heat Pumps Now',
  phone: '(626) 622-2009',
  email: 'support@heatpumps-now.com',
  address: {
    street: '1986 Walnut Street',
    city: 'La Verne',
    state: 'CA',
    zip: '91750',
    full: '1986 Walnut Street, La Verne, CA 91750'
  },
  serviceAreas: ['La Verne', 'Pomona', 'Claremont', 'San Dimas'],
  socialMedia: {
    // Add social media links when available
  }
} as const

export const SEO_CONFIG = {
  title: 'Heat Pumps Now - Revolutionizing HVAC Through Radical Transparency',
  description: 'California\'s most transparent HVAC company. We share our technical expertise openly, empower homeowners with knowledge, and deliver unparalleled inverter heat pump installations.',
  keywords: [
    'heat pump installation',
    'inverter heat pumps',
    'HVAC California',
    'La Verne HVAC',
    'heat pump water heaters',
    'air sealing',
    'building performance',
    'whole home filtration',
    'transparent HVAC pricing'
  ] as string[],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Heat Pumps Now',
  }
} as const

export const NAVIGATION_ITEMS = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Services',
    href: '/services',
    children: [
      { name: 'Inverter Heat Pumps', href: '/services/inverter-heat-pumps' },
      { name: 'Heat Pump Water Heaters', href: '/services/heat-pump-water-heaters' },
      { name: 'Air Sealing', href: '/services/air-sealing' },
      { name: 'HVAC Servicing & Repair', href: '/services/hvac-repair-service' },
      { name: 'Whole Home Water Filtration', href: '/services/whole-home-water-filtration' },
      { name: 'Healthy Home Solutions', href: '/services/healthy-home-solutions' },
    ],
  },
  {
    name: 'Knowledge Base',
    href: '/knowledge',
    children: [
      { name: 'How to Install Ducting', href: '/knowledge/how-to-install-ducting' },
      { name: 'How to Maintain Our Systems', href: '/knowledge/how-to-maintain-systems' },
      { name: 'How We Install', href: '/knowledge/how-we-install' },
      { name: 'Rules for Airflow', href: '/knowledge/rules-for-airflow' },
      { name: 'Heat Load Calculation', href: '/knowledge/heat-load-calculation' },
      { name: 'Why Heat Pumps', href: '/knowledge/why-heat-pumps' },
    ],
  },
  {
    name: 'Transparency',
    href: '/transparency',
    children: [
      { name: 'How Our Pricing Works', href: '/transparency/pricing' },
      { name: 'Portfolio', href: '/transparency/portfolio' },
      { name: 'Project Template', href: '/transparency/project-template' },
      { name: 'Rebates', href: '/transparency/rebates' },
    ],
  },
  {
    name: 'Our Mission',
    href: '/about',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
  {
    name: 'FAQ',
    href: '/faq',
  },
] as const

export const CORE_SERVICES = [
  {
    id: 'inverter-heat-pumps',
    name: 'Inverter Heat Pumps',
    icon: '🌡️',
    description: 'Variable-speed technology that adapts to your exact needs, delivering unmatched efficiency and precision comfort control.',
    featured: true,
    benefits: [
      { title: 'Superior Efficiency', description: '25+ SEER ratings with real-world performance data' },
      { title: 'Transparent Pricing', description: 'Direct importing eliminates markup mysteries' },
      { title: 'Technical Excellence', description: 'Proper load calculations and system optimization' },
    ],
    stats: [
      { value: '25+ SEER', label: 'Peak Efficiency' },
      { value: '90%', label: 'Modulation Range' },
      { value: '±1°F', label: 'Temperature Control' },
    ],
  },
  {
    id: 'heat-pump-water-heaters',
    name: 'Heat Pump Water Heaters',
    icon: '💧',
    description: 'Complete whole-home electrification. 3-4x more efficient than traditional water heaters, perfectly integrated with your HVAC system.',
    integrationTags: [
      '🔗 Integrates with HVAC for maximum efficiency',
      '💰 Rebate optimization expertise included',
    ],
  },
  {
    id: 'hvac-repair-service',
    name: 'Comprehensive HVAC Servicing & Repair',
    icon: '🔧',
    description: 'Specialized expertise in inverter and variable-speed systems. Performance optimization, not just fixing breakdowns.',
    integrationTags: [
      '🎓 Transparent diagnostic process with education',
      '⚡ Preventive maintenance for sustained efficiency',
    ],
  },
] as const