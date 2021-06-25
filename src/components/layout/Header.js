import React from "react"
import header_welding from "../../images/header_welding.webp"
import { Link } from "gatsby"

// import tuv_small from "../../images/tuv_small.png"

const Header = () => {
  return (
    <section className="text-center" id="header">
      <div
        className="relative flex items-center py-40 bg-cover bg-center"
        style={{ backgroundImage: `url(${header_welding}` }}
      >
        <div className="absolute bg-black opacity-50 inset-0" />
        <div className="z-10 w-full mx-auto ">
          <h1 className="bg-blue-700 bg-opacity-50 px-2 py-2 rounded-xl inline-block lg:text-5xl sm:text-4xl text-3xl sm:mb-8 leading-tight font-heading text-white lg:mr-4 ">
            <span className="">Stahl- und Metallbau seit 1855</span>
          </h1>
          {/* <img
            alt=""
            className="inline-block"
            src={tuv_small}
            style={{ transform: "scale(0.5)" }}
          /> */}
          <br />
          <div className="sm: mt-2 flex justify-center -m-2	">
            <a
              className=" m-2 w-auto inline-block px-8 py-4  leading-none text-white text-center bg-blue-800 hover:bg-blue-900 rounded shadow"
              href="tel:+4940665817"
            >
              Rufen Sie jetzt an
            </a>
            <Link
              className="m-2 w-auto inline-block px-8 py-4  leading-none text-white text-center bg-red-800 hover:bg-red-900 rounded shadow"
              to="/stellenangebot/"
            >
              Monteur gesucht
            </Link>
          </div>

          {/* <a
            className="w-auto inline-block px-8 py-4 mt-4 lg:ml-8 sm:ml-6 md:ml-4 ml-2 mr-2 leading-none cursor-pointer text-white text-center bg-red-800 hover:bg-red-900 rounded shadow"
            onClick="navigateTo('job')"
          >
            Monteur gesucht!
            <i
              className="ml-4 fas fa-tools"
              onClick="navigateTo('job')"
              style={{ fontSize: "18px" }}
            />
          </a> */}
        </div>
      </div>
    </section>
  )
}

export default Header
