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
  title: 'Adversarial Predictions of Data Distributions Across Federated Internet-of-Things Devices',
  authors: 'Samir Rajani, Dario Dematties, Nathaniel Hudson, Kyle Chard, Nicola Ferrier, Rajesh Sankaran, and Peter Beckman',
  publication: 'The IEEE 9th World Forum on Internet of Things',
  year: 2023,
  href: 'https://doi.org/10.48550/arXiv.2308.14658'
}, {
  title:'Keynote Talk: Leveraging the Edge-Cloud Continuum to Manage the Impact of Wildfires on Air Quality',
  authors: 'Daniel Balouek-Thomert, Ismael Perez, Sam Faulstich, Heather Holmes, Ilkay Altintas, and Manish Parashar}',
  publication: '2023 IEEE International Conference on Pervasive Computing and Communications Workshops and other Affiliated Events (PerCom Workshops)',
  pages: '27-31',
  year: 2023,
  href: 'https://doi.org/10.1109/PerComWorkshops56833.2023.10150251'
}, {
  title: 'Towards a Dynamic Composability Approach for using Heterogeneous Systems in Remote Sensing',
  authors: 'Ilkay Altintas, Ismael Perez, Dmitry Mishin, Adrien Trouillaud, Christopher Irving, John Graham, Mahidhar Tatineni, Thomas DeFanti, Shawn Strande, Larry Smarr, and Michael Norman',
  publication: '2022 IEEE 18th International Conference on e-Science (e-Science)',
  pages: '336-345',
  year: 2022,
  href: 'https://doi.org/10.1109/eScience55777.2022.00047'
}, {
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
}, {
  title: 'Multiperspective Automotive Labeling',
  authors: 'Luke Jacobs, Akhil Kodumuri, Jim James, Seongha Park, and Yongho Kim',
  publication: '2020 IEEE International Parallel and Distributed Processing Symposium Workshops (IPDPSW)',
  pages: '927-936',
  year: 2020,
  href: 'https://doi.org/10.1109/IPDPSW50202.2020.00155'
}]

const datasets : Publication[] = [{
  title: 'CROCUS Air Quality Data at Northeastern Illinois University Rooftop',
  authors: 'Joseph O\'Brien, Gregory Anderson, Paytsar Muradyan, Matthew Tuftedal, Scott Collis, Robert Jackson, Maxwell Grover, Dario Dematties, Seongha Park, Rajesh Sankaran, Peter Beckman, Nicola Ferrier, Yongho Kim, and Sean Shahkarami',
  publication: 'U.S. Department of Energy Office of Scientific and Technical Information',
  year: 2024,
  href: 'https://doi.org/10.15485/2335799'
}, {
  title: 'Doppler spectra from ARM Doppler Lidar during ARMing the Edge',
  authors: 'Bhupendra Raut, Seongha Park, Dario Dematties, Scott Collis, Nicola Ferrier, Yongho Kim, Sean Shahkarami, Pete Beckman, and Rajesh Sankaran',
  publication: 'U.S. Department of Energy Office of Scientific and Technical Information',
  year: 2023,
  href: 'https://doi.org/10.5439/2204486'
}]

export default publications.sort((a, b) => b.year - a.year)
export {conferenceProceedings}
export {datasets}

