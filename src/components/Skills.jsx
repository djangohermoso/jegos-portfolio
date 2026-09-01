import React from 'react'

const skillGroups = [
  {
    label: 'Languages & Web',
    items: 'PHP (Laravel, Livewire), JavaScript, HTML/CSS, Tailwind, SQL',
  },
  {
    label: 'Databases & Systems',
    items: 'MariaDB / MySQL, Redis, Linux (Ubuntu), Windows, Nginx, PHP-FPM, Bash, Git, Active Directory',
  },
  {
    label: 'Security / SOC',
    items: 'Wazuh (SIEM/XDR), CrowdSec (IDS/IPS), pfSense, log analysis & alert triage, SpiderFoot & Sherlock (OSINT)',
  },
  {
    label: 'Practices',
    items: 'RBAC, 2FA, audit logging, automated testing (Pest), deployment runbooks',
  },
];

const Skills = () => {
  return (
    <div name='skills' className='bg-[#051123] text-gray-300 py-24'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl  font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>These are the technologies I've used</p>
            </div>

            <div className='w-full grid sm:grid-cols-2 gap-6 pt-4'>
                {skillGroups.map((group) => (
                    <div key={group.label} className='bg-[#0a192f] p-4 rounded-md shadow-md shadow-[#040c16]'>
                        <p className='text-pink-600 font-bold uppercase tracking-wide text-sm'>{group.label}</p>
                        <p className='pt-1 text-gray-300'>{group.items}</p>
                    </div>
                ))}
            </div>

        </div>
    </div>
  )
}

export default Skills
