import { GetServerSideProps } from 'next'

export default function WpJson() {
  return 'this should never be displayed'
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { path, ...query } = context.query
  const pathString = (path as string[]).join('/')
  const queryString = Object.keys(query)
    .map((key) => `${key}=${query[key]}`)
    .join('&')
  const baseURL = 'https://ffaback.uber.space/wp-json/'
  const location = baseURL + pathString + '?' + queryString

  context.res.writeHead(301, { Location: location })
  context.res.end()
  return { props: {} }
}
