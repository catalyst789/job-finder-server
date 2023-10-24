export interface Job {
  jobId: string;
  title: string;
  experience: string;
  location: string;
  salary: string;
  skills: [string];
  rolesAndResponsibilities: [string];
  jobDescription: string;
  company: string;
  contactEmail: string;
  deadline: Date;
}
