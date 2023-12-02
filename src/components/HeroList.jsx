import Link from "next/link";
async function getData(){
    let res = await fetch(process.env.BASE_URL+"api/HeroList");
    if(!res.ok){
        throw new Error('HeroList calling fail');
    }
    let data = res.json();
    return data;
}
const HeroList = async() => {
    let data = await getData();
  return (
    <section className="relative bg-green-50 z-10 pt-12 lg:pt-20 pb-20">
        <div className="container mx-auto px-4">
            <div className="w-full flex flex-wrap items-center ">
                <div className="w-full lg:w-1/2 lg:pr-4 mb-4 lg:text-left text-center">
                    <h1 className="mb-5 text-4xl leading-2 lg:text-5xl font-bold font-heading">
                        {data['title']}
                    </h1>
                    <p className="mb-10 leading-loose font-base">{data['description']}</p>
                    <Link href="/" className="text-base font-bold text-white px-6 py-3 rounded-xl box-border transition duration-500 hover:border-green-500 hover:bg-transparent hover:text-black bg-green-500 border-2">Get Started</Link>
                </div>
                <div className="w-full lg:w-1/2 px-4">
                    <div className='flex flex-wrap lg:mb-4'>
                        <img className='w-full md:w-1/2 lg:w-2/3 h-64 p-2 object-cover rounded-2xl ' src={data['image1']} alt=''/>
                        <img className='w-full md:w-1/2 lg:w-1/3 h-64 p-2 object-cover rounded-2xl' src={data['image2']} alt=''/>
                    </div>
                    <div className='flex flex-wrap lg:mb-4'>
                        <img className='w-full md:w-1/2 lg:w-1/3 h-44 p-2 object-cover rounded-2xl ' src={data['image3']} alt=''/>
                        <img className='w-full md:w-1/2 lg:w-2/3 h-44 p-2 object-cover rounded-2xl' src={data['image4']} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroList