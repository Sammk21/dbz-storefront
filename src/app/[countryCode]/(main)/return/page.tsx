import Link from "next/link"
import { Button } from "@medusajs/ui"
import { CheckCircle, Clock, Package, RefreshCw } from "lucide-react"
import { Roboto } from "next/font/google"

const robo = Roboto({ subsets: ["latin"], weight:["100" , "300" , "400" , "500" , "700" , "900" ,"100" , "300" , "400" , "500" , "700" , "900"]})


export default function ReturnsPage() {
  return (
    <div className={`min-h-screen bg-white pt-12 ${robo.className}`}>
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            RETURNS & EXCHANGE POLICY
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We want you to love your purchase. If you're not completely
            satisfied, we're here to help.
          </p>
        </div>

        {/* Quick Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Clock className="w-8 h-8 text-gray-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">30-Day Window</h3>
            <p className="text-sm text-gray-600">
              Return or exchange within 30 days of delivery
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Package className="w-8 h-8 text-gray-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Free Returns</h3>
            <p className="text-sm text-gray-600">
              Free return shipping on all domestic orders
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <RefreshCw className="w-8 h-8 text-gray-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Easy Process</h3>
            <p className="text-sm text-gray-600">
              Simple online return process
            </p>
          </div>
        </div>

        <div className="space-y-12">
          {/* Return Window */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Return Window
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 leading-relaxed mb-4">
                You have <strong>30 days</strong> from the date of delivery to
                return or exchange your items. This gives you plenty of time to
                try on your purchase and make sure it's perfect for you.
              </p>
              <p className="text-gray-600 leading-relaxed">
                For items purchased during promotional periods (Black Friday,
                holiday sales, etc.), the return window may be extended. Check
                your order confirmation email for specific details.
              </p>
            </div>
          </section>

          {/* Conditions for Return */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Conditions for Return
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Unworn and Unwashed
                  </h3>
                  <p className="text-gray-600">
                    Items must be in their original condition with all tags
                    attached.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Original Packaging
                  </h3>
                  <p className="text-gray-600">
                    Items should be returned in their original packaging when
                    possible.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Proof of Purchase
                  </h3>
                  <p className="text-gray-600">
                    Original receipt or order confirmation required.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">
                Items That Cannot Be Returned:
              </h4>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• Underwear and intimate apparel (for hygiene reasons)</li>
                <li>• Customized or personalized items</li>
                <li>• Items damaged by normal wear and tear</li>
                <li>
                  • Items without original tags or in unsellable condition
                </li>
              </ul>
            </div>
          </section>

          {/* How to Initiate a Return */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              How to Initiate a Return
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Start Your Return Online
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Log into your account and go to "Order History" or use our
                    returns portal. You can also contact our customer service
                    team for assistance.
                  </p>
                  <Button>Start Return Process</Button>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Print Your Return Label
                  </h3>
                  <p className="text-gray-600">
                    We'll email you a prepaid return shipping label. Print it
                    out and attach it to your return package. Return shipping is
                    free for domestic orders.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Package Your Items
                  </h3>
                  <p className="text-gray-600">
                    Securely package your items with all original tags attached.
                    Include the return form in your package.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-semibold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Drop Off Your Package
                  </h3>
                  <p className="text-gray-600">
                    Drop off your package at any authorized shipping location or
                    schedule a pickup. You'll receive a tracking number to
                    monitor your return.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-semibold">
                  5
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Receive Your Refund
                  </h3>
                  <p className="text-gray-600">
                    Once we receive and process your return (typically 3-5
                    business days), your refund will be issued to your original
                    payment method within 5-10 business days.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Exchanges */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Exchanges</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 leading-relaxed mb-4">
                Need a different size or color? We offer free exchanges for
                domestic orders within the 30-day return window.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                To exchange an item, simply follow the return process above and
                select "Exchange" instead of "Return." We'll send you the new
                item as soon as we receive your original purchase.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>Note:</strong> If the new item costs more than the
                original, you'll be charged the difference. If it costs less,
                we'll refund the difference to your original payment method.
              </p>
            </div>
          </section>

          {/* International Returns */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              International Returns
            </h2>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <p className="text-blue-800 leading-relaxed mb-4">
                International customers are responsible for return shipping
                costs. We recommend using a trackable shipping method and
                purchasing shipping insurance for high-value returns.
              </p>
              <p className="text-blue-800 leading-relaxed">
                Customs duties and taxes are non-refundable. Please contact our
                customer service team for assistance with international returns.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need Help?
            </h2>
            <p className="text-gray-600 mb-6">
              Our customer service team is here to help with any questions about
              returns or exchanges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button>Contact Customer Service</Button>
              </Link>
              <Link href="/faqs">
                <Button>View FAQs</Button>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
