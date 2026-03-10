/**
 * Dubai Real Estate Images
 * Using local images from public/images folder
 */

export const dubaiImages = {
  // Hero & Background Images - Dubai Skyline & Landmarks
  hero: {
    skyline: '/images/properties/homepageherobg-Picsart.jpeg',
    dubaiMarina: '/images/properties/marina.jpeg',
    dubaiMarinaOffplan: '/images/properties/luxuryvilaaoffplan.jpeg',
    burjKhalifa: '/images/properties/homepageherobg-Picsart.jpeg',
    downtown: '/images/properties/downtown.jpeg',
    palmJumeirah: '/images/properties/palmjumeirah.jpeg',
    businessBay: '/images/communities/businessday_communities.jpeg',
    dubaiCreek: '/images/properties/dubaicreekharbor.jpeg',
  },

  // Community Images - Specific Dubai Communities
  communities: {
    jumeirah: '/images/communities/jumeirah_communitiespage.jpeg',
    palmJumeirah: '/images/communities/palmjumeirah_communities.jpeg',
    dubaiMarina: '/images/communities/dubaimarina_communities.jpeg',
    downtown: '/images/communities/downtown_communities.jpeg',
    businessBay: '/images/communities/businessday_communities.jpeg',
    dubaiHills: '/images/communities/dubaihills_communities.jpeg',
    emiratesHills: '/images/communities/emirateshills_communities.jpeg',
    arabianRanches: '/images/communities/arabianhills_communities.jpeg',
    jvc: '/images/communities/dubaihills_communities.jpeg',
    dubaiCreek: '/images/properties/dubaicreekharbor.jpeg',
    laMer: '/images/communities/jumeirah_communitiespage.jpeg',
  },

  // Property Images - Luxury Real Estate
  properties: {
    luxuryApartment: '/images/properties/luxuryapartments.jpeg',
    villa: '/images/properties/luxuryapratments_buysellingnew.jpeg',
    penthouse: '/images/properties/propertyleasing.jpeg',
    townhouse: '/images/properties/luxuryapratments_buyselling.jpeg',
    apartment: '/images/properties/modernapartments.jpeg',
    modernVilla: '/images/properties/luxuryapratments_buyselling.jpeg',
    luxuryInterior: '/images/properties/luxuryapartments.jpeg',
    waterfront: '/images/properties/marina.jpeg',
    modernApartment: '/images/properties/modernapartments.jpeg',
    luxuryVilla: '/images/properties/luxuryapratments_buyselling.jpeg',
    penthouseView: '/images/properties/propertyleasing.jpeg',
    beachfront: '/images/properties/palmjumeirah.jpeg',
    // Off-plan specific
    palmJebelAli: '/images/properties/damacisland.jpeg',
    dubaiCreekHarbor: '/images/properties/dubaicreekharbor.jpeg',
    // Service specific
    propertySales: '/images/properties/propertysales.jpeg',
    propertyLeasing: '/images/properties/propertyleasing.jpeg',
    offPlanLeasing: '/images/properties/offplanleasing.jpeg',
  },

  // General Dubai Real Estate Images
  general: {
    dubaiSkyline: '/images/properties/homepageherobg-Picsart.jpeg',
    modernBuilding: '/images/properties/downtown.jpeg',
    luxuryInterior: '/images/properties/luxuryapartments.jpeg',
    waterfront: '/images/properties/marina.jpeg',
    dubaiNight: '/images/properties/homepageherobg.jpeg',
    cityscape: '/images/properties/homepageherobg.jpeg',
    whyChooseDubai: '/images/properties/whychoosedubai.jpeg',
    whyInvestDubai: '/images/properties/whyinvestindubai.jpeg',
  },

  // About Page Images
  about: {
    team: '/images/properties/homepageherobg.jpeg',
    office: '/images/properties/downtown.jpeg',
    dubaiView: '/images/properties/homepageherobg.jpeg',
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

