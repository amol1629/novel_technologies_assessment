import { Comment, Post } from '@/types/blog'

const API_BASE = process.env.NEXT_PUBLIC_API_URL
export async function getAllPosts(): Promise<Post[]> {
	const res = await fetch(`${API_BASE}/posts`, {
		next: { revalidate: 3600 },
	})
	if (!res.ok) throw new Error('Failed to fetch posts')
	return res.json()
}

export async function getPost(id: string): Promise<Post> {
	const res = await fetch(`${API_BASE}/posts/${id}`, {
		next: { revalidate: 3600 },
	})
	if (!res.ok) throw new Error(`Failed to fetch post ${id}`)
	return res.json()
}

export async function getPostComments(id: string): Promise<Comment[]> {
	const res = await fetch(`${API_BASE}/posts/${id}/comments`, {
		next: { revalidate: 3600 },
	})
	if (!res.ok) throw new Error(`Failed to fetch comments for post ${id}`)
	return res.json()
}
