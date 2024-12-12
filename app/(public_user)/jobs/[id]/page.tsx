'use client'
import { JobDetailCard } from "@/components/JobComponent/JobDetailCard";
import { JobListingCard } from "@/components/JobComponent/JobListingCard";
import logo from '@/public/job/khmerEnterpriseLogo.png'
import { useRouter } from "next/navigation";
import { JobMainContainer } from "@/components/JobComponent/JobMainContainer";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Clock, LayoutTemplate, MapPin } from "lucide-react";
import { QuizButton } from "@/components/QuizComponent/QuizButton";
import { useState } from "react";

const jobListings = [
    {
        id: '1',
        title: 'iOS Developer',
        desc: 'Anakut Digital Solutions',
        image: '/job/khmerEnterpriseLogo.png',
        time: 'Full-Time',
        location: 'Remote',
        category: 'Software Development',
        jobDesc: 'We are seeking a highly skilled and experienced Mid-Senior iOS Developer to join our dynamic team. As a Mid-Senior iOS Developer, you will play a crucial role in designing, developing, and maintaining high-quality iOS applications.',
        jobDescLabel: 'Job Description',
        salary: '600+',
    },
    {
        id: '2',
        title: 'Backend Developer',
        desc: 'Anakut Digital Solutions',
        image: '/job/khmerEnterpriseLogo.png',
        time: 'Part-Time',
        location: 'Phnom Penh',
        category: 'Backend Development',
        jobDesc: 'Join our innovative team as a Backend Developer and play a pivotal role in developing robust and scalable server-side applications.',
        jobDescLabel: 'Job Description',
        salary: '500+',
    },
    {
        id: '3',
        title: 'Frontend Developer',
        desc: 'Cambodia Tech Ventures',
        image: '/job/khmerEnterpriseLogo.png',
        time: 'Full-Time',
        location: 'Phnom Penh',
        category: 'Web Development',
        jobDesc: 'We are looking for a passionate Frontend Developer to build innovative and interactive user interfaces.',
        jobDescLabel: 'Job Description',
        salary: '700+',
    },
    {
        id: '4',
        title: 'Graphic Designer',
        desc: 'Creative Agency',
        image: '/job/khmerEnterpriseLogo.png',
        time: 'Contract',
        location: 'Siem Reap',
        category: 'Design',
        jobDesc: 'Collaborate with clients to create visually appealing designs and branding.',
        jobDescLabel: 'Job Description',
        salary: '400+',
    },
    {
        id: '5',
        title: 'Data Analyst',
        desc: 'Tech Analytics Co.',
        image: '/job/khmerEnterpriseLogo.png',
        time: 'Full-Time',
        location: 'Remote',
        category: 'Data Science',
        jobDesc: 'Analyze and interpret complex data sets to inform business decisions.',
        jobDescLabel: 'Job Description',
        salary: '800+',
    },
    {
        id: '6',
        title: 'Digital Marketing Specialist',
        desc: 'Global Marketing Ltd.',
        image: '/job/khmerEnterpriseLogo.png',
        time: 'Part-Time',
        location: 'Phnom Penh',
        category: 'Marketing',
        jobDesc: 'Develop and execute digital marketing strategies to enhance brand presence.',
        jobDescLabel: 'Job Description',
        salary: '600+',
    },
    {
        id: '7',
        title: 'Product Manager',
        desc: 'Tech Innovations',
        image: '/job/khmerEnterpriseLogo.png',
        time: 'Full-Time',
        location: 'Phnom Penh',
        category: 'Management',
        jobDesc: 'Oversee product lifecycle and collaborate with cross-functional teams to deliver high-quality solutions.',
        jobDescLabel: 'Job Description',
        salary: '1200+',
    },
    {
        id: '8',
        title: 'AI Researcher',
        desc: 'Future AI Labs',
        image: '/job/khmerEnterpriseLogo.png',
        time: 'Full-Time',
        location: 'Remote',
        category: 'Artificial Intelligence',
        jobDesc: 'Conduct cutting-edge research in AI and machine learning technologies.',
        jobDescLabel: 'Job Description',
        salary: '1500+',
    },
];


export default function Page({ params }: { params: { id: string } }) {

    const router = useRouter()

    const { id } = params;

    const selectedJob = jobListings.find((job) => job.id === id);

    const [activeJobId, setActiveJobId] = useState<string | null>(null);

    const handleCardClick = (id: string) => {
        router.push(`/jobs/${id}`);
        setActiveJobId(id);
      };

    return (
        <div className="bg-white mt-4">
            <JobMainContainer title='ជាមួយការងារដែលមានតម្រូវការខ្ពស់ក្នុងទីផ្សារ' desc='តាមដានទីផ្សារការងារដោយប្រើឧបករណ៍ឆ្លាតវៃរបស់យើងជាមួយនឹងការវិភាគទិន្នន័យដើម្បីស្វែងរកការងារដែលកំពុងពេញនិយម។ យើងនាំមកជូនអ្នកនូវឱកាសការងារដែលមានតម្រូវការខ្ពស់បំផុត ដើម្បីជួយអ្នករៀបចំផែនការសម្រាប់អនាគតដ៏ជោគជ័យ។' highlight='ឈានទៅរកអនាគតរបស់អ្នកនៅថ្ងៃនេះ' />

            <div className='max-w-7xl mx-auto px-4 py-4 md:py-10 lg:py-12 space-y-4 lg:space-y-6' >

                <p className='md:text-xl lg:text-2xl font-semibold text-textprimary'>កំណត់ទិន្នន័យ</p>

                <div className='grid grid-cols-1 md:grid-cols-4 gap-4 text-textprimary' >
                    {/*  Job category */}
                    <Select>
                        <SelectTrigger className="w-full bg-white rounded-[8px] border-2 border-gray-200 outline-none ">
                            <div className='flex gap-2'>
                                <LayoutTemplate size={18} color='#0BBB8A' />
                                <SelectValue placeholder="ប្រភេទ" />
                            </div>

                        </SelectTrigger>
                        <SelectContent className='bg-white text-textprimary'>
                            <SelectItem className='focus:bg-bgPrimaryLight' value="light">Light</SelectItem>
                            <SelectItem className='focus:bg-bgPrimaryLight' value="dark">Dark</SelectItem>
                            <SelectItem className='focus:bg-bgPrimaryLight' value="system">System</SelectItem>
                        </SelectContent>
                    </Select>

                    {/* Location */}
                    <Select>
                        <SelectTrigger className="w-full bg-white rounded-[8px] border-2 border-gray-200 outline-none ">
                            <div className='flex gap-2'>
                                <MapPin size={18} color='#0BBB8A' />
                                <SelectValue placeholder="ទីកន្លែងបំពេញការងារ" />
                            </div>

                        </SelectTrigger>
                        <SelectContent className='bg-white text-textprimary'>
                            <SelectItem className='focus:bg-bgPrimaryLight' value="light">Light</SelectItem>
                            <SelectItem className='focus:bg-bgPrimaryLight' value="dark">Dark</SelectItem>
                            <SelectItem className='focus:bg-bgPrimaryLight' value="system">System</SelectItem>
                        </SelectContent>
                    </Select>


                    {/* TIme Schdule */}
                    <Select>
                        <SelectTrigger className="w-full bg-white rounded-[8px] border-2 border-gray-200 outline-none ">
                            <div className='flex gap-2'>
                                <Clock size={18} color='#0BBB8A' />
                                <SelectValue placeholder="ប្រភេទនៃការបំពេញការងារ" />
                            </div>

                        </SelectTrigger>
                        <SelectContent className='bg-white text-textprimary'>
                            <SelectItem className='focus:bg-bgPrimaryLight' value="light">Light</SelectItem>
                            <SelectItem className='focus:bg-bgPrimaryLight' value="dark">Dark</SelectItem>
                            <SelectItem className='focus:bg-bgPrimaryLight' value="system">System</SelectItem>
                        </SelectContent>
                    </Select>

                    <QuizButton title='កំណត់ឡើងវិញ' rounded='xl' type='rightIcon' />

                </div>

            </div>

            <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4">
                        {/* Left Section: Job Listing */}
                        <div className="lg:col-span-5 space-y-4">
                            {jobListings.map((job) => (
                                <JobListingCard
                                    key={job.id}
                                    title={job.title}
                                    desc={job.desc}
                                    image={job.image}
                                    time={job.time}
                                    location={job.location}
                                    isActive={activeJobId === job.id}
                                    onClick={() => handleCardClick(job.id)}
                                />

                            ))}

                        </div>

                        {/* Right Section: Job Details */}
                        <div className="lg:col-span-7 ">
                            <div className="lg:sticky lg:top-0">
                                {selectedJob ? (
                                    <JobDetailCard
                                        jobTitle={selectedJob.title}
                                        jobCompany={selectedJob.desc}
                                        image={logo}
                                        time={selectedJob.time}
                                        location={selectedJob.location}
                                        category={selectedJob.category}
                                        jobDesc={selectedJob.jobDesc}
                                        jobDescLabel={selectedJob.jobDescLabel}
                                        buttonText="Apply Now"
                                        salary={selectedJob.salary}
                                    />
                                ) : (
                                    <div className="p-4 text-gray-600">Please select a job to see the details.</div>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
        </div>

    )

}



