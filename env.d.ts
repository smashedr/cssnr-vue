/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TITLE: string
  readonly VITE_SUBTITLE: string
  readonly VITE_DESCRIPTION: string

  readonly VITE_DISCORD_URL: string
  readonly VITE_GITHUB_URL: string
  readonly VITE_KOFI_URL: string
  readonly VITE_REPO_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
