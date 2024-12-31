import { useState } from 'react';
import teamData from '../../components/dummyData';
import { Layout } from '../../components/Layout/page';

const ReadMoreReadLess = ({ text, maxLength = 100 }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    const shouldTruncate = text.length > maxLength;

    return (
        <div className="text-gray-700 overflow-hidden transition-all duration-300 ease-in-out">
            <p className={` ${isExpanded ? 'max-h-full' : 'max-h-20 overflow-hidden'}`}>
                {shouldTruncate && !isExpanded ? text.slice(0, maxLength) + '...' : text}
            </p>
            {shouldTruncate && (
                <button
                    onClick={toggleReadMore}
                    className="mt-2 text-[#89C54B] font-semibold hover:underline transition-colors duration-300"
                >
                    {isExpanded ? 'Read Less' : 'Read More'}
                </button>
            )}
        </div>
    );
};

const AboutUs = () => {
    return (
        <Layout>
            <div className="min-h-screen">
                {/* Header Section */}
                <div className="bg-brandPrimary h-[150px] lg:h-[200px]">
                    <h2 className="text-white lg:text-4xl sm:text-3xl flex justify-center items-center pt-24 lg:pt-28">Our Team</h2>
                </div>

                {/* Team Section */}
                <section className="mx-6 lg:mx-28 rounded-lg mb-12">
                    {/* <h2 className="text-3xl font-semibold text-[#89C54B] text-center mb-8">Meet Our Team</h2> */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                        {teamData.map((member) => (
                            <div
                                key={member.id}
                                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl text-center transition-transform transform hover:scale-105 self-start"
                            >
                                <div className="flex flex-col items-center mb-4">
                                    <img
                                        src={member.photoUrl}
                                        alt={member.name}
                                        className="w-24 h-24 object-cover rounded-full shadow-md mb-4 border-4 border-[#89C54B]"
                                    />
                                    <h3 className="text-xl font-medium text-gray-800">{member.name}</h3>
                                    <p className="text-sm text-gray-500">{member.position}</p>
                                    <ReadMoreReadLess text={member.details} maxLength={100} className="mb-32" />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default AboutUs;
