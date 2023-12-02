import Link from "next/link";


async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/WorkList");
    if(!res.ok){
        throw new Error("WorkList Calling Fail");
    }
    let data = res.json();
    return data;
  }

const WorkList = async() => {
    let data = await getData();
  return (
    <section className='pb-16 pt-24 lg:pt-16'>
        <div className="container mx-auto px-4">
            <div className='mb-5'>
                <h6 className='text-xl text-green-500'>Work List</h6>
                <h4 className='font-bold text-3xl'>We provide the Perfect Solution <br /> to your business growth</h4>
            </div>
            <div className='flex py-4 flex-col md:flex-row flex-wrap justify-between'>
                {
                    data.map((item,i)=>{
                        return(
                            <div key={i} className="mb-8 p-6  w-full lg:w-1/3  ">
                                <span className="mb-4 flex w-16 h-16 items-center justify-center bg-green-100 rounded-2xl text-black text-2xl">
                                    {item['step']}
                                </span>
                                <h3 className="mb-4 text-2xl font-bold font-heading">{item['title']}</h3>
                                <p className="text-gray-500 pb-4 leading-loose">
                                    {item['des']}
                                </p>
                                <span>
                                    <Link href="/">Learn More.... </Link>
                                </span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default WorkList