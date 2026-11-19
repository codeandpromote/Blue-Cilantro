import type { StaticImageData } from 'next/image';
import gbpBarPhoto from '@/public/images/gbp-hero.jpg';
import heroDiningRoom from '@/src/assets/images/hero_dining_room_1795112592261.jpg';
import dishWahooCeviche from '@/src/assets/images/dish_wahoo_ceviche_1795112597957.jpg';
import dishClayOvenFlatbread from '@/src/assets/images/dish_clay_oven_flatbread_1795112597242.jpg';
import dishSearedSalmon from '@/src/assets/images/dish_seared_salmon_ponzu_1795112598488.jpg';
import dishRackOfLamb from '@/src/assets/images/dish_rack_of_lamb_1795112594117.jpg';

export interface GalleryPhoto {
  id: string;
  src: StaticImageData;
  title: string;
  category: string;
  caption: string;
  alt: string;
  isOriginalGooglePhoto?: boolean;
  spanClass: string;
}

export const HERO_IMAGE = {
  src: heroDiningRoom,
  alt: 'Candlelit linen dining tables, stacked slate accent wall, and evening indigo bar glow inside Blue Cilantro’s Grand Cayman fine dining atmosphere.',
};

export const GBP_BAR_IMAGE = {
  src: gbpBarPhoto,
  alt: 'Original Google Business Profile photograph of Blue Cilantro’s illuminated Blue Perspex Bar with indigo velvet bar stools and stacked dark slate back bar at Fidelity Financial Centre, Grand Cayman.',
};

export const CLAY_OVEN_IMAGE = {
  src: dishClayOvenFlatbread,
  alt: 'Freshly blistered clay-oven flatbread brushed with herbs and sea salt, served on honed dark slate with mint-cilantro, roasted garlic, and sweet plum chutneys.',
};

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gbp-perspex-bar',
    src: gbpBarPhoto,
    title: 'The Blue Perspex Bar',
    category: 'Original Google Business Profile Photo',
    caption:
      'Blue Cilantro’s signature backlit frosted-blue Perspex bar and stacked slate spirits gallery inside Fidelity Financial Centre, Seven Mile Beach.',
    alt: 'Original venue photograph of Blue Cilantro’s luminous blue Perspex bar, velvet indigo stools, and curated spirits wall in Grand Cayman.',
    isOriginalGooglePhoto: true,
    spanClass: 'md:col-span-7 md:row-span-2',
  },
  {
    id: 'wahoo-ceviche',
    src: dishWahooCeviche,
    title: 'Local Wahoo Ceviche Carpaccio',
    category: 'Raw Bar · Cayman Catch',
    caption:
      'Translucent ribbons of line-caught Cayman wahoo dressed with young coconut milk, key lime, crisp radish, and fresh micro cilantro.',
    alt: 'Local Cayman wahoo ceviche carpaccio arranged in a delicate ring on matte white stoneware with micro cilantro, radish, and lime emulsion.',
    spanClass: 'md:col-span-5',
  },
  {
    id: 'clay-oven-breads',
    src: dishClayOvenFlatbread,
    title: 'Clay Oven Flatbreads & House Chutneys',
    category: 'Tandoor Craft · Table Starter',
    caption:
      'Blistered to order in the clay oven and presented alongside house-made mint-cilantro, roasted garlic, and sweet plum chutneys.',
    alt: 'Warm blistered clay oven flatbread on dark slate accompanied by porcelain bowls of emerald mint-cilantro, roasted garlic, and plum chutneys.',
    spanClass: 'md:col-span-5',
  },
  {
    id: 'zaatar-wild-salmon',
    src: dishSearedSalmon,
    title: 'Zaatar-Rubbed Wild Salmon',
    category: 'Signature Entrée · East Meets West',
    caption:
      'Crispy-skin wild salmon glazed with fragrant zaatar over sculpted sushi rice and dark truffle ponzu reduction.',
    alt: 'Pan-seared zaatar-rubbed wild salmon plated beside a neat quenelle of sushi rice, truffle ponzu reduction, and microgreens on matte ceramic.',
    spanClass: 'md:col-span-6',
  },
  {
    id: 'rack-of-lamb',
    src: dishRackOfLamb,
    title: 'Herb-Crusted New Zealand Rack of Lamb',
    category: 'Evening Dining · Cellar Pairing',
    caption:
      'Carved rosy medium-rare over silky wild forest mushroom risotto and finished with dark rosemary-port jus.',
    alt: 'Carved herb-crusted New Zealand rack of lamb resting over creamy wild mushroom risotto with glossy dark rosemary jus and red wine.',
    spanClass: 'md:col-span-6',
  },
];
