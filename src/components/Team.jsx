import Link from "next/link";

async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/TeamList");
    if(!res.ok){
        throw new Error("TeamList Calling Fail");
    }
    return res.json();
}
  
const Team = async() => {
    let data = await getData();
  return (
    <section>
        <div className=" py-12 bg-green-50 ">
            <div className="container mx-auto px-4">
                <h4 className="text-4xl font-bold">Team</h4>
                <span className="text-xl">
                  <Link href="/">Home</Link>  
                  <span className="inline-block mx-2"><img src="images/arrow.png" alt="" /></span>
                  <Link className = "text-green-500 "href = "/team">Team</Link>
                </span>
            </div>
        </div>
        <div className="bg-white py-12">
            <div className="container mx-auto px-4">
                <div>
                  <h6 className="text-xl font-bold uppercase  text-green-500">Our Team Member</h6>
                  <h4 className="text-3xl leading-6 mb-12 font-bold font-heading">Check our awesome team <br />members</h4>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5">
                  {
                      data.map((item,i)=>{
                          return(
                              <div key={i}>
                                  <div className="bg-white rounded-xl shadow ">
                                      <img className="h-64 w-full relative object-cover"
                                            src={item['image']}
                                            alt=""/>
                                      <div className="w-full p-4">
                                          <h4 className="mb-2 text-2xl text-center font-bold font-heading">
                                              {item['name']}
                                          </h4>
                                          <div className=" flex bg-white rounded-full py-3 px-4 -mt-32 ml-36 md:ml-12 absolute">
                                              <a className="mx-3" href={item['facebook']}>
                                                  <img src="images/facebook.png" alt=""/>
                                              </a>
                                              <a className="mx-3" href={item['twitter']}>
                                                  <img src="images/twitter.png" alt=""/>
                                              </a>
                                              <a className="ml-3" href={item['instagram']}>
                                                  <img src="images/instagram.png" alt=""/>
                                              </a>
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

export default Team