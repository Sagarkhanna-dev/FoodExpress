import { FaGithub, FaLinkedin } from "react-icons/fa"

// Relationship of components
// Home.js -> Footer.js
export default function Footer() {
    const companyItems = [
        {id:0, label:'About Us'},
        {id:1, label:'Swiggy Corporate'},
        {id:2, label:'Careers'},
        {id:3, label:'Team'},
        {id:4, label:'Swiggy One'},
        {id:5, label:'Swiggy Instamart'},
        {id:6, label:'Swiggy DineOut'},
        {id:7, label:'Minis'},
        {id:8, label:'Pyng'}
    ]

    const ContactUsItems = [
        {id:0, label:'Help & Support'},
        {id:1, label:'Partner With Us'},
        {id:2, label:'Ride With Us'}
    ]

    const LegalItems = [
        {id:0, label:'Terms & Conditions'},
        {id:1, label:'Cookie Policy'},
        {id:2, label:'Privacy Policy'}
    ]

    const AvailableItems = [
        {id:0, label:'Bangalore'},
        {id:1, label:'Gurgaon'},
        {id:2, label:'Hyderabad'},
        {id:3, label:'Delhi'},
        {id:4, label:'Mumbai'},
        {id:5, label:'Pune'},
    ]

    const LifeAtItems = [
        {id:0, label:'Explore With Swiggy'},
        {id:1, label:'Swiggy News'},
        {id:2, label:'Snackables'}
    ]

    return (
        <div className="w-full bg-gray-200 pb-1">
            <div className="w-[80%] mx-auto flex items-center flex-col md:flex-row flex-wrap justify-between gap-6 px-4 md:px-12 pt-8">
                {/* Image div */}
                <div className="md:mb-[40%] cursor-pointer">
                    <div>
                        <img src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg" alt="swiggy png" className="w-full h-full" />
                        <div className="text-gray-700 text-lg mt-2">© 2025 Swiggy Limited</div>
                    </div>
                </div>

                {/* Company */}
                <div className="cursor-pointer">
                    <div className="text-xl font-semibold">Company</div>
                    <ul className="text-lg text-gray-700">
                        {companyItems.map((items) => (
                            <li key={items.id}>
                                <div className="mt-5 mb-5 hover:text-orange-500 transition-colors">
                                    {items.label}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact us & Legal Div */}
                <div>
                    {/* Contact Us */}
                    <div className="cursor-pointer">
                        <div className="text-xl font-semibold">Contact Us</div>
                        <ul className="text-lg text-gray-700">
                            {ContactUsItems.map((items) => (
                                <li key={items.id}>
                                    <div className="mt-5 mb-5 hover:text-orange-500 transition-colors">
                                        {items.label}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="md:mt-29 cursor-pointer">
                        <div className="text-xl font-semibold">Legal</div>
                        <ul className="text-lg text-gray-700">
                            {LegalItems.map((items) => (
                                <li key={items.id}>
                                    <div className="mt-5 mb-5 hover:text-orange-500 transition-colors">
                                        {items.label}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Available In */}
                <div className="md:mb-[14%]">
                    <div className="">
                    <div className="text-xl font-semibold cursor-pointer">Available In</div>
                    <ul className="text-lg text-gray-700 cursor-pointer">
                        {AvailableItems.map((items) => (
                            <li key={items.id}>
                                <div className="mt-5 mb-5 hover:text-orange-500 transition-colors">
                                    {items.label}
                                </div>
                            </li>
                        ))}
                    </ul>
                    </div>
                </div>

                {/* Life at Swiggy & Social Links */}
                <div className="md:mb-[12%]">
                    {/* Life at Swiggy */}
                    <div className="">
                        <div className="text-xl font-semibold">Life at Swiggy</div>
                        <ul className="text-lg text-gray-700 cursor-pointer">
                            {LifeAtItems.map((items) => (
                                <li key={items.id}>
                                    <div className="mt-5 mb-5 hover:text-orange-500 transition-colors">
                                        {items.label}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Developer Section */}
                    <div className="md:mt-20 border-t border-gray-300 pt-4 mt-6">
                        <div className="text-xl font-semibold mb-3">👨‍💻 Developer</div>
                        <p className="text-gray-600 text-sm mb-3">This Swiggy clone was built by Sagar Khanna</p>
                        <div className="flex gap-4">
                            <a
                                href="http://www.linkedin.com/in/sagar-khanna-19a739376"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors font-medium"
                            >
                                <FaLinkedin size={20} />
                                <span className="text-sm">LinkedIn</span>
                            </a>
                            <a
                                href="https://github.com/Sagarkhanna-dev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors font-medium"
                            >
                                <FaGithub size={20} />
                                <span className="text-sm">GitHub</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            {/* Horizontal line */}
            <div className="w-[90%] mx-auto px-0 mt-6 mb-1 h-0.5 bg-gray-500"></div>
            
            {/* App Download Section */}
            <div className="w-[80%] container mx-auto flex items-center justify-center gap-6 py-6">
                <div className="text-2xl text-gray-700 font-bold">For better experience, download the Swiggy app now</div>
                <a href="https://apps.apple.com/in/app/swiggy-food-instamart-dineout/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage" target="_blank" rel="noopener noreferrer">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" alt="Swiggy app Apple store png" className="w-52 h-38 object-contain hover:scale-105 duration-300" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader" target="_blank" rel="noopener noreferrer">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" alt="Swiggy app Google Playstore png" className="w-52 h-38 object-contain hover:scale-105 duration-300" />
                </a>
            </div>
        </div>
    )
}