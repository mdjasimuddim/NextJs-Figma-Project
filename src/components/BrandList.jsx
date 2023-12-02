
const BrandList = () => {
  return (
    <div className="brandList bg-gray-50 pt-12 pb-12">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="py-4 md:py-0">
                    <img  className ="h-8" src="images/brandlist/google.png" alt="" />
                </div>
                <div className="py-4 md:py-0">
                    <img className = "h-8" src="images/brandlist/tello.png" alt="" />
                </div>
                <div className="py-4 md:my-0">
                    <img className = "h-8" src="images/brandlist/monday.png" alt="" />
                </div>
                <div className="py-4 md:py-0">
                    <img className = "h-8" src="images/brandlist/notion.png" alt="" />
                </div>
                <div className="py-4 md:py-0">
                    <img className = "h-8" src="images/brandlist/slack.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default BrandList