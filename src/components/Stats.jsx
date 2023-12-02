async function getData(){
    let res = await fetch(process.env.BASE_URL+"api/StatList")
    if(!res.ok){
        throw new Error('Statlist calling fail')
    }
    let data = await res.json();
    return data;
}
const Stats = async () => {
    const data = await getData();
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="mb-8 shadow-lg py-8 rounded-xl w-full md:w-1/2  lg:w-[240px] text-center">
                        <span className="mb-2 inline-block p-4 rounded bg-green-100">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.333 6.764a3 3 0 1 1 3.141-5.023M2.5 16H1v-2a4 4 0 0 1 4-4m7.379-8.121a3 3 0 1 1 2.976 5M15 10a4 4 0 0 1 4 4v2h-1.761M13 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-4 6h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z"/>
                        </svg>
                        </span>
                        <h3 className="text-2xl font-bold">{data['followers']}</h3>
                        <p >Followers</p>
                    </div>
                    <div className="mb-8 shadow-lg py-8 rounded-xl w-full md:w-1/2 lg:w-1/4 text-center">
                        <span className="mb-2 inline-block p-4 rounded bg-green-100">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                            <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z"/>
                        </svg>
                        </span>
                        <h3 className="text-2xl font-bold">{data['solved']}</h3>
                        <p>Solved Problems</p>
                    </div>
                    <div className="mb-8 shadow-lg py-8 rounded-xl w-full md:w-1/2 lg:w-1/4 text-center">
                        <span className="mb-2 inline-block p-4 rounded bg-green-100">
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z"/>
                            </svg>
                         </span>
                        <h3 className="text-2xl font-bold">{data['customers']}</h3>
                        <p>Happy Customers</p>
                    </div>
                    <div className="mb-8 w-full shadow-lg py-8 rounded-xl md:w-1/2 lg:w-1/4 text-center">
                        <span className="mb-2 inline-block p-4 rounded bg-green-100">
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 1v4a1 1 0 0 1-1 1H1m5 8.514L4 12.5l2-2m4 4.014 2-2.014-2-2m5 7.5a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2v16Z"/>
                            </svg>
                        </span>
                        <h3 className="text-2xl font-bold">{data['projects']}</h3>
                        <p>Projects</p>
                        
                    </div>
                </div>
            </div>
        </section>
    );
  };
  export default Stats;