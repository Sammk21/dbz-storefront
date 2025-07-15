import Link from "next/link"
import { Roboto } from "next/font/google"

 const robo = Roboto({ subsets: ["latin"], weight:["100" , "300" , "400" , "500" , "700" , "900" ,"100" , "300" , "400" , "500" , "700" , "900"]})


 const PrivacyPage = () => {
  return (
    <div className={`min-h-screen bg-white pt-12 ${robo.className}`}>
      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            PRIVACY POLICY
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              This Privacy Policy sets out the types of personal data Divide By Zero
              Clothing Limited, a company incorporated in the Navi mumbai india, may
              collect about you when you interact with us and explains how we
              process your personal data. References in this Privacy Policy to
              "Divide By Zero," "we," "us," or "our" are to Divide By Zero Clothing
              Limited.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              This Privacy Policy applies if you are a visitor to our websites
              or our social media pages, if you purchase any products from
              Divide By Zero, and/or if you are a user of our apps. We may collect,
              use, store, and transfer different kinds of personal data about
              you when you visit our websites or social media pages, register
              for an online account with us, join our loyalty program, contact
              us, subscribe to our newsletter, purchase any of our products, or
              when you download and register an account for our apps.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Divide By Zero is the "data controller" in respect of your personal
              data for the purposes of data protection legislation and is
              registered with the Information Commissioner's Office. We are
              responsible for deciding how we hold and use personal data we
              collect or receive about you. We respect your privacy and are
              committed to protecting your personal data. We will ensure that
              your personal data is stored and used in accordance with this
              Privacy Policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Information We Collect
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We collect several types of information from and about users of
              our services:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Personal Information
            </h3>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Name, email address, postal address, and phone number</li>
              <li>
                Payment information (credit card numbers, billing address)
              </li>
              <li>Account credentials (username, password)</li>
              <li>Purchase history and preferences</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Technical Information
            </h3>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>IP address and device identifiers</li>
              <li>Browser type and version</li>
              <li>Operating system and platform</li>
              <li>Website usage data and analytics</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Marketing and Communications Data
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Your preferences for receiving marketing communications</li>
              <li>Communication history with our customer service team</li>
              <li>Survey responses and feedback</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use the information we collect for various purposes, including:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Service Provision
            </h3>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Processing and fulfilling your orders</li>
              <li>Managing your account and providing customer support</li>
              <li>Personalizing your shopping experience</li>
              <li>Sending order confirmations and shipping updates</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Marketing and Communication
            </h3>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>
                Sending promotional emails and newsletters (with your consent)
              </li>
              <li>Providing information about new products and offers</li>
              <li>Conducting market research and surveys</li>
              <li>Personalizing marketing content based on your preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Legal and Security
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Complying with legal obligations</li>
              <li>Preventing fraud and ensuring security</li>
              <li>Resolving disputes and enforcing agreements</li>
              <li>Protecting our rights and the rights of others</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Third-Party Sharing
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We may share your personal information with third parties in the
              following circumstances:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Service Providers
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              We work with trusted third-party service providers who help us
              operate our business, including payment processors, shipping
              companies, email service providers, and analytics providers. These
              partners are contractually obligated to protect your information
              and use it only for the services they provide to us.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Legal Requirements
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              We may disclose your information if required by law, regulation,
              legal process, or governmental request, or if we believe
              disclosure is necessary to protect our rights, property, or
              safety, or that of others.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Business Transfers
            </h3>
            <p className="text-gray-600 leading-relaxed">
              In the event of a merger, acquisition, or sale of assets, your
              personal information may be transferred to the acquiring entity,
              subject to the same privacy protections outlined in this policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Data Security
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. These measures include:
            </p>

            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>
                Encryption of sensitive data during transmission and storage
              </li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication measures</li>
              <li>Employee training on data protection practices</li>
              <li>Secure data centers and infrastructure</li>
            </ul>

            <p className="text-gray-600 leading-relaxed mb-4">
              While we strive to protect your personal information, no method of
              transmission over the internet or electronic storage is 100%
              secure. We cannot guarantee absolute security but are committed to
              protecting your data using industry-standard practices.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Data Retention
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We retain your personal information for as long as necessary to
              fulfill the purposes outlined in this Privacy Policy, comply with
              legal obligations, resolve disputes, and enforce our agreements.
              When we no longer need your information, we will securely delete
              or anonymize it.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Your Rights
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding
              your personal information:
            </p>

            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>
                <strong>Access:</strong> Request a copy of the personal
                information we hold about you
              </li>
              <li>
                <strong>Correction:</strong> Request correction of inaccurate or
                incomplete information
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your personal
                information
              </li>
              <li>
                <strong>Portability:</strong> Request transfer of your data to
                another service provider
              </li>
              <li>
                <strong>Objection:</strong> Object to certain types of
                processing
              </li>
              <li>
                <strong>Restriction:</strong> Request restriction of processing
                in certain circumstances
              </li>
            </ul>

            <p className="text-gray-600 leading-relaxed">
              To exercise these rights, please contact us using the information
              provided in the "Contact Us" section below. We will respond to
              your request within the timeframe required by applicable law.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you have any questions or concerns about this Privacy Policy or
              our data practices, please contact us:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-2">
                <strong>Email:</strong> privacy@db0.in
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Phone:</strong> +91 (932) 18-1850
              </p>
              <p className="text-gray-600">
                <strong>Address:</strong>
                <br />
                Divide By Zero Clothing Limited
                <br />
                Navi Mumbai, MH 400709
                <br />
                India
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Changes to This Policy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or applicable laws. We will notify you of
              any material changes by posting the updated policy on our website
              and updating the "Last updated" date at the top of this page. We
              encourage you to review this Privacy Policy periodically to stay
              informed about how we protect your information.
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
export default PrivacyPage