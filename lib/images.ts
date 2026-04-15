/**
 * Real estate images.
 * Using local images from public/images / public/properties folders.
 */

export const dubaiImages = {
  // Hero & background images
  hero: {
    skyline: '/properties/sai-world-one.jpg',
    dubaiMarina: '/properties/one-platinum.jpg',
    dubaiMarinaOffplan: '/properties/birla-estate-airoli.webp',
    burjKhalifa: '/properties/cyber-square.jpeg',
    downtown: '/properties/cadbury-junction-thane-west.jpg',
    palmJumeirah: '/properties/9pbr-palm-beachroad.jpg',
    businessBay: '/properties/codename-growth.jpeg',
    dubaiCreek: '/properties/codename-panoramic-cbd-belapur.jpg',
  },

  // Community images
  communities: {
    jumeirah: '/properties/aatman-balaji-palm-beach.jpeg',
    palmJumeirah: '/properties/9pbr-adani-realty.jpg',
    dubaiMarina: '/properties/westwoods-platinum.jpg',
    downtown: '/properties/oakwoods-platinum.jpg',
    businessBay: '/properties/esquire-platinum.jpg',
    dubaiHills: '/properties/platinum-the-reserve.jpeg',
    emiratesHills: '/properties/elysium-platinum.jpg',
    arabianRanches: '/properties/k-raheja-corp-homes.jpg',
    jvc: '/properties/praksyde-platinum.jpeg',
    dubaiCreek: '/properties/codename-panoramic-cbd-belapur.jpg',
    laMer: '/properties/goodwill-wisteria.jpeg',
  },

  // Property images
  properties: {
    luxuryApartment: '/properties/one-platinum.jpg',
    villa: '/properties/sai-world-one.jpg',
    penthouse: '/properties/elysium-platinum.jpg',
    townhouse: '/properties/westwoods-platinum.jpg',
    apartment: '/properties/one-platinum.jpg',
    modernVilla: '/properties/sai-world-one.jpg',
    luxuryInterior: '/properties/esquire-platinum.jpg',
    waterfront: '/properties/9pbr-palm-beachroad.jpg',
    modernApartment: '/properties/one-platinum.jpg',
    luxuryVilla: '/properties/sai-world-one.jpg',
    penthouseView: '/properties/elysium-platinum.jpg',
    beachfront: '/properties/9pbr-palm-beachroad.jpg',
    // Off-plan specific
    palmJebelAli: '/properties/platinum-juinagar-new-launch.webp',
    dubaiCreekHarbor: '/properties/code-name-green-gold.webp',
    // Service specific
    propertySales: '/properties/codename-growth.jpeg',
    propertyLeasing: '/properties/goodwill-wisteria.jpeg',
    offPlanLeasing: '/properties/birla-estate-airoli.webp',
  },

  // General real estate images
  general: {
    skyline: '/properties/cyber-square.jpeg',
    modernBuilding: '/properties/cadbury-junction-thane-west.jpg',
    luxuryInterior: '/properties/esquire-platinum.jpg',
    waterfront: '/properties/9pbr-palm-beachroad.jpg',
    nightCity: '/properties/westwoods-platinum.jpg',
    cityscape: '/properties/oakwoods-platinum.jpg',
    whyChooseUs: '/properties/platinum-the-reserve.jpeg',
    whyInvest: '/properties/codename-growth.jpeg',
  },

  // About page images
  about: {
    team: '/properties/sai-world-one.jpg',
    office: '/properties/cyber-square.jpeg',
    skylineView: '/properties/9pbr-palm-beachroad.jpg',
  },
};

// Map community names to images
export const getCommunityImage = (communityName: string): string => {
  const name = communityName.toLowerCase();
  
  if (name.includes('jumeirah') && !name.includes('palm')) {
    return dubaiImages.communities.jumeirah;
  }
  if (name.includes('palm')) {
    return dubaiImages.communities.palmJumeirah;
  }
  if (name.includes('marina')) {
    return dubaiImages.communities.dubaiMarina;
  }
  if (name.includes('downtown')) {
    return dubaiImages.communities.downtown;
  }
  if (name.includes('business bay')) {
    return dubaiImages.communities.businessBay;
  }
  if (name.includes('emirates')) {
    return dubaiImages.communities.emiratesHills;
  }
  if (name.includes('hills')) {
    return dubaiImages.communities.dubaiHills;
  }
  if (name.includes('arabian') || name.includes('ranches')) {
    return dubaiImages.communities.arabianRanches;
  }
  
  // Default
  return dubaiImages.communities.dubaiMarina;
};

// Map property types to images
export const getPropertyImage = (propertyType: string): string => {
  const type = propertyType.toLowerCase();
  
  if (type.includes('villa')) {
    return dubaiImages.properties.villa;
  }
  if (type.includes('penthouse')) {
    return dubaiImages.properties.penthouse;
  }
  if (type.includes('townhouse')) {
    return dubaiImages.properties.townhouse;
  }
  if (type.includes('apartment')) {
    return dubaiImages.properties.apartment;
  }
  
  // Default
  return dubaiImages.properties.luxuryApartment;
};

