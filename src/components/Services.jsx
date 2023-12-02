import Link from "next/link";
async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/AllService");
    if(!res.ok){
        throw new Error("TeamList Calling Fail");
    }
    let data = await res.json();
    return data;
}
const Services = async() => {
    let data = await getData();
  return (
    <section>
        <div className=" py-12 bg-green-50 ">
            <div className="container mx-auto px-4">
                <h4 className="text-4xl font-bold">Our Services</h4>
                <span className="text-xl">
                <Link href="/">Home</Link>  
                <span className="inline-block mx-2"><img src="images/arrow.png" alt="" /></span>
                <Link className = "text-green-500 "href = "/services">Our Services</Link>
                </span>
            </div>
        </div>
        <div className="bg-white py-12">
            <div className="container mx-auto px-4">
                <div>
                <h6 className="text-xl font-bold text-green-500">Our All Services</h6>
                <h4 className="text-3xl leading-6 mb-12 font-bold font-heading">We Provide BestWeb design <br />services</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4  gap-y-8">
                {
                    data.map((item,i)=>{
                        return(
                            <div key={i}>
                                <div className="bg-white rounded-xl shadow-xl px-4 py-8">
                                    <div>
                                        <h4 className="mb-3 text-2xl uppercase font-bold">{item['title']}</h4>
                                        <p className="mb-4 text-gray-500 text-base">{item['des']}</p>
                                    </div>
                                    <div>
                                        <div className="flex justify-between gap-4 mb-6">
                                            <img className = "h-44 w-2/3 shadow-lg rounded-lg" src={item['image1']} alt="" />
                                            <img className = "h-44 w-1/3 rounded-lg shadow-lg" src={item['image2']} alt="" />
                                        </div>
                                        <div className="grid grid-cols-1 gap-x-6 gap-y-4  md:grid-cols-2">
                                             <img className="h-64 shadow-lg rounded-lg" src={item['image3']} alt="" />
                                            <img className = "h-64 shadow-lg rounded-lg" src={item['image4']} alt="" />
                                        </div>
                                    </div>
                                </div>
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

export default Services