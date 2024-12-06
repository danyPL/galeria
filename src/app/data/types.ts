import type { StaticImageData } from 'next/image';

export type Photo = {
    id: number;
    image_src: string | StaticImageData; // Allow both string and StaticImageData
    title: string;
};
