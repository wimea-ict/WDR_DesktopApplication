export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  title?: boolean;
  children?: NavData[];
}

export const OCnavItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    name: 'Observationslip',
    url: '/observationslip',
    icon: 'icon-doc',
    children: [
      {
        name: 'Add Observationslip',
        url: '/observationslip/add-observationslip',
        icon: 'icon-pencil'
      },
      {
        name: 'View Observationslip',
        url: '/observationslip/view-observationslip',
        icon: 'icon-book-open'
      }
    ]
  },
  {
    name: 'User Management',
    url: '/user-management',
    icon: 'icon-user'
  }
];

export const ManagernavItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    name: 'User Management',
    url: '/user-management',
    icon: 'icon-user'
  }
];

export const SeniorZonalofficernavItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    name: 'Forms',
    url: 'forms',
    icon: 'icon-menu',
    children: [
      {
        name: 'MS Observation data',
        url: '/forms/ms-data',
        icon: 'icon-book-open'
      },
      {
        name: 'AWS Observation data',
        url: '/forms/aws',
        icon: 'icon-book-open'
      }
    ]
  },
  {
    name: 'Reports',
    url: '',
    icon: 'icon-menu',
    children: [
      {
        name: 'Observationslip Report',
        url: '/observationslipreport',
        icon: 'icon-book-open'
      },
      {
        name: 'Metar Report',
        url: '/metarreport',
        icon: 'icon-book-open'
      },
      {
        name: 'Speci Report',
        url: '/specireport',
        icon: 'icon-book-open'
      },
      {
        name: 'Weather Summary Report',
        url: '/wsr',
        icon: 'icon-book-open'
      },
      {
        name: 'Dekadal Report',
        url: '/dekadalreport',
        icon: 'icon-book-open'
      },
      {
        name: 'Synoptic Report',
        url: '/synopticreport',
        icon: 'icon-book-open'
      },
      {
        name: 'Monthly Rainfall Report',
        url: '/monthlyrainfallreport',
        icon: 'icon-book-open'
      },
      {
        name: 'Annual Rainfall Report',
        url: '/annualrainfallreport',
        icon: 'icon-book-open'
      },
      {
        name: 'Customized Rainfall Report',
        url: '/customizedrainfallreport',
        icon: 'icon-book-open'
      }
    ]
  },
  
];

export const WeatherForecasternavItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    name: 'Forms',
    url: 'forms',
    icon: 'icon-menu',
    children: [
      {
        name: 'MS Observation data',
        url: '/forms/ms-data',
        icon: 'icon-book-open'
      }
    ]
  },
  {
    name: 'Reports',
    url: '',
    icon: 'icon-menu',
    children: [
      {
        name: 'Observationslip Report',
        url: '/observationslipreport',
        icon: 'icon-book-open'
      },
      {
        name: 'Metar Report',
        url: '/metarreport',
        icon: 'icon-book-open'
      },
      {
        name: 'Speci Report',
        url: '/specireport',
        icon: 'icon-book-open'
      },
      {
        name: 'Weather Summary Report',
        url: '/wsr',
        icon: 'icon-book-open'
      },
      {
        name: 'Dekadal Report',
        url: '/dekadalreport',
        icon: 'icon-book-open'
      },
      {
        name: 'Synoptic Report',
        url: '/synopticreport',
        icon: 'icon-book-open'
      },
      {
        name: 'Monthly Rainfall Report',
        url: '/monthlyrainfallreport',
        icon: 'icon-book-open'
      },
      {
        name: 'Annual Rainfall Report',
        url: '/annualrainfallreport',
        icon: 'icon-book-open'
      },
      {
        name: 'Customized Rainfall Report',
        url: '/customizedrainfallreport',
        icon: 'icon-book-open'
      }
    ]
  },
  
];

export const WeatherAnalystnavItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    name: 'Reports',
    url: '',
    icon: 'icon-menu',
    children: [
      {
        name: 'Observationslip Report',
        url: '/observationslipreport',
        icon: 'icon-book-open'
      },
      {
        name: 'Metar Report',
        url: '/metarreport',
        icon: 'icon-book-open'
      },
      {
        name: 'Speci Report',
        url: '/specireport',
        icon: 'icon-book-open'
      },
      {
        name: 'Weather Summary Report',
        url: '/wsr',
        icon: 'icon-book-open'
      },
      {
        name: 'Dekadal Report',
        url: '/dekadalreport',
        icon: 'icon-book-open'
      },
      {
        name: 'Synoptic Report',
        url: '/synopticreport',
        icon: 'icon-book-open'
      },
      {
        name: 'Monthly Rainfall Report',
        url: '/monthlyrainfallreport',
        icon: 'icon-book-open'
      },
      {
        name: 'Annual Rainfall Report',
        url: '/annualrainfallreport',
        icon: 'icon-book-open'
      },
      {
        name: 'Customized Rainfall Report',
        url: '/customizedrainfallreport',
        icon: 'icon-book-open'
      }
    ]
  },
  
];


export const ManagerStationNetworksnavItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    name: 'System Data',
    url: '',
    icon: 'icon-menu',
    children: [
      {
        name: 'Stations',
        url: '/stations',
        icon: 'icon-location-pin'
      },
      {
        name: 'Instruments',
        url: '/view-instruments',
        icon: 'icon-compass'
      },
      {
        name: 'Elements',
        url: '/view-elements',
        icon: 'icon-location-pin'
      },
      {
        name: 'Add New station',
        url: '/newstation',
        icon: 'icon-location-pin'
      }
    ]
  },
  {
    name: 'Reports',
    url: '',
    icon: 'icon-menu',
    children: [
      {
        name: 'Observationslip Report',
        url: '/observationslipreport',
        icon: 'icon-book-open'
      },
      {
        name: 'Metar Report',
        url: '/metarreport',
        icon: 'icon-book-open'
      },
      {
        name: 'Speci Report',
        url: '/specireport',
        icon: 'icon-book-open'
      },
      {
        name: 'Weather Summary Report',
        url: '/wsr',
        icon: 'icon-book-open'
      },
      // {
      //   name: 'Dekadal Report',
      //   url: '/dekadalreport',
      //   icon: 'icon-book-open'
      // },
      {
        name: 'Synoptic Report',
        url: '/synopticreport',
        icon: 'icon-book-open'
      },
      {
        name: 'Monthly Rainfall Report',
        url: '/monthlyrainfallreport',
        icon: 'icon-book-open'
      },
      {
        name: 'Annual Rainfall Report',
        url: '/annualrainfallreport',
        icon: 'icon-book-open'
      },
      {
        name: 'Customized Rainfall Report',
        url: '/customizedrainfallreport',
        icon: 'icon-book-open'
      }
    ]
  },
  
];

export const ObservernavItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    name: 'Forms',
    url: '/observationslip',
    icon: 'icon-menu',
    children: [
      {
        name: 'Ms observation data',
        url: '/observationslip/view-observationslip',
        icon: 'icon-book-open'
      },
    ]
  },

    {
    name: 'Archive Scanned Forms',
    url: '/archive-scanned-forms',
    icon: 'icon-list',
    children: [
      {
        name: 'Observation Slip Form',
        url: '/archive-scanned-forms/observationslip-form',
        icon: 'icon-pencil'
      },
      {
        name: 'Metar Form',
        url: '/archive-scanned-forms/metar-form',
        icon: 'icon-note'
      },
      {
        name: 'Weather Summary Form',
        url: '/archive-scanned-forms/weather-summmary-form',
        icon: 'icon-book-open'
      },
      {
        name: 'Synoptic Form',
        url: '/archive-scanned-forms/synoptic-form',
        icon: 'icon-book-open'
      },
      {
        name: 'Dekandal Form',
        url: '/archive-scanned-forms/dekandal-form',
        icon: 'icon-book-open'
      },
      {
        name: 'Monthly Rainfall Form',
        url: '/archive-scanned-forms/monthly-rainfall-form',
        icon: 'icon-book-open'
      },
      {
        name: 'Annual Rainfall Form',
        url: '/archive-scanned-forms/annual-rainfall-form',
        icon: 'icon-book-open'
      }
    ]
  },
  {
    name: 'Archive Forms',
    url: '/archive-forms',
    icon: 'icon-menu',
    children: [
      {
        name: 'Observation slip Form',
        url: '/archive-forms/observationslipform',
        icon: 'sun'
      },
      {
        name: 'Weather Summary Form',
        url: '/archive-forms/weathersummaryform',
        icon: 'sun'
      },
      {
        name: 'Metar Form',
        url: '/archive-forms/metarform',
        icon: 'sun'
      },
      {
        name: 'Synoptic Form',
        url: '//archive-forms/synopticform',
        icon: 'sun'
      },
      {
        name: 'Dekandal Form',
        url: '/archive-forms/dekandalform',
        icon: 'sun'
      },
      {
        name: 'Archive Rainfall Form',
        url: '/archive-forms/archiveform',
        icon: 'sun'
      },
    ]
  },
];

export const DataOfficernavItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
    {
    name: 'Archive Scanned Forms',
    url: '/archive-scanned-forms',
    icon: 'icon-list',
    children: [
      {
        name: 'Observation Slip Form',
        url: '/archive-scanned-forms/observationslip-form',
        icon: 'icon-pencil'
      },
      {
        name: 'Metar Form',
        url: '/archive-scanned-forms/metar-form',
        icon: 'icon-note'
      },
      {
        name: 'Weather Summary Form',
        url: '/archive-scanned-forms/weather-summmary-form',
        icon: 'icon-book-open'
      },
      {
        name: 'Synoptic Form',
        url: '/archive-scanned-forms/synoptic-form',
        icon: 'icon-book-open'
      },
      {
        name: 'Dekandal Form',
        url: '/archive-scanned-forms/dekandal-form',
        icon: 'icon-book-open'
      },
      {
        name: 'Monthly Rainfall Form',
        url: '/archive-scanned-forms/monthly-rainfall-form',
        icon: 'icon-book-open'
      },
      {
        name: 'Annual Rainfall Form',
        url: '/archive-scanned-forms/annual-rainfall-form',
        icon: 'icon-book-open'
      }
    ]
  },
  {
    name: 'Archive Forms',
    url: '/archive-forms',
    icon: 'icon-menu',
    children: [
      {
        name: 'Observation slip Form',
        url: '/archive-forms/observationslipform',
        icon: 'sun'
      },
      {
        name: 'Weather Summary Form',
        url: '/archive-forms/weathersummaryform',
        icon: 'sun'
      },
      {
        name: 'Metar Form',
        url: '/archive-forms/metarform',
        icon: 'sun'
      },
      {
        name: 'Synoptic Form',
        url: '//archive-forms/synopticform',
        icon: 'sun'
      },
      {
        name: 'Dekandal Form',
        url: '/archive-forms/dekandalform',
        icon: 'sun'
      },
      {
        name: 'Archive Rainfall Form',
        url: '/archive-forms/archiveform',
        icon: 'sun'
      },
    ]
  },
];

