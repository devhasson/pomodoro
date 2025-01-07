export function selectImageFromList(images: string[]) {
  return images.sort(() => Math.random() - 0.5)[0];
}
