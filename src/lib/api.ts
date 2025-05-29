import { Comment, Post, User } from '@/types/blog'

const API_BASE =
	process.env.NEXT_PUBLIC_API_URL || 'https://jsonplaceholder.typicode.com'

export async function getAllPosts(): Promise<Post[]> {
	console.log('🔍 Fetching all posts from:', `${API_BASE}/posts`)
	const res = await fetch(`${API_BASE}/posts`, {
		next: { revalidate: 3600 },
	})
	if (!res.ok) throw new Error('Failed to fetch posts')
	const posts = await res.json()

	return posts
}

export async function getPost(id: string): Promise<Post> {
	const res = await fetch(`${API_BASE}/posts/${id}`, {
		next: { revalidate: 3600 },
	})
	if (!res.ok) throw new Error(`Failed to fetch post ${id}`)
	const post = await res.json()
	return post
}

export async function getPostComments(id: string): Promise<Comment[]> {
	const res = await fetch(`${API_BASE}/posts/${id}/comments`, {
		next: { revalidate: 3600 },
	})
	if (!res.ok) throw new Error(`Failed to fetch comments for post ${id}`)
	const comments = await res.json()
	return comments
}

export async function getUser(id: number): Promise<User> {
	const res = await fetch(`${API_BASE}/users/${id}`, {
		next: { revalidate: 3600 },
	})
	if (!res.ok) {
		throw new Error(`Failed to fetch user ${id}`)
	}
	const user = await res.json()
	return user
}

export async function getAllUsers(): Promise<User[]> {
	const res = await fetch(`${API_BASE}/users`, {
		next: { revalidate: 3600 },
	})
	if (!res.ok) {
		throw new Error('Failed to fetch users')
	}
	const users = await res.json()

	return users
}

// Enhanced function to get posts with user information
export async function getPostsWithUsers(): Promise<(Post & { user: User })[]> {
	try {
		const [posts, users] = await Promise.all([getAllPosts(), getAllUsers()])

		const postsWithUsers = posts.map((post) => {
			const user = users.find((user) => user.id === post.userId)
			if (!user) {
				console.warn(
					`User with ID ${post.userId} not found for post ${post.id}`,
				)
			}
			return {
				...post,
				user: user || {
					id: post.userId,
					name: `User ${post.userId}`,
					username: `user${post.userId}`,
					email: `user${post.userId}@example.com`,
				},
			}
		})

		return postsWithUsers
	} catch (error) {
		throw error
	}
}

// Enhanced function to get a single post with user information
export async function getPostWithUser(
	id: string,
): Promise<Post & { user: User }> {
	try {
		const post = await getPost(id)
		const user = await getUser(post.userId)

		const result = {
			...post,
			user,
		}

		return result
	} catch (error) {
		throw error
	}
}
