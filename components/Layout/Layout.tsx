import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import GlobalStyles from './_GlobalStyles'

const Layout = (props: { children: React.ReactNode }) => (
  <>
    <GlobalStyles />
    <Header />
    {props.children}
    <Footer />
  </>
)

export default Layout
