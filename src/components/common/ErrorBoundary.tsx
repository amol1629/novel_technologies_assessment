'use client'

import { Component, ReactNode, ErrorInfo } from 'react'
import { AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Props {
	children: ReactNode
}

interface State {
	hasError: boolean
}

export default class ErrorBoundary extends Component<Props, State> {
	constructor(props: Props) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError(): State {
		return { hasError: true }
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error('Error caught by boundary:', error, errorInfo)
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className="flex flex-col items-center justify-center py-12 px-4">
					<AlertTriangle className="h-12 w-12 text-red-500 mb-4" />
					<h2 className="text-xl font-semibold text-gray-900 mb-2">
						Something went wrong
					</h2>
					<p className="text-gray-600 text-center mb-4 max-w-md">
						We encountered an unexpected error. Please try refreshing the page.
					</p>
					<Button
						onClick={() => this.setState({ hasError: false })}
						variant="outline"
					>
						Try again
					</Button>
				</div>
			)
		}

		return this.props.children
	}
}
