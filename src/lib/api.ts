import { Comment, Post, User } from '@/types/blog'

// Base API URL 
const API_BASE =
	process.env.NEXT_PUBLIC_API_URL || 'https://jsonplaceholder.typicode.com'

/**
 * Fetches all posts from the API
 * @returns {Promise<Post[]>} Array of post objects
 * @throws {Error} If the request fails
 */
export async function getAllPosts(): Promise<Post[]> {
	const res = await fetch(`${API_BASE}/posts`, {
		next: { revalidate: 3600 }, // Revalidates data after 1 hour (3600 seconds)
	})
	if (!res.ok) throw new Error('Failed to fetch posts')
	const posts = await res.json()
	return posts
}

/**
 * Fetches a single post by ID
 * @param {string} id - The ID of the post to fetch
 * @returns {Promise<Post>} The requested post object
 * @throws {Error} If the request fails or post is not found
 */
export async function getPost(id: string): Promise<Post> {
	const res = await fetch(`${API_BASE}/posts/${id}`, {
		next: { revalidate: 3600 },
	})
	if (!res.ok) throw new Error(`Failed to fetch post ${id}`)
	const post = await res.json()
	return post
}

/**
 * Fetches all comments for a specific post
 * @param {string} id - The ID of the post to get comments for
 * @returns {Promise<Comment[]>} Array of comment objects
 * @throws {Error} If the request fails
 */
export async function getPostComments(id: string): Promise<Comment[]> {
	const res = await fetch(`${API_BASE}/posts/${id}/comments`, {
		next: { revalidate: 3600 },
	})
	if (!res.ok) throw new Error(`Failed to fetch comments for post ${id}`)
	const comments = await res.json()
	return comments
}

/**
 * Fetches a user by ID
 * @param {number} id - The ID of the user to fetch
 * @returns {Promise<User>} The requested user object
 * @throws {Error} If the request fails or user is not found
 */
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

/**
 * Fetches all users
 * @returns {Promise<User[]>} Array of user objects
 * @throws {Error} If the request fails
 */
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

/**
 * Fetches all posts with their associated user information
 * @returns {Promise<(Post & { user: User })[]>} Array of post objects each augmented with user data
 * @throws {Error} If either posts or users fail to fetch
 * @description Combines post and user data, provides fallback user data if user not found
 */
export async function getPostsWithUsers(): Promise<(Post & { user: User })[]> {
	try {
		// Fetch both posts and users in parallel
		const [posts, users] = await Promise.all([getAllPosts(), getAllUsers()])

		// Combine posts with their respective users
		const postsWithUsers = posts.map((post) => {
			const user = users.find((user) => user.id === post.userId)
			if (!user) {
				console.warn(
					`User with ID ${post.userId} not found for post ${post.id}`,
				)
			}
			// Return post with user data, or fallback user if not found
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

/**
 * Fetches a single post with its associated user information
 * @param {string} id - The ID of the post to fetch
 * @returns {Promise<Post & { user: User }>} The requested post object augmented with user data
 * @throws {Error} If either the post or user fails to fetch
 */
export async function getPostWithUser(
	id: string,
): Promise<Post & { user: User }> {
	try {
		// Fetch post and then its associated user
		const post = await getPost(id)
		const user = await getUser(post.userId)

		// Combine post with user data
		const result = {
			...post,
			user,
		}

		return result
	} catch (error) {
		throw error
	}
}
