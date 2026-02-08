import ServiceLayout from '../pages/ServicePageDetail';
import data from '../data/projects.json';

export default function SocialMediaMarketing() {
  return <ServiceLayout service={data['social-media-marketing']} />;
}

