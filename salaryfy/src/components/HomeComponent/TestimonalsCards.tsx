
import "./testimonals.css";
const TestimonalsCards = ({ testimonals, name, company,testimonalsImg }) => {
  return (
    <div className="container mx-auto mb-9">
      <div className="bubble speech w-auto h-[20rem] ">
        <p>{testimonals}</p>
     
      </div>

      <div className="flex content-center  ">
        <div className="mt-5 ">
          <div className="border-4 border-yellow rounded-full w-fit content-center ">
            <img src={testimonalsImg} className="border rounded-full w-[7.5rem] h-[7.5rem]" />
          </div>
        </div>

        <div className="flex-col  self-center mt-3 p-3 leading-7 ">
          <p className="text-white text-xl font-Lexend ">{name}</p>
          <p className='text-yellow text-[1rem] '>Placed by Data Folkz at</p>
          <span className="text-white text-[1.2rem]">{company} </span>
       
        </div>
      </div>
    </div>
  );
};

export default TestimonalsCards;
