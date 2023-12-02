import Link from "next/link";

async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/FeaturedProject");
    if(!res.ok){
        throw new Error("FeaturedProject Calling Fail");
    }
    return res.json();
}


const FeaturedProjects = async() => {
    let data = await getData();
  return (
        <section className='pb-16 pt-24 lg:pt-16 bg-green-50'>
            <div className="container mx-auto px-4">
                <div className='mb-5'>
                    <h6 className='text-xl text-green-500'>Featured Project</h6>
                    <h4 className='font-bold text-3xl'>We provide the Perfect Solution <br /> to your business growth</h4>
                </div>
                <div className='flex py-4 flex-wrap justify-between'>
                   <div className="w-full md:w-1/2 mb-4 lg:mb-0  lg:pr-4 pr-0 ">
                        <img className = "rounded-xl h-[450px]" src={data[0].image } alt="" />
                        <div>
                            <h4 className="my-2 font-bold font-heading">{data[0].title}</h4>
                        </div>
                   </div>
                   <div className="w-full md:w-1/2 lg:pl-4 pl-0">
                        <div className="flex justify-between mb-4">
                            <div className="pr-4 w-full md:w-1/2">
                                <img className = "rounded-xl" src={data[0].image } alt="" />
                                <div>
                                    <h4 className="my-2 font-bold font-heading">{data[0].title}</h4>
                                </div>
                            </div>
                            <div className=" w-full md:w-1/2">
                                <img className = "rounded-xl" src={data[0].image } alt="" />
                                <div>
                                    <h4 className="my-2 font-bold font-heading">{data[0].title}</h4>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between mb-4">
                            <div  className="pr-4 w-full md:w-1/2">
                                <img className = "rounded-xl" src={data[0].image } alt="" />
                                <div>
                                    <h4 className="my-2 font-bold font-heading">{data[0].title}</h4>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <img className = "rounded-xl" src={data[0].image } alt="" />
                                <div>
                                    <h4 className="my-2 font-bold font-heading">{data[0].title}</h4>
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        </section>
  )
}

export default FeaturedProjects