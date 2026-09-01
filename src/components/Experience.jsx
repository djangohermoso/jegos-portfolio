import React from 'react'

const jobs = [
  {
    period: '2025 – Present',
    title: 'Software Developer — Management Information Systems Department',
    org: 'Diliman Educational Corporation',
    points: [
      'Lead developer of the in-house School Management System (Laravel 13, Livewire 4, MariaDB, Redis, Tailwind) — student records, enrollment, grading, report cards, and DepEd form generation for Preparatory through College.',
      'Delivered 100+ features across 6 role-based portals; grew the automated test suite from 60 to 449 passing tests (Pest PHP).',
      'Built RBAC (13 roles, Spatie), audit logging, 2FA, and soft-delete data governance; found and fixed several access-control vulnerabilities where users could reach records outside their authorization scope.',
      'Administered the Ubuntu 24.04 production server (Nginx, PHP-FPM 8.3, MariaDB, Redis, Laravel Horizon) and wrote idempotent import tooling to onboard thousands of real student records and historical grades.',
    ],
  },
  {
    period: '2024 – 2025',
    title: 'Content Moderator — Enshored Inc.',
    org: '',
    points: [
      'Reviewed high-volume user-generated content against policy; flagged abuse and fraud and documented recurring patterns — pattern-recognition and policy-enforcement skills that transfer to SOC alert triage.',
    ],
  },
  {
    period: '2022 – 2023',
    title: 'Legal Management Assistant — JoyNostalg (Raemulan Land Inc.)',
    org: '',
    points: [
      'Maintained confidential legal records and document workflows; coordinated filing, deadlines, and compliance tracking.',
    ],
  },
  {
    period: '2017 – 2018',
    title: 'IT Support Intern — Immaculate Concepcion Cathedral School (ICT Dept.)',
    org: '',
    points: [
      'Hardware/software troubleshooting and end-user support for staff and computer labs; Windows imaging, account setup, and basic network maintenance.',
    ],
  },
]

const projects = [
  {
    title: 'Security / SOC Home Lab',
    tech: 'Wazuh · CrowdSec · pfSense · Linux · SpiderFoot · Sherlock',
    points: [
      'Deployed Wazuh (SIEM/XDR) for centralized log collection, file-integrity monitoring, and alerting across Windows/Linux endpoints; deployed CrowdSec for behavior-based intrusion detection with automated IP blocking.',
      'Built a pfSense perimeter firewall lab (rules, NAT, VLAN segmentation, VPN); practiced alert triage, incident write-ups, and OSINT recon with SpiderFoot and Sherlock.',
    ],
  },
  {
    title: 'Handdy Jobby — job-matching platform for skilled workers',
    tech: 'HTML · JavaScript · PHP · CSS · MySQL',
    points: [
      'Full web application connecting skilled workers with clients — listings, profiles, and booking workflow.',
    ],
  },
]

const Experience = () => {
  return (
    <div name='experience' className='w-full bg-[#051123] text-gray-300 py-24'>
      <div className='max-w-[1000px] mx-auto p-4'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Experience</p>
          <p className='py-6'>Where I've worked and what I've built.</p>
        </div>

        <div className='border-l-2 border-[#233554] pl-6 space-y-8'>
          {jobs.map((job) => (
            <div key={job.title} className='relative'>
              <span className='absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-pink-600'></span>
              <p className='text-sm text-gray-400'>{job.period}</p>
              <p className='text-lg font-bold text-gray-100'>{job.title}</p>
              {job.org && <p className='italic text-gray-400'>{job.org}</p>}
              <ul className='list-disc list-inside space-y-1 pt-2 text-gray-300'>
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='pt-16 pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Key Projects</p>
        </div>

        <div className='grid md:grid-cols-2 gap-6'>
          {projects.map((project) => (
            <div key={project.title} className='bg-[#0a192f] p-5 rounded-md shadow-lg shadow-[#040c16]'>
              <p className='text-lg font-bold text-gray-100'>{project.title}</p>
              <p className='italic text-sm text-pink-600 pt-1'>{project.tech}</p>
              <ul className='list-disc list-inside space-y-1 pt-3 text-gray-300'>
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
