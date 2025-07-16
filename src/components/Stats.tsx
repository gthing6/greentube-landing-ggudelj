import React from 'react';

const stats = [
  { title: 'Active Players', stat: '50M+', helpText: 'Monthly active users' },
  { title: 'Games Launched', stat: '1,200+', helpText: 'Successful game releases' },
  { title: 'Global Markets', stat: '45+', helpText: 'Countries served' },
  { title: 'Platform Uptime', stat: '99.9%', helpText: 'Guaranteed availability' }
];

export default function Stats() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-300">
            Our platform powers gaming experiences for millions of players worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
            >
              <div className="text-center">
                <p className="text-sm font-medium text-gray-400 mb-2">{item.title}</p>
                <p className="text-3xl font-bold text-green-600 mb-1 animate-color-pulse drop-shadow-sm">{item.stat}</p>
                <p className="text-sm text-gray-400">{item.helpText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}