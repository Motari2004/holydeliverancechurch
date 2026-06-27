export default function Services() {
  const services = [
    {
      day: 'Sunday',
      time: '9:00 AM - 11:00 AM',
      name: 'Morning Worship',
      description: 'Main service with worship, prayer, and teaching.',
    },
    {
      day: 'Sunday',
      time: '11:30 AM - 1:00 PM',
      name: 'Sunday School',
      description: 'Bible study and fellowship for all ages.',
    },
    {
      day: 'Wednesday',
      time: '6:00 PM - 7:30 PM',
      name: 'Midweek Prayer',
      description: 'A time of prayer, intercession, and spiritual growth.',
    },
    {
      day: 'Friday',
      time: '5:00 PM - 6:30 PM',
      name: 'Youth Fellowship',
      description: 'A vibrant gathering for young people to connect and grow.',
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-church-cream">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Join us for worship, fellowship, and spiritual growth throughout the week.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-church-gold hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-serif text-church-green">{service.name}</h3>
                <span className="text-sm font-semibold text-church-gold bg-church-cream px-3 py-1 rounded-full">
                  {service.day}
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-2">{service.time}</p>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}