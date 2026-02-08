import ServiceLayout from '../pages/ServicePageDetail';
import data from '../data/projects.json';

export default function WebsitesApplications() {
  return <ServiceLayout service={data['websites-and-applications']} />;
}
