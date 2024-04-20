import BlogCardComponent from '@components/card/blog-card.component';
import MainLayout from '@components/layout';
import React from 'react';
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto">
        <div className="flex flex-wrap py-8 flex-col sm:flex-row">
          <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 m-auto sm:m-0">
            <img src="https://randomuser.me/api/portraits/men/4.jpg" />
          </div>
          <div className="sm:pl-10 sm:pt-4 flex-1">
            <div className="flex sm:justify-between sm:flex-row sm:flex-no-wrap justify-center flex-wrap mb-6">
              <div className="flex flex-wrap md:w-auto w-full md:mb-0 mb-4">
                <h2 className="text-2xl w-full mb-3 text-center sm:text-left mt-4 sm:mt-0 flex">
                  Phoebe Caulfield
                  <span className="flex mx-2 items-center">
                    <BsFacebook className="mx-1 text-blue-800" />
                    <BsTwitter className="mx-1 text-blue-400" />
                    <BsInstagram className="mx-1 text-red-400" />
                    <AiFillLinkedin className="mx-1 text-3xl text-indigo-800" />
                  </span>
                </h2>
                <div className="flex sm:w-auto w-full sm:justify-start justify-center">
                  <span className="text-gray-600 mr-4 tracking-wider">
                    <span className="text-gray-400">120</span> Followers
                  </span>
                  <span className="text-gray-600 mr-4 tracking-wider">
                    <span className="text-gray-400">45</span> Following
                  </span>
                </div>
              </div>
              <button className="border border-gray-700 md:ml-auto mr-4 rounded-full w-12 h-12 inline-flex items-center justify-center text-gray-600 hover:bg-gray-700 hover:text-white flex-shrink-0">
                <svg className="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M497 80.333h-65.334V15c0-8.284-6.716-15-15-15s-15 6.716-15 15v65.333h-65.332c-8.284 0-15 6.716-15 15s6.716 15 15 15h65.332v65.334c0 8.284 6.716 15 15 15s15-6.716 15-15v-65.334H497c8.284 0 15-6.716 15-15s-6.716-15-15-15zM175.666 321.334C78.804 321.334 0 400.138 0 497c0 8.284 6.716 15 15 15h321.334c8.284 0 15-6.716 15-15 0-96.862-78.805-175.666-175.668-175.666zM175.666 64.267c-52.566 0-95.332 42.767-95.332 95.334s42.766 95.333 95.332 95.333c52.567 0 95.334-42.766 95.334-95.333s-42.767-95.334-95.334-95.334z" />
                </svg>
              </button>
              <button className="border border-gray-700 rounded-full w-12 h-12 inline-flex items-center justify-center text-gray-600 hover:bg-gray-700 hover:text-white flex-shrink-0">
                <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.626 511.626">
                  <path d="M49.106 178.729c6.472 4.567 25.981 18.131 58.528 40.685 32.548 22.554 57.482 39.92 74.803 52.099 1.903 1.335 5.946 4.237 12.131 8.71 6.186 4.476 11.326 8.093 15.416 10.852 4.093 2.758 9.041 5.852 14.849 9.277 5.806 3.422 11.279 5.996 16.418 7.7 5.14 1.718 9.898 2.569 14.275 2.569h.575c4.377 0 9.137-.852 14.277-2.569 5.137-1.704 10.615-4.281 16.416-7.7 5.804-3.429 10.752-6.52 14.845-9.277 4.093-2.759 9.229-6.376 15.417-10.852 6.184-4.477 10.232-7.375 12.135-8.71 17.508-12.179 62.051-43.11 133.615-92.79 13.894-9.703 25.502-21.411 34.827-35.116 9.332-13.699 13.993-28.07 13.993-43.105 0-12.564-4.523-23.319-13.565-32.264-9.041-8.947-19.749-13.418-32.117-13.418H45.679c-14.655 0-25.933 4.948-33.832 14.844C3.949 79.562 0 91.934 0 106.779c0 11.991 5.236 24.985 15.703 38.974 10.466 13.99 21.604 24.983 33.403 32.976z" />
                  <path d="M483.072 209.275c-62.424 42.251-109.824 75.087-142.177 98.501-10.849 7.991-19.65 14.229-26.409 18.699-6.759 4.473-15.748 9.041-26.98 13.702-11.228 4.668-21.692 6.995-31.401 6.995h-.578c-9.707 0-20.177-2.327-31.405-6.995-11.228-4.661-20.223-9.229-26.98-13.702-6.755-4.47-15.559-10.708-26.407-18.699-25.697-18.842-72.995-51.68-141.896-98.501C17.987 202.047 8.375 193.762 0 184.437v226.685c0 12.57 4.471 23.319 13.418 32.265 8.945 8.949 19.701 13.422 32.264 13.422h420.266c12.56 0 23.315-4.473 32.261-13.422 8.949-8.949 13.418-19.694 13.418-32.265V184.437c-8.186 9.132-17.7 17.417-28.555 24.838z" />
                </svg>
              </button>
            </div>
            <p className="text-gray-500 leading-normal px-4 sm:px-0">
              Businesses often become known today through effective marketing. The marketing may be in the form of a
              regular news item or half column society news in the Sunday newspaper. The marketing may be in the form of
              a heart to heart.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center border-t border-gray-700 py-5">
        <a href="#" className="text- mx-5">
          Articles
        </a>
        <a href="#" className="text-gray-600 mx-5 hover:text-gray-500">
          Recommends
        </a>
        <a href="#" className="text-gray-600 mx-5 hover:text-gray-500">
          Subscriptions
        </a>
      </div>
      <div className="pb-6 w-9/12 mx-auto">{/* <BlogCardComponent /> */}</div>
    </div>
  );
};

export default page;
