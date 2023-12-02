import Link from "next/link"

const Subscribe = () => {
  return (
    <section className="w-full py-20 clearfix">
        <div className="container mx-auto px-4">
            <div className="w-1/2 text-center mx-auto">
                <h6 className="text-[#20B15A] text-xl mb-4">SUBSCRIBE</h6>
                <h4 className="text-3xl font-bold capitalize">Subscribe to get the latest <br />news about us</h4>
                <p className="text-gray-500 py-4 capitalize">Please drop your email below to get daily update about what we do</p>
                <div className="rounded-xl w-full overflow-hidden flex justify-between items-center border mt-5 p-2">
                    <p className="text-gray-500">Enter Your Email Address </p>
                    <span className=" transition ease-in bg-[#F55F1D] rounded-xl hover:bg-[#ff7720] text-white px-4 py-2">
                        <Link href="/" >Subscribe</Link>
                    </span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Subscribe