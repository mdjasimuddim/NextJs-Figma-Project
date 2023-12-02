import Link from "next/link";
async function getData(){
    let res = await fetch(process.env.BASE_URL+"api/TestimonialList");
    if(!res.ok){
        throw new Error('Testimonials list calling Fail');
    }
    let data = await res.json();
    return data;
}


const Testimonials = async() => {
    let data = await getData();
  return (
    <section>
        <div className=" py-12 bg-green-50 ">
            <div className="container mx-auto px-4">
                <h4 className="text-4xl font-bold">Testimonial List</h4>
                <span className="text-xl">
                <Link href="/">Home</Link>  
                <span className="inline-block mx-2"><img src="images/arrow.png" alt="" /></span>
                <Link className = "text-green-500 "href = "/testimonials">Testimonial List</Link>
                </span>
            </div>
        </div>
        <div className="bg-white py-12">
            <div className="container mx-auto px-4">
                <div>
                <h6 className="text-xl uppercase font-bold text-green-500">Testimonial List</h6>
                <h4 className="text-3xl leading-6 mb-12 font-bold font-heading">Better Agency/SEO Solution At <br /> Your Fingertips</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4  gap-y-8">
                {
                    data.map((item,i)=>{
                        return(
                            <div key={i} className="px-5 text-center py-8 rounded-lg shadow-lg">
                                <img className = "w-20 h-20 mx-auto rounded-xl" src={item["image"]} alt="" />
                                <p className="text-sm text-gray-500 py-5">{item['msg']}</p>
                                <h4 className="text-2xl font-bold uppercase mb-4">{item['name']}</h4>
                                <h6 className="text-base">{item['designation']}</h6>
                            </div>
                        )
                    })
                }

                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials