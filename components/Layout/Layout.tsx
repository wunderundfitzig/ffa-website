import Header from 'components/Header/Header'
import GlobalStyles from './_GlobalStyles'

const Layout = (props: { children: React.ReactNode }) => (
  <>
    <GlobalStyles />
    <Header />
    {props.children}
  </>
)

export default Layout
