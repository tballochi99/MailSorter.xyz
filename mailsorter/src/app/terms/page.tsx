import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Footer } from "../components/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Terms() {
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
           <CardTitle>Terms of Service</CardTitle>
         </CardHeader>
         <CardContent className="space-y-6">
           <section>
             <h2 className="text-xl font-semibold mb-3">1. Service Usage</h2>
             <p className="text-muted-foreground">
               This tool is provided as-is for email list processing. Users are responsible for ensuring they have the right to process the email addresses they upload.
             </p>
           </section>

           <section>
             <h2 className="text-xl font-semibold mb-3">2. Acceptable Use</h2>
             <ul className="list-disc pl-5 text-muted-foreground space-y-2">
               <li>Do not use for spam or harassment</li>
               <li>Comply with applicable data protection laws</li>
               <li>Respect email owners privacy rights</li>
             </ul>
           </section>

           <section>
             <h2 className="text-xl font-semibold mb-3">3. Limitations</h2>
             <p className="text-muted-foreground">
               We provide no guarantees about the accuracy of email validation or business detection features.
             </p>
           </section>

           <section>
             <h2 className="text-xl font-semibold mb-3">4. Changes</h2>
             <p className="text-muted-foreground">
               We reserve the right to modify these terms at any time. Continue using the service means accepting any changes.
             </p>
           </section>
         </CardContent>
       </Card>
     </div>
     <Footer />
   </div>
 );
}