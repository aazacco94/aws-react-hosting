import React from 'react';

import {
  ServicesCard,
  ServicesH2,
  ServicesP
} from './ServicesElements';
import YoutubeEmbed from '../Shared/YoutubeEmbed';
import UdemyEmbed from '../Shared/UdemyEmbed';
import GoogleDriveEmbed from '../Shared/GoogleDriveEmbed';

const ServiceElement = (service, lightBg, lightText) => {
  return (
    <ServicesCard lightBg={lightBg}>
        {service.embedId &&
          <YoutubeEmbed embedId={service.embedId}/>
        }
        {service.embedId && 
          <ServicesH2 href={service.serviceGit} lightText={lightText}>{service.serviceH}</ServicesH2>
        }
        {service.embedId && 
          <ServicesP lightText={lightText}>
            {service.serviceDesc}
          </ServicesP>
        }    
        {service.embedUdemyId &&
          <UdemyEmbed embedId={service.embedUdemyId}/>
        }
        {service.embedUdemyId &&
          <ServicesH2 href={service.embedPhoto} lightText={lightText}>{service.serviceH}</ServicesH2>
        }
        {service.embedGoogleId &&
          <GoogleDriveEmbed embedId={service.embedGoogleId}/>
        }
        {service.embedGoogleId &&
          <ServicesH2 href={service.embedPhoto} lightText={lightText}>{service.serviceH}</ServicesH2>
        }
      </ServicesCard>
  )
}
export default ServiceElement;