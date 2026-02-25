export interface EventTool {
  id: string;
  name: string;
  description: string;
  url: string;
  icon: string;
}

export const eventTools: EventTool[] = [
  {
    id: "venue-filter",
    name: "Venue Filter",
    description: "Find and filter the perfect venue for your event with advanced search capabilities",
    url: "https://venue-ecru.vercel.app/admin-login",
    icon: "MapPin",
  },
  {
    id: "agreement-maker",
    name: "Agreement Maker",
    description: "Create professional event agreements and contracts with customizable templates",
    url: "https://agreement-maker2.vercel.app/",
    icon: "FileText",
  },
  {
    id: "quotation-maker",
    name: "Quotation Maker",
    description: "Generate detailed quotations and pricing proposals for your event services",
    url: "https://banquet-quote-wiz.vercel.app/",
    icon: "Calculator",
  },
  {
    id: "rsvp",
    name: "RSVP",
    description: "Manage guest responses and track attendance for your events seamlessly",
    url: "https://rsvp-eight-psi.vercel.app/admin/login",
    icon: "Users",
  },
  {
    id: "invoice-maker",
    name: "Invoice Maker",
    description: "Create and send professional invoices for your event management services",
    url: "https://invoice-maker.example.com",
    icon: "Receipt",
  },
];
