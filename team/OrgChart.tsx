
const orgData = {
  name: 'Director: Pete Beckman, NU',
  details: 'Deputy Director: Nicola Ferrier, NU <br> Exec. Director/PM: Helen Taaffe, NU <br> Risk Management: Jim Olds, GMU',
  color: 'bg-red-500 text-white',
  children: [
    {
      name: 'Advisory Committee AC',
      details: 'Daniel Reed, chair, Bill Gropp, Diane Pataki, Amanda Randles, Ness Shroff',
      color: 'bg-yellow-500 text-black',
    },
    {
      name: 'AI Enablement',
      details: 'N. Ferrier, NU <br> AI for Edge: J. Leigh, UH <br> AI for Data Commons: I. Altintas, UCSD & M. Parashar, Utah <br> Trustworthy AI: N. Ferrier, NU <br> AI for Earth Science: E. Kelly, CSU & D. Toomey, UO',
      color: 'bg-orange-500 text-white',
    },
    {
      name: 'Cyberinfrastructure',
      details: 'S. Shahkarami, NU <br> Sage Core: S. Shahkarami, NU <br> LLM Tools: N. Conrad, NU <br> Data Commons & HPC Workflows: I. Perez, UCSD <br> Cybersecurity: S. Shahkarami, NU',
      color: 'bg-blue-500 text-white',
    },
    {
      name: 'Platform Upgrades / Deployments',
      details: 'R. Sankaran, NU <br> Edge Platform: R. Sankaran, NU <br> Hardware Procurement: NU <br> Manufacturing WSN: NU <br> Science Integration w/ Existing Networks: E. Kelly, CSU',
      color: 'bg-purple-500 text-white',
    },
    {
      name: 'Education & Student Training',
      details: 'M. Papka, UIC / V. Taylor, NU <br> Curriculum: V. Taylor, NU <br> Community Engagement: V. Taylor, NU <br> Indigenous Peoples: K. Marion Suiseeya, CNAIR <br> Community Engagement & Broadening Participation: NU',
      color: 'bg-green-500 text-white',
    },
    {
      name: 'Operations and User Support',
      details: 'N. Conrad, NU <br> User Services: NU <br> Technical User Support: NU <br> Maintenance of Sage Grande Tested: NU <br> Training & Documentation: NU',
      color: 'bg-red-600 text-white',
    },
  ],
};

const OrgChart = ({ data }) => {
  return (
    <div className="flex flex-col items-center">
      <div className={`p-4 rounded-lg w-64 text-center ${data.color}`} dangerouslySetInnerHTML={{ __html: `<strong>${data.name}</strong><br>${data.details}` }} />
      {data.children && (
        <div className="flex flex-wrap justify-center mt-4 space-x-4">
          {data.children.map((child, index) => (
            <div key={index} className="flex flex-col items-center">
              <OrgChart data={child} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <div className="p-8">
      <OrgChart data={orgData} />
    </div>
  );
}
