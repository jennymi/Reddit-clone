export function checkThumbnailExist(thumbnail: string): string {
    const thumbnailDisplay =
      thumbnail === 'default'
        ? 'https://via.placeholder.com/150'
        : thumbnail === 'self'
        ? 'https://via.placeholder.com/150'
        : thumbnail;

   return thumbnailDisplay;
  }