interface CaseImage {
  url: string;
}

interface Case {
  uid: string;
  title: string;
  date_found: string;
  location_found: string;
  description: string;
  image?: CaseImage;
}
