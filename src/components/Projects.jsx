import Link from "next/link";
async function getData(){
    const res = await fetch(process.env.BASE_URL+"api/AllProject");
    if(!res.ok){
        throw new Error('AllProject list calling Fail');
    }
    let data = await res.json();
    return data;
}
const Projects = async() => {
    let data = await getData();
  return (
    <section>
        <div className=" py-12 bg-green-50 ">
            <div className="container mx-auto px-4">
                <h4 className="text-4xl font-bold">All Project</h4>
                <span className="text-xl">
                <Link href="/">Home</Link>  
                <span className="inline-block mx-2"><img src="images/arrow.png" alt="" /></span>
                <Link className = "text-green-500 "href = "/projects">All Project</Link>
                </span>
            </div>
        </div>
        <div className="bg-white py-12">
            <div className="container mx-auto px-4">
                <div>
                <h6 className="text-xl uppercase font-bold text-green-500">All Project</h6>
                <h4 className="text-3xl leading-6 mb-12 font-bold font-heading">Better Agency/SEO Solution At <br /> Your Fingertips</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4  gap-y-8">
                {
                    data.map((item,i)=>{
                        return(
                            <div key={i} className="px-5 py-8 rounded-lg shadow-lg">
                                <img className = "rounded-lg" src={item["image"]} alt="" />
                                <h4 className="mt-2 text-2xl font-bold">{item["title"]}</h4>
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

export default Projects