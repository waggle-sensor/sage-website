import React from 'react';

const Timeline = () => {
  const events = [
    {
      date: '2019',
      label: 'Sage is Founded',
      title: 'NSF MSRI-1 Project',
      description: () => (
        <>
          In 2019, as an NSF MSRI-1 project{' '}
          (<a
            href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=1935984"
            target="_blank"
            rel="noopener noreferrer"
          >
            #1935984
          </a>)
          , Sage built the nation’s first distributed, edge computing resource for AI and intelligent sensing.
        </>
      ),
    },
    {
      date: '2023',
      label: 'Testbed Exploration',
      title: 'NAIRR Pilot Demonstration',
      description: () => (
        <>
          In 2023, Sage began exploring how a national-scale testbed could provide AI as an open research resource{' '}
          (<a
            href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2331263"
            target="_blank"
            rel="noopener noreferrer"
          >
            #2331263
          </a>)
          {' '}and became a{' '}
          <a
            href="https://nairrpilot.org/projects/demo/sage"
            target="_blank"
            rel="noopener noreferrer"
          >
            NAIRR Pilot Demonstration
          </a>.
        </>
      ),
    },
    {
      date: '2025',
      label: 'The Next Generation',
      title: 'Sage Grande Testbed (SGT)',
      description: () => (
        <>
          In early 2025, NSF funded the Sage Grande Testbed (SGT) as a five-year project{' '}
          (<a
            href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2436842&HistoricalAwards=false"
            target="_blank"
            rel="noopener noreferrer"
          >
            #2436842
          </a>)
          , to build out the Sage cyberinfrastructure with 300 next-generation nodes, the integration of advanced large language models (LLMs) for the edge, and new end-to-end workflows.
        </>
      ),
    },
  ];

  return (
    <main className="relative flex flex-col my-12">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col justify-center divide-y divide-slate-200">
          <div className="w-full max-w-3xl mx-auto relative -my-6">
            {/* Vertical timeline line */}
            <div className="absolute left-2 sm:left-[6.5rem] w-0.5 bg-indigo-600 h-full"></div>
            {events.map((event, index) => (
              <div key={index} className="relative pl-8 sm:pl-32 py-6 group">
                <div className="font-medium text-md text-indigo-500 mb-1 sm:mb-0">
                  {event.label}
                </div>
                <div className="flex flex-col sm:flex-row items-start mb-1">
                  {/* Dot container—centered on the line with white padding */}
                  <div className="absolute left-2 sm:left-[6.5rem] -ml-[11px]">
                    <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white">
                      <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                    </div>
                  </div>
                  <time className="sm:absolute left-0 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                    {event.date}
                  </time>
                  <div className="text-xl font-bold text-slate-900">
                    {event.title}
                  </div>
                </div>
                <div className="text-slate-500">{event.description()}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Timeline;
