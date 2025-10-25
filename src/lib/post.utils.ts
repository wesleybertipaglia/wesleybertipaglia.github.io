import { PostApiService } from './post.service';

export class PostUtils {
  private static initialized = false;

  static async init() {
    if (this.initialized) return;

    const postId = window.location.pathname.split('/').pop();
    const postTitle = document.getElementById('post-id')?.textContent || '';

    if (!postId || !postTitle) return;

    try {
      let existingPost = await PostApiService.getById(postId);
      if (!existingPost) {
        existingPost = await PostApiService.create({
          id: postId,
          title: postTitle,
        });
      }
      this.initialized = true;
      return existingPost;
    } catch (error) {
      console.error('Error handling post API:', error);
    }
  }

  static async handleClap(postId: string): Promise<void> {
    try {
      await PostApiService.clap(postId);
    } catch (error) {
      console.error('Error clapping:', error);
    }
  }
}
