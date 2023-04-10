export type Publication = {
  // required for publication page
  authors: string
  name: string
  source: string
  year: number
  hideInFullList?: boolean

  // extra attrs for home page?
  shortTitle?: string
  href?: string
  image?: string
  id?: string
  description?: string
}

const publications : Publication[] = [{
  name: 'ARMing the Edge: Using Edge Computing and Machine Learning to Improve ARM Doppler Lidar Measurements',
  authors: 'Jackson, R., Collis, S., Beckman, P., Ferrier. N., Sankaran, R., Kim, Y., Park, S., Shakarami, S., and Newsom, R.',
  source: '(under review)',
  year: 2023,
  image: require('@site/static/img/home/featured-science/armDoppler.png').default,
  id: 'armDoppler'
}, {
  name: 'Optimizing Cloud Motion Estimation on the Edge with Phase Correlation and Optical Flow',
  authors: 'Raut, Bhupendra A., Paytsar Muradyan, Rajesh Sankaran, Robert C. Jackson, Seongha Park, Sean A. Shahkarami, Dario Dematties, Yongho Kim, Joseph Swantek, Neal Conrad, Wolfgang Gerlach, Sergey Shemyakin, Pete Beckman, Nicola J. Ferrier, and Scott M. Collis.',
  source: 'Atmospheric Measurement Techniques 16, no. 5 (2023): 1195-1209.',
  year: 2023,
  href: 'https://amt.copernicus.org/articles/16/1195/2023/',
  image: require('@site/static/img/home/featured-science/cloudMotion.jpg').default,
  id: 'cloudMotion'
}, {
  name: 'Let\’s Unleash the Network Judgment: A Self-Supervised Approach for Cloud Image Analysis',
  authors: 'Dematties, Dario, Bhupendra A. Raut, Seongha Park, Robert C. Jackson, Sean Shahkarami, Yongho Kim, Rajesh Sankaran, Pete Beckman, Scott M. Collis, and Nicola Ferrier.',
  source: 'Artificial Intelligence for the Earth Systems (2023): 1-34.',
  year: 2023,
  href: 'https://journals.ametsoc.org/view/journals/aies/aop/AIES-D-22-0063.1/AIES-D-22-0063.1.xml',
  image: require('@site/static/img/home/featured-science/selfSupervised.png').default,
  id: 'selfSupervised'
}, {
  name: 'Prediction of Solar Irradiance and Photovoltaic Solar Energy Product Based on Cloud Coverage Estimation Using Machine Learning Methods',
  authors: 'Seongha Park, Yongho Kim, Nicola J. Ferrier, Scott M. Collis, Rajesh Sankaran and Pete H. Beckman.',
  source: '2020, Atmosphere, Volume 12, Issue 3, pages 395.',
  year: 2021,
  href: 'https://www.mdpi.com/2073-4433/12/3/395',
  image: require('@site/static/img/home/featured-science/solarIrradiance.png').default,
  id: 'solarIrradiance'
}]


export default publications.sort((a, b) => b.year - a.year)
