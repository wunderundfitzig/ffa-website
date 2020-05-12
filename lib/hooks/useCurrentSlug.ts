import { useRouter } from 'next/router'

export default function useCurrentSlug() {
  const router = useRouter()
  return router.asPath
}
