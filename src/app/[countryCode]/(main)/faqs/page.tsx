import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@lib/components/ui/accordion"
import { Button } from "@medusajs/ui"
import { Roboto } from "next/font/google"

const robo = Roboto({ subsets: ["latin"], weight:["100" , "300" , "400" , "500" , "700" , "900" ,"100" , "300" , "400" , "500" , "700" , "900"]})


export default function FAQsPage() {
  return (
    <div className={`min-h-screen bg-white pt-12 ${robo.className}`}>
     
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Find answers to the most common questions about our products and
            services.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem
            value="item-1"
            className="border border-gray-200 rounded-lg px-6"
          >
            <AccordionTrigger className="text-left font-semibold">
              What is your sizing guide?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Our sizing runs true to size for most items. We recommend checking
              the size chart on each product page for specific measurements. If
              you're between sizes, we suggest sizing up for a more relaxed fit,
              which is popular in streetwear.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-2"
            className="border border-gray-200 rounded-lg px-6"
          >
            <AccordionTrigger className="text-left font-semibold">
              How long does shipping take?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Standard shipping takes 3-5 business days within the US. Express
              shipping (1-2 business days) and international shipping options
              are also available. All orders are processed within 24 hours on
              business days.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-3"
            className="border border-gray-200 rounded-lg px-6"
          >
            <AccordionTrigger className="text-left font-semibold">
              Do you offer international shipping?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Yes, we ship worldwide! International shipping typically takes
              7-14 business days depending on your location. Customs duties and
              taxes may apply and are the responsibility of the customer.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-4"
            className="border border-gray-200 rounded-lg px-6"
          >
            <AccordionTrigger className="text-left font-semibold">
              What materials do you use?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              We use premium materials including 100% cotton, cotton blends, and
              sustainable fabrics. Each product page lists the specific material
              composition. We're committed to quality and sustainability in our
              manufacturing process.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-5"
            className="border border-gray-200 rounded-lg px-6"
          >
            <AccordionTrigger className="text-left font-semibold">
              How do I care for my streetwear items?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Most items can be machine washed in cold water and tumble dried on
              low heat. We recommend washing dark colors separately and turning
              graphic tees inside out to preserve prints. Detailed care
              instructions are included with each order.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-6"
            className="border border-gray-200 rounded-lg px-6"
          >
            <AccordionTrigger className="text-left font-semibold">
              Do you restock sold-out items?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Popular items are typically restocked, but some limited edition
              pieces may not return. Sign up for restock notifications on
              product pages to be notified when items become available again.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-7"
            className="border border-gray-200 rounded-lg px-6"
          >
            <AccordionTrigger className="text-left font-semibold">
              Can I track my order?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Yes! Once your order ships, you'll receive a tracking number via
              email. You can also track your order status by logging into your
              account on our website.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-8"
            className="border border-gray-200 rounded-lg px-6"
          >
            <AccordionTrigger className="text-left font-semibold">
              Do you have a loyalty program?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Yes! Join our loyalty program to earn points on every purchase,
              get early access to new drops, and receive exclusive member
              discounts. Sign up is free and you'll start earning points
              immediately.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <Link href="/contact" className="">
            <Button>Contact Us</Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
