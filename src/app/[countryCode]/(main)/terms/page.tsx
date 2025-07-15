import { Roboto } from "next/font/google"
import React from "react"
const robo = Roboto({ subsets: ["latin"], weight:["100" , "300" , "400" , "500" , "700" , "900" ,"100" , "300" , "400" , "500" , "700" , "900"]})


const TermsAndConditions = () => {
  return (
    <div className={`min-h-screen bg-white pt-12 ${robo.className}`}>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className=" mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            USE OF OUR WEBSITE
          </h2>

          <div className="prose prose-sm  max-w-none">
            <section className="mb-12">
              <p className="">
                <br />
                When you use this website and place orders through it, you agree
                to:
                <br />
                <br />
              </p>
              <ul>
                <li>
                  Use this website to make enquiries and legally valid orders
                  only.
                </li>
                <li>
                  Not to make any false or fraudulent orders. If an order of
                  this type may reasonably be considered to have been placed, we
                  shall be authorised to cancel it and inform the competent
                  authorities.
                </li>
                <li>
                  Provide us with your email address, postal address and/or
                  other contact details truthfully and exactly. You also agree
                  that we may use this information to contact you in the context
                  of your order if necessary
                </li>
                <li>
                  If you do not provide us with all the information we need, you
                  cannot place your order
                </li>
              </ul>
              <h2>CONTRACT:</h2>
              <ul>
                <li>
                  After you place an order you will receive Confirmation
                  mail/Message (Order Confirmation) and (Shipping Confirmation)
                </li>
                <li>
                  AVAILABILITY OF PRODUCTS: All orders are Subject to
                  availability of Products Along this line, if there are
                  difficulties regarding the supply of products or there are no
                  more items left in stock, we reserve the right to provide you
                  with information on substitute products of the same. If you do
                  not wish to order the substitute products, we will reimburse
                  any amount that you may have paid.
                </li>
              </ul>
              <h2>REFUSAL TO PROCESS AN ORDER:</h2>
              <ul>
                <li>
                  We will always do everything possible to process all orders,
                  there may be exceptional circumstances that force us to refuse
                  to process an order after having sent the Order Confirmation.
                  We reserve the right to do so at any time. We reserve the
                  right to remove any product from this website at any time and
                  to remove or modify any material or content from the same.
                </li>
                <li>
                  We shall not be liable to you or any third party for removing
                  any product or modifying any product or material or content
                  from our website or not processing an order once we have sent
                  the Order Confirmation.
                </li>
              </ul>
              <h2>Delivery:</h2>
              <ul>
                <li>
                  In Continuation to claus (3) above regarding the availability
                  of product and extra ordinary circumstances, we will try to
                  make sure to send the order consisting of Product(s) by date
                  indicated in the Delivery confirmation or if no delivery date
                  is specified, in the estimated time frame within a maximum
                  period of 30 days from the date of Order confirmation.
                </li>
                <li>
                  Nonetheless, there may be delays for reasons such as the
                  occurrence of unforeseen circumstances or the delivery zone.
                </li>
                <li>
                  For the purpose of these Conditions, the “delivery” shall be
                  understood to have taken place or the order “delivered” as
                  soon as you or a third party indicated by you acquires
                  physical possession of the goods, which will be evidenced by
                  the signing of the receipt of the order at the delivery
                  address indicated by you.
                </li>
              </ul>
              <h2>PRICE AND PAYMENT:</h2>
              <ul>
                <li>
                  We make every effort to ensure that the prices featured on the
                  website are correct, error may occur. If we discover an error
                  in the price of any of the products that you have ordered, we
                  will inform you as soon as possible and give you the option of
                  confirming your order at the correct price or cancelling it.
                  If we are unable to contact you, the order will be considered
                  cancelled and all amounts paid will be refunded to you in
                  full.
                </li>
                <li>
                  We are not obliged to provide you with any product at the
                  incorrect lower price (even when we have sent the Shipping
                  Confirmation) if the error in the price is obvious and
                  unmistakable and could have reasonably been recognized by you
                  as an incorrect price.
                </li>
                <li>
                  The prices on the website excluding of delivery charges.
                </li>
                <li>Prices may change at any time</li>
              </ul>
              <h1>RETURN – Terms and Conditions:</h1>
              <ul>
                <li>
                  Customers can return the order within 15 days from the date of
                  delivery. (For orders placed outside sale duration)
                </li>
                <li>
                  Keeping the strict hygiene standards of our products, we do
                  not accept returns on several product categories like caps,
                  hats, masks, boxers, shorts, bodysuits, crop tops, tank tops,
                  and baby tees. Stationery products like stickers are also a
                  part of no-return products.
                </li>
                <li>
                  The product must be in its original condition, unwashed, and
                  with all tags attached.
                </li>
                <li>
                  We reserve the right not to accept the return of products
                  which
                </li>
                <li>
                  (i) We believe are being returned after use, washed or soiled
                  or
                </li>
                <li>
                  (ii) are damaged (except where the return is on account of
                  damaged goods having been delivered to you).
                </li>
                <li>
                  We will not be able to arrange reverse pickup of products
                  unless confirmed by our Customer Experience Team. If you have
                  received a defective product, send us images at
                  info@bonkerscorner.com and we will get back to you, Once
                  confirmed by the Customer Experience Team.
                </li>
                <li>
                  Once confirmed by our customer experience team, we will
                  arrange the reverse pickup of Products within 48 hours of
                  receiving the request.
                </li>
                <li>
                  Please ensure while returning the product the packaging is
                  intact the way it was delivered.
                </li>
                <li>
                  As we do not have our own delivery service we rely on delivery
                  partners like BlueDart, Delhivery, DTDC, etc
                </li>
                <li>
                  In case of return; the delivery partner charges us for a
                  reverse pickup from the customer location. We request our
                  customers to pay a charge of ₹100.
                </li>
                <li>
                  Product purchased during Sale or Diwali Clearance Sale are{" "}
                  <meta charSet="utf-8" /> <span>non-returnable</span> and
                  non-refundable
                </li>
              </ul>
              <h2>GOVERNING LAW AND JURISDICTION:</h2>
              <ul>
                <li>
                  These Terms of Service and any separate agreement whereby we
                  provide you Services shall be governed by and construed in
                  accordance with the laws of India and Jurisdiction of Mumbai,
                  Maharashtra.
                </li>
              </ul>
              <h2>INVOICE:</h2>
              <p>
                Invoice will be provided to you along with the products when
                delivered.
              </p>
              <h2>TAXES:</h2>
              <ul>
                <li>
                  Pursuant to the prevailing rules and regulations in force, all
                  purchases done through the website are
                  <br />
                </li>
              </ul>
              <h2>RETURN/REFUND POLICY:</h2>
              <ul>
                <li>
                  We grant you a period of 15 days from the day the order was
                  delivered by the delivery executive. (For orders placed
                  outside sale duration)
                </li>
                <li>
                  In case you return the goods within the contractual term of
                  the right of withdrawal, you will only be reimbursed with the
                  amount paid for said products. Delivery charges will not be
                  reimbursed after the goods returned. The amount will be
                  credited back into BonkersCorner GiftCard.
                </li>
                <li>
                  Incase you have received a damaged, defective, missing or a
                  wrong product on delivery. Please reach out to us within 24
                  hours at info@bonkerscorner.com
                </li>
                <li>
                  An order can be returned to a maximum of two (2) consecutive
                  times.
                </li>
              </ul>
              <h2>GiftCard&nbsp;– Terms and Conditions:</h2>
              <ul>
                <li>
                  The Bonkers Corner “GiftCard” amount can solely be used on
                  bonkerscorner.com against purchases made on the website.
                </li>
                <li>
                  The Bonkers Corner “<meta charSet="utf-8" />{" "}
                  <span>GiftCard</span>” amount is non-refundable, It cannot be
                  transferred back to source (into bank account).
                </li>
                <li>
                  The Bonkers Corner “<meta charSet="utf-8" />{" "}
                  <span>GiftCard</span>” amount is non-transferable. It cannot
                  be transferred to other user account.
                </li>
                <li>
                  The Bonkers Corner “<meta charSet="utf-8" />{" "}
                  <span>GiftCard</span>” amount cannot be used at the retail
                  stores.
                </li>
              </ul>
              <p>
                These products are only eligible for replacement and cannot be
                exchanged.
              </p>
              <h2>Return Period:</h2>
              <ul>
                <li>
                  Customers are eligible to return their Supima products, Black
                  Wide-Leg Sweatpants and Black Utility Straight Fit Pant within
                  15 days from the date of purchase.
                </li>
                <li>
                  The product must be in its original condition, unwashed, and
                  with all tags attached.
                </li>
              </ul>
              <p>
                Proof of purchase, such as the original receipt or order
                confirmation, must be provided for all return requests.
              </p>
              <p>
                Bonkers Corner offers a 3-month guarantee on its Supima
                products, Wide-Leg Sweatpants (All Colors), Sporty Straight Fit
                Pant (All Colors), Everyday Joggers (All Colors) and Black
                Utility Straight Fit Pant, covering up to 50 washes.
              </p>
              <p>
                <br />
                *(3 month from the day of purchase)
              </p>
              <ul>
                <li>
                  Defects or damages must be due to manufacturing faults and not
                  resulting from misuse, neglect, or improper care of the
                  product.
                </li>
                <li>Defects Covered Under Guarantee:</li>
                <li>Loose stitching or seams</li>
                <li>Fabric discoloration or fading</li>
                <li>Print or design imperfections</li>
                <li>Uneven dye distribution</li>
                <li>Fabric pilling or fuzzing</li>
                <li>Fabric shrinkage exceeding acceptable limits</li>
                <li>Misaligned or missing embellishments</li>
                <li>Excessive fabric wrinkling or creasing</li>
                <li>Fabric tearing or fraying along edges</li>
                <li>
                  Any other noticeable defects impacting the garment’s
                  appearance or functionality
                </li>
                <li>Defects Not Covered Under Guarantee:</li>
                <li>Damage caused by improper washing or care practices.</li>
                <li>Fabric damage resulting from excessive wear and tear.</li>
                <li>
                  Alterations or modifications made to the garment after
                  purchase.
                </li>
                <li>
                  Damage caused by external factors such as accidents, misuse,
                  or neglect.
                </li>
                <li>
                  Fabric deterioration due to exposure to harsh chemicals or
                  environmental conditions.
                </li>
                <li>
                  Any defects arising from non-compliance with care instructions
                  provided by the manufacturer.
                </li>
                <li>
                  Normal wear and tear expected with regular use over time.
                </li>
                <li>
                  Bonkers Corner reserves the right to inspect the product to
                  determine eligibility for replacement or refund.
                </li>
              </ul>
              <ul>
                <li>
                  Customers must contact Bonkers Corner’s customer service team
                  to initiate the return process.
                </li>
                <li>
                  Once confirmed by our customer experience team, we will
                  arrange the pickup Product/s within 7 days of receiving the
                  request.
                </li>
                <li>
                  Bonkers Corner will be responsible for covering return
                  shipping costs for defective or damaged products within the
                  guarantee period.
                </li>
              </ul>
              <p>
                Customers may choose to receive a full refund Subject to product
                availability we will issue a refund to your Bonkers{" "}
                <meta charSet="utf-8" />
                <span>GiftCard</span>.
              </p>
              <h2>Fraud Prevention Measures:</h2>
              <ul>
                <li>
                  Bonkers Corner prioritises the security of our customers. We
                  reserve the right to refuse returns that are suspected of
                  being fraudulent or violating the terms of this policy.
                </li>
                <li>
                  Rest assured, all returned products undergo thorough
                  inspection to verify their condition and authenticity.
                </li>
                <li>
                  We treat any fraudulent attempts to return products with
                  seriousness and will promptly report such instances to the
                  relevant authorities.
                </li>
              </ul>
              <h2>Modification of Terms and Conditions:</h2>
              <p>
                Bonkers Corner may modify or update these Terms and Conditions
                at any time without prior notice. However, we assure you that
                any changes made will always be in your best interest.
              </p>
              <h2>Customer Satisfaction Guarantee:&nbsp;</h2>
              <p>
                At Bonkers Corner, your satisfaction is our top priority. We are
                committed to promptly and fairly resolving any issues or
                concerns you may have regarding returns.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

export default TermsAndConditions
