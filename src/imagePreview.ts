import { ImagePreview } from 'vant';
import 'vant/lib/image-preview/style';
export default function imagePreview(images: string[], index = 0) {
  ImagePreview({
    images,
    startPosition: index,
  });
}

// export function imagePreviewWithImageElements(images: HTMLImageElement[], index = 0) {
//   ImagePreview({
//     images: images.map((img) => img.src),
//     startPosition: index,
//   });
// }