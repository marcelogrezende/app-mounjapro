"use client"

import { Component, ReactNode } from "react"

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error) {
    // Suprimir erros de rede do Next.js que não afetam funcionalidade
    if (
      error.message?.includes("signal is aborted") ||
      error.message?.includes("Network Failed")
    ) {
      console.log("Erro de rede suprimido (não afeta funcionalidade)")
      this.setState({ hasError: false })
      return
    }
    console.error("Erro capturado:", error)
  }

  render() {
    if (this.state.hasError) {
      return null
    }

    return this.props.children
  }
}
