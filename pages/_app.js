import '../styles/styles.scss'
import '../styles/layout.scss'
import Layout from '../components/Layout'
import { motion, AnimatePresence } from 'framer-motion'
import NProgress from 'nprogress'
import "../styles/_nprogress.css"
import Router from 'next/router';
import '../styles/_alice-carousel.css';

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 900,
  showSpinner: false,
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp ({ Component, pageProps, router }) {
  return (
    <Layout>
        <motion.div
          key={router.route}
          initial="pageInitial" 
          animate="pageAnimate"
          exit="pageExit"
          variants={{
            pageInitial: {
              opacity: 0
            },
            pageAnimate: {
              opacity: 1
            },
            pageExit: {
              opacity: 0
            }
          }}
        >
          <Component {...pageProps} />
        </motion.div>
    </Layout>
  )
}

export default MyApp
