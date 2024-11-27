import MailSorter from '@/app/components/MailSorter';
import { Intro } from '@/app/components/Intro';
import { Footer } from '@/app/components/Footer';

export default function Home() {
 return (
   <main>
     <Intro />
     <div id="mailsorter-section">
       <MailSorter />
     </div>
     <Footer />
   </main>
 );
}