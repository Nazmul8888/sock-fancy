import { Link } from "react-router-dom";


const Material = () => {
    return (
        <div >
        <div className="bg-[#747264] text-white h-60 p-14">
        <div className="   max-w-screen-xl mx-auto "> 
            <h1 className=" text-center font-bold text-4xl">INTERESTED IN LEARNING MORE？</h1>
            <h2 className=" text-center font-bold text-4xl" >INQUIRE ABOUT MOQ & DELIVERY POLICY.</h2>
        </div>
        </div>


        
           <div className=" py-10">
            <div className=" flex justify-evenly">
            <img src="  https://i.ibb.co/g4Zb8J0/35b97fad-20221110155744-min-10jk0aw0im0a000o00g01o.jpg" alt="" />
            <div>
            <h1 className=" font-bold text-4xl text-center">SOCKS <span className=" text-red-600">MATERIAL</span></h1>
            <br />
            <p className=" font-serif text-[18px]">Our most commonly used materials are 85% cotton, 10% polyester, 5% <br /> spandex, you can also choose other materials, such as nylon, wool, bamboo <br /> fiber, coolmax, etc.
            <br />
            <br />
             Choose the right material for different types of socks. If you want comfortable  daily socks, like <br /> fashion socks, happy socks, or as  a gift, then it is best to  choose combed cotton material, they are <br /> softer and absorb  sweat for all day wear. For athletic running socks need to dry quickly, breathe <br /> and be   strong, so  polyester is the best choice.
             <br />
             <br />
             Sometimes certain  technique require certain materials, such as 3d printing  with different  <br /> color rendering effects on different materials.</p>
            </div>
            </div>
            <br />
            <br />
            <br />


            {/* second part  */}


            <div className=" flex justify-evenly ml-20">
            <div>
            <h1 className=" font-bold text-4xl text-center">CUSTOM SOCKS  <span className=" text-red-600">PACKAGING</span></h1>
            <br />
            <p className=" font-serif text-[18px]">If you want to enhance your brand, the easiest way is to put it <br /> on the package.  Amazing design custom socks and packages <br /> will make people remember your brand.
            <br />
            <br />
            We have a variety of label packaging materials available, kraft <br /> paper, glossy paper, matte paper, and laminated paper. We <br /> have various materials of bags, PE bags, opp bags,zipper bags, <br /> can customize various sizes of boxes...You can choose any <br /> packaging location top wrap, middle wrap, toe wrap, or full <br /> coverage packaging.
             <br />
             <br />
            </p>
            </div>
            <img src="https://i.ibb.co/Pgrzk5W/76983375-1-min-10or08000000000000001o.jpg" alt="" />
            </div>

            <div className=" flex justify-evenly">
                <div>
                <Link to='/getFreeMockups'><button className="btn btn-wide rounded-full text-white  bg-green-600 text-[18px] font-bold"><span className=" ">Submit </span>Inquiry</button></Link>
                </div>
                <div className=" flex justify-evenly  gap-36  ">
                    <h1 className=" text-2xl font-bold  ml-48">Sleeve</h1>
                    <h1 className=" text-2xl font-bold">Hangtag</h1>
                    <h1 className=" text-2xl font-bold mr-20">Bag</h1>
                    <h1 className=" text-2xl font-bold">Box</h1>
                </div>
            </div>
            </div> 
          

        </div>
    );
};

export default Material;