import Link from "next/link"
const SiteFooter = () => {
  return (
    <footer className="bg-black text-white">
        <div className="container mx-auto px-4">
            <div className="footer-top pt-20 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
                    <div className="w-full ">
                        <h4 className="text-4xl mb-4 font-bold">WEB LOGO</h4>
                        <p className="text-base mb-4">Some footer text about the Agency. Just a little description to help people understand you better</p>
                        <ul className = "flex">
                            <li className="mr-4 text-white p-3 bg-green-500 rounded-full">
                                <img src="images/facebook1.png" alt="" />
                            </li >
                            <li className = "mr-4 p-3 text-white bg-green-500 rounded-full">
                                <img src="images/twitter1.png" alt="" />
                            </li>
                            <li className="mr-4 text-white p-3 bg-green-500 rounded-full">
                                <img src="images/linkedin.png" alt="" />   
                            </li>
                            <li className = "mr-4 p-3 text-white bg-green-500 rounded-full" >
                                <img src="images/camera.png" alt="" />
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:1/3">
                        <h6 className="text-xl font-bold">Quick Links</h6>
                        <ul>
                            <li className="py-2">
                                <Link href = "/">Services</Link>
                            </li>
                            <li className="py-2">
                                <Link href = "/">Portfolio</Link>
                            </li>
                            <li className="py-2">
                                <Link href = "/">About Us</Link>
                            </li>
                            <li className="py-2">
                                <Link href = "/">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:1/3">
                        <h6 className="text-xl font-bold mb-4">Address</h6>
                        <p className="text-base">Design Agency Head Office. <br />Airport Road <br /> United Arab Emirate</p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom py-5">
                <p>Copyright Design Agency 2022</p>
            </div>
        </div>
    </footer>
  )
}

export default SiteFooter