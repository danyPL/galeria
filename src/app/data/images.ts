// gallery.ts
import { Photo } from "./types";
import photo1 from '../../../public/photo1.webp';
import photo2 from '../../../public/photo2.jpg';
import photo3 from '../../../public/photo3.webp';
import photo4 from '../../../public/photo4.webp'
export const gallery: Photo[] = [
    {
        id: 0,
        title: "Zdjecie 1",
        image_src: photo1,
    },
    {
        id: 1,
        title: "Zdjecie 2",
        image_src: photo2,
    },
    {
        id: 2,
        title: "Zdjecie 3",
        image_src: photo3,
    },
    {
        id:3,
        title:"Zdjecie 4",
        image_src:photo4
    }
];
