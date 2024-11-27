"use client"

import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Footer } from "../components/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
 return (
   <div className="min-h-screen flex flex-col">
     <div className="container mx-auto px-4 py-8 flex-1">
       <Link href="/" className="inline-block mb-6">
         <Button variant="ghost" className="gap-2">
           <ArrowLeft className="h-4 w-4" />
           Back to Home
         </Button>
       </Link>

       <Card>
         <CardHeader>
           <CardTitle>Privacy Policy</CardTitle>
         </CardHeader>
         <CardContent className="space-y-6">
           <section>
             <h2 className="text-xl font-semibold mb-3">1. Data Collection</h2>
             <p className="text-muted-foreground">
               This application processes email lists entirely in your browser. We do not collect, store, or transmit any of your data.
             </p>
           </section>

           <section>
             <h2 className="text-xl font-semibold mb-3">2. Local Processing</h2>
             <ul className="list-disc pl-5 text-muted-foreground space-y-2">
               <li>All email processing occurs locally on your device</li>
               <li>No data is sent to external servers</li>
               <li>Your files never leave your browser</li>
             </ul>
           </section>

           <section>
             <h2 className="text-xl font-semibold mb-3">3. Cookies and Storage</h2>
             <p className="text-muted-foreground">
               We use minimal local storage only for theme preferences. No tracking cookies are used.
             </p>
           </section>

           <section>
             <h2 className="text-xl font-semibold mb-3">4. Contact</h2>
             <p className="text-muted-foreground">
               For privacy concerns, contact us at: privacy@emailsorter.com
             </p>
           </section>
         </CardContent>
       </Card>
     </div>
     <Footer />
   </div>
 );
}