export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">About Our Church</h2>
          <p className="section-subtitle">
            We are a community of believers dedicated to spreading love, hope, and faith.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-church-cream p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl text-church-gold mb-4">🙏</div>
            <h3 className="text-xl font-serif text-church-green mb-2">Worship</h3>
            <p className="text-gray-600">
              Join us in heartfelt worship and praise every Sunday as we lift our voices to God.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-church-cream p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl text-church-gold mb-4">🤝</div>
            <h3 className="text-xl font-serif text-church-green mb-2">Community</h3>
            <p className="text-gray-600">
              We are a family that supports one another through life's joys and challenges.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-church-cream p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl text-church-gold mb-4">📖</div>
            <h3 className="text-xl font-serif text-church-green mb-2">Faith</h3>
            <p className="text-gray-600">
              Grounded in Scripture, we seek to grow in our relationship with Jesus Christ.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}