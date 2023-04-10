export type Publication = {
  // required for publication page
  authors: string
  name: string
  source: string
  year: number
  hideInFullList?: boolean

  // extra attrs for home page?
  title?: string
  href?: string
  image?: string
  id?: string
  description?: string
}

const publications : Publication[] = [{
  authors: 'Jackson, R., Collis, S., Beckman, P., Ferrier. N., Sankaran, R., Kim, Y., Park, S., Shakarami, S., and Newsom, R.',
  name: 'ARMing the Edge: using edge computing and machine learning to improve ARM Doppler Lidar measurements',
  source: 'under review.',
  year: 2022,
  title: 'Designing Edge Computing-Capable ML Algorithms to Target ARM Dopler Lidar Processing',
  id: 'armDoppler'
}, {
  authors: 'Raut, Bhupendra A., Paytsar Muradyan, Rajesh Sankaran, Robert C. Jackson, Seongha Park, Sean A. Shahkarami, Dario Dematties, Yongho Kim, Joseph Swantek, Neal Conrad, Wolfgang Gerlach, Sergey Shemyakin, Pete Beckman, Nicola J. Ferrier, and Scott M. Collis.',
  name: '"Optimizing cloud motion estimation on the edge with phase correlation and optical flow."',
  source: 'Atmospheric Measurement Techniques 16, no. 5 (2023): 1195-1209.',
  year: 2023,
  title: 'Optimizing cloud motion estimation on the edge with phase correlation and optical flow',
  href: 'https://amt.copernicus.org/articles/16/1195/2023/',
  image: require('@site/static/img/home/featured-science/cloudMotion.jpg').default,
  id: 'cloudMotion'
}, {
  authors: 'Dematties, Dario, Bhupendra A. Raut, Seongha Park, Robert C. Jackson, Sean Shahkarami, Yongho Kim, Rajesh Sankaran, Pete Beckman, Scott M. Collis, and Nicola Ferrier.',
  name: '"Let\’s Unleash the Network Judgment: A Self-Supervised Approach for Cloud Image Analysis."',
  source: 'Artificial Intelligence for the Earth Systems (2023): 1-34.',
  year: 2023,
  title: 'A Self-Supervised Approach for Cloud Image Analysis',
  id: 'selfSupervised'
}, {
  aurthors: '__todo?__',
  name: '__todo?__',
  year: 2023,
  title: 'Prediction of Solar Irradiance and Photovoltaic Solar Energy Based on Cloud Coverage...',
  id: 'solarIrradiance',
  hideInFullList: true
}]


export default publications.sort((a, b) => b.year - a.year)
