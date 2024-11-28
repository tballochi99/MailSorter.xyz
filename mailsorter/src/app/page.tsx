import MailSorter from './components/MailSorter'
import { Intro } from './components/Intro'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Intro />
      <div id="mailsorter-section">
        <MailSorter />
      </div>
      <FAQ />
      <Footer />
    </main>
  )
}