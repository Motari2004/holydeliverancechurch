export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            We would love to hear from you. Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-church-cream p-6 rounded-lg">
              <h3 className="text-xl font-serif text-church-green mb-4">Visit Us</h3>
              <p className="text-gray-600">
                <span className="font-semibold">Address:</span>
                <br />
                P.O Box 62, H0204 Ogembo
              </p>
            </div>

            <div className="bg-church-cream p-6 rounded-lg">
              <h3 className="text-xl font-serif text-church-green mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-600">
                <p>
                  <span className="font-semibold">Email:</span>
                  <br />
                  <a href="mailto:holydiference105@gmail.com" className="text-church-green hover:underline">
                    holydiference105@gmail.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Phone:</span>
                  <br />
                  <a href="tel:01166252528" className="text-church-green hover:underline">
                    011 662 52528
                  </a>
                </p>
              </div>
            </div>

            <div className="bg-church-cream p-6 rounded-lg">
              <h3 className="text-xl font-serif text-church-green mb-4">Service Hours</h3>
              <div className="space-y-1 text-gray-600">
                <p>Sunday: 9:00 AM - 11:00 AM</p>
                <p>Wednesday: 6:00 PM - 7:30 PM</p>
                <p>Friday: 5:00 PM - 6:30 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-church-cream p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-serif text-church-green mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}