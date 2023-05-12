import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const contact = () => {
    return (
        <div className="bg-gray-100 py-5 md:py-15">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2">
                        <img
                            src="/Get_In_Touch.png"
                            alt="contact us"
                            className="object-cover h-full w-full"
                        />
                    </div>
                    <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Contact Us
                        </h2>
                        <form className="w-full max-w-lg">
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="name"
                                    >
                                        Name
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="name"
                                        type="text"
                                        placeholder="Jane Doe"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="email"
                                        type="email"
                                        placeholder="jane@example.com"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="message"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="message"
                                        placeholder="Write your message here..."
                                        rows="5"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Submit
                                </button>
                                <div className="flex items-center">
                                    <div className="mr-2">
                                        <FaEnvelope className="text-gray-500" size={20} />
                                    </div>
                                    <div className="text-gray-700">
                                        info@yourshoestore.com
                                    </div>
                                  
                                </div>
                            </div>
                        </form>
                    </div></div></div></div>);
}


export default contact;
