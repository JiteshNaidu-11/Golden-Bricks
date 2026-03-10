# Dubai Real Estate Images

This directory is organized for storing Dubai real estate images.

## Directory Structure

```
public/images/
├── hero/          # Hero section background images
├── communities/   # Community-specific images
├── properties/    # Property listing images
└── about/         # About page images
```

## Image Usage

All images are currently configured in `lib/images.ts` using Unsplash URLs. 

To use local images:
1. Add your images to the appropriate subdirectory
2. Update `lib/images.ts` to reference local paths (e.g., `/images/hero/dubai-skyline.jpg`)

## Recommended Image Specifications

- **Hero Images**: 1920x1080px minimum, landscape orientation
- **Community Images**: 800x600px, landscape orientation
- **Property Images**: 800x600px, landscape orientation
- **Format**: JPG or WebP for best compression
- **File Size**: Optimize to < 200KB per image for web performance

## Current Image Sources

Images are currently sourced from Unsplash and can be replaced with your own Dubai real estate photography.

