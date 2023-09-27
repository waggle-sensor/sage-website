export type Publication = {
  // required for publication page
  title: string
  authors: string
  publication: string
  volume?: number
  number?: number | string
  pages?: string
  year: number
  hideInFullList?: boolean

  // extra attrs for home page?
  href?: string
  image?: string
  id?: string
}


const publications : Publication[] = [{
  title: 'ARMing the Edge: Designing Edge Computing–Capable Machine Learning Algorithms to Target ARM Doppler Lidar Processing',
  authors: 'Jackson, Robert C., Bhupendra A. Raut, Dario Dematties, Scott M. Collis, Nicola Ferrier, Pete Beckman, Rajesh Sankaran, Yongho Kim, Seongha Park, Sean Shahkarami, and Rob Newsom',
  publication: 'Artificial Intelligence for the Earth Systems',
  volume: 2,
  number: 4,
  pages: '220062',
  year: 2023,
  href: 'https://doi.org/10.1175/AIES-D-22-0062.1',
  image: require('@site/static/img/home/featured-science/armDoppler.png').default,
  id: 'armDoppler'
}, {
  title: 'Optimizing Cloud Motion Estimation on the Edge with Phase Correlation and Optical Flow',
  authors: 'Raut, Bhupendra A., Paytsar Muradyan, Rajesh Sankaran, Robert C. Jackson, Seongha Park, Sean A. Shahkarami, Dario Dematties, Yongho Kim, Joseph Swantek, Neal Conrad, Wolfgang Gerlach, Sergey Shemyakin, Pete Beckman, Nicola J. Ferrier, and Scott M. Collis.',
  publication: 'Atmospheric Measurement Techniques',
  volume: 16,
  number: 5,
  pages: '1195-1209',
  year: 2023,
  href: 'https://doi.org/10.5194/amt-16-1195-2023',
  image: require('@site/static/img/home/featured-science/cloudMotion.jpg').default,
  id: 'cloudMotion'
}, {
  title: 'Let’s Unleash the Network Judgment: A Self-Supervised Approach for Cloud Image Analysis',
  authors: 'Dematties, Dario, Bhupendra A. Raut, Seongha Park, Robert C. Jackson, Sean Shahkarami, Yongho Kim, Rajesh Sankaran, Pete Beckman, Scott M. Collis, and Nicola Ferrier.',
  publication: 'Artificial Intelligence for the Earth Systems.',
  pages: '1-34',
  year: 2023,
  href: 'https://doi.org/10.1175/AIES-D-22-0063.1',
  image: require('@site/static/img/home/featured-science/selfSupervised.png').default,
  id: 'selfSupervised'
}, {
  title: 'Prediction of Solar Irradiance and Photovoltaic Solar Energy Product Based on Cloud Coverage Estimation Using Machine Learning Methods',
  authors: 'Seongha Park, Yongho Kim, Nicola J. Ferrier, Scott M. Collis, Rajesh Sankaran and Pete H. Beckman.',
  publication: 'Atmosphere',
  volume: 12,
  number: 3,
  pages: '395',
  year: 2021,
  href: 'https://doi.org/10.3390/atmos12030395',
  image: require('@site/static/img/home/featured-science/solarIrradiance.png').default,
  id: 'solarIrradiance'
}, {
  title: 'Goal-driven Scheduling Model in Edge Computing for Smart City Applications',
  authors: 'Kim, Yongho, Seongha Park, Sean Shahkarami, Rajesh Sankaran, Nicola Ferrier, and Pete Beckman.',
  publication: 'Journal of Parallel and Distributed Computing',
  volume: 167,
  pages: '97-108',
  year: 2022,
  href: 'https://doi.org/10.1016/j.jpdc.2022.04.024'
}, {
  title: 'Hands-On Computer Science: The Array of Things Experimental Urban Instrument',
  authors: 'Charlie Catlett, Pete Beckman, Nicola Ferrier, Michael E. Papka, Rajesh Sankaran, Jeff Solin, Valerie Taylor, Douglas Pancoast, and Daniel Reed.',
  publication: 'Computing in Science & Engineering',
  volume: 24,
  number: 1,
  pages: '57-63',
  year: 2022,
  href: 'https://doi.org/10.1109/MCSE.2021.3139405'
}, {
  title: 'Measuring Cities with Software-Defined Sensors',
  authors: 'Charlie Catlett, Pete Beckman, Marc G. Berman, Nicola Ferrier, Howard Nusbaum, Michael E. Papka, and Rajesh Sankaran.',
  publication: 'IEEE Journal of Social Computing',
  volume: 1,
  number: 1,
  pages: '14-27',
  year: 2020,
  href: 'https://doi.org/10.23919/JSC.2020.0003'
}, {
  title: 'Harnessing the Computing Continuum for Programming Our World',
  authors: 'Pete Beckman, Jack Dongarra, Nicola Ferrier, Geoffrey Fox, Terry Moore, Dan Reed, and Micah Beck.',
  publication: 'Fog Computing: Theory and Practice (A. Y. Zomaya, A. Abbas, and S. U. Khan, eds.), John Wiley & Sons, Hoboken, NJ.',
  year: 2020,
  href: 'https://doi.org/10.1109/MCSE.2021.3139405'
}]



const conferenceProceedings : Publication[] = [{
  title: 'Addressing the Constraints of Active Learning on the Edge',
  authors: 'Nueve, Enrique, Sean Shahkarami, Seongha Park, and Nicola Ferrier.',
  publication: '2021 IEEE International Parallel and Distributed Processing Symposium Workshops (IPDPSW)',
  pages: '845-849',
  year: 2021,
  href: 'https://doi.org/10.1109/IPDPSW52791.2021.00126'
}, {
  title: 'WeatherNet: Nowcasting Net Radiation at the Edge',
  authors: 'Nueve, Enrique, Robert Jackson, Rajesh Sankaran, Nicola Ferrier, and Scott Collis.',
  publication: '2021 IEEE Conference on Technologies for Sustainability (SusTech)',
  pages: '1-7',
  year: 2021,
  href: 'https://doi.org/10.1109/SusTech51236.2021.9467444'
}]


export default publications.sort((a, b) => b.year - a.year)
export {conferenceProceedings}

