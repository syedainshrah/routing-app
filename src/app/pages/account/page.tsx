import File from '@/app/Components/[id]/File'
import Icon from '@/app/Components/Icon';
import { IoIosArrowForward } from "react-icons/io";
import Image from 'next/image';

const page = () => {
  return (
    <div className='bg-white'>
<File/>

    <div className="relative">
      
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-[50vh] sm:h-[60vh] md:h-[70vh]">
        <Image
          src="/rect.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* House Icon */}
      <div className="absolute top-16 sm:top-24 md:top-28 left-1/2 transform -translate-x-1/2">
        <Image
          src="/house.png"
          alt="House Icon"
          width={80}
          height={80}
          className="sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32"
        />
      </div>

      {/* Page Title and Breadcrumb */}
      <div className="absolute top-32 sm:top-40 md:top-48 left-1/2 transform -translate-x-1/2">
        <h1 className="text-xl sm:text-3xl md:text-3xl font-bold text-black mt-8 mb-6 flex justify-center items-center">My Account</h1>
        <div className="flex items-center justify-center mt-2 mb-10">
          <h1 className="text-xl sm:text-xl md:text-xl font-bold text-black">Home</h1>
          <IoIosArrowForward className="ml-2 text-xl" />
          <h1 className="text-xl sm:text-xl md:text-xl text-black ml-2">My Account</h1>
        </div>
      </div>
   
  {/* Main Content */}
      <div className="flex justify-center items-center gap-8 pt-[350px] pb-16">
        {/* Login Section */}
        <div className="flex flex-col m-20">
          <h1 className="font-bold">Log in</h1>
          <div className="flex flex-col my-6">
            <label htmlFor="">Username or email address</label>
            <input
              className="h-[40px] w-[250px] border-2 my-2 rounded-md"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="flex flex-col mt-2 h-[150px]">
            <label htmlFor="">Password</label>
            <input
              className="h-[40px] w-[250px] border-2 my-2 rounded-md"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="">
            <input className="mr-4" type="checkbox" name="" id="" />
            <span>Remember me</span>
          </div>
          <div className="flex gap-6 items-center">
            <button className="h-[40px] w-[150px] border-2 rounded-md">
              Log In
            </button>
            <span>Lost your password?</span>
          </div>
        </div>

        {/* Register Section */}
        <div className="flex flex-col m-20">
          <h1 className="font-bold">Register</h1>
          <div className="flex flex-col my-4">
            <label htmlFor="">Email address</label>
            <input
              className="h-[40px] w-[250px] border-2 rounded-md"
              type="text"
              name=""
              id=""
            />
          </div>

          <div className="flex flex-col my-4 text-sm w-[300px]">
            <span>
              A link to set a new password will be sent to your email address.
            </span>
            <p className="mt-4">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </p>
          </div>
          <div className="flex flex-col my-4">
            <div className="flex gap-6 items-center">
              <button className="h-[40px] w-[150px] border-2 rounded-md">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Icon Component */}
      <Icon />
    </div>
</div>
  );
};

export default page;
