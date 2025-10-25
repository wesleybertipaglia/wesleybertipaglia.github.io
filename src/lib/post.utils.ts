import { postApiService } from './post.service';

export class PostUtils {
  static async init() {
    const postId = window.location.pathname.split('/').pop();
    const postTitle = document.getElementById('post-id')?.textContent || '';

    if (!postId || !postTitle) return;

    try {
      const existingPost = await postApiService.getById(postId);
      if (!existingPost) {
        await postApiService.create({ id: postId, title: postTitle });
      }
    } catch (error) {
      console.error('Error handling post API:', error);
    }
  }

  static async handleClap(postId: string): Promise<void> {
    try {
      await postApiService.clap(postId);
    } catch (error) {
      console.error('Error clapping:', error);
    }
  }
}
