import { assets } from "../assets/assets";
import NewsLetterBox from "../Components/NewsLetterBox";
import Title from "../Components/Title";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="flex flex-col md:flex-row gap-16 my-10">
        <img
          src={assets.about_img}
          alt=""
          className="w-full md:max-w-[450px] "
        />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            We are the Leading Manufacturer of comprehensive range of Novelties,
            Bags, Promotional and other gift items that are catered to various
            needs in the domestic and official sector. Our range of promotional
            products includes Leather bags, Laptop bags, sports bag. T-shirt,
            Caps, jacket, Wind cheater, Track suits, Promotional Bags, Executive
            Bags, Executive Bags, Shopping Bags, Wallets, Files & Folders,
            Organizers, Key Rings, Promotional Clocks, Office Stationeries,
            Diaries, Pens, Promotional T-shirts, Caps, Calendars, House Hold
            Items , Promotional Gifts Items. We are also offering customization
            on our range as per the specifications provided to us by our
            clients. The customization is fully made on basis of the samples and
            drawings directed to us.
          </p>
          <p>
            Our advanced infrastructure and expert personnel help us to
            undertake the manufacturing, designing and customizing company's
            logo on the products of bulk orders. Moreover, to make our products
            as per the international quality standards, we have appointed
            skilled quality controllers who keep vigilance on whole production
            process. Furthermore, to deliver flawless products, they stringently
            check the final product on some well-defined parameters.
          </p>
          <b className="text-gray-800">Product Portfolio</b>
          <p>
            {" "}
            We are one of the reknowned manufacturers and suppliers of a wide
            range of leather and nylon products. Other than this, we also offer
            watches, T-shirts, shirts, caps and umbrellas. These products are
            manufactured using superior quality of basic material that is
            sourced from reputed vendors of the industry. The use of high grade
            material ensure long lasting usage and high quality standards.
            Further, our range can be provided in customized solutions as per
            client's requirement.
          </p>
        </div>
      </div>

      <div className="py-4 text-2xl">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row mb-20 text-sm gap-4">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Our range of products include the following:</b>
          <pre className="text-gray-600">
            LEATER BAG             LAPTOP BAG 
            <br />
            SCHOOL BAG             TRAVEL BAG 
            <br />
            TROLLY BAG             EXECUITIVE BAG 
            <br />
            CARRY BAG              COMPUTER BAG
            <br /> 
            WIND CHEATER           SWEAT SHIRT 
            <br />
            TRACK SUITS            T-SHIRTS 
            <br />
            LAPTOP BAG             KEYCHAIN
            <br />
            DIRARY                 MUG 
            <br />
            TIE                    UMBRELLA 
            <br />
            KIT BAG                SPORT BAG
            <br /> 
            SPORT KIT BAG          SHOPPING BAG
            <br /> 
            SUITCASE               POUCHES
            <br /> 
            WAIST POUCHES          OFFICE BAG 
            <br />
            GENTS WALLET           LADIES WALLET 
            <br />
            CREDIT CARD HOLDER     PASSPORT HOLDER
            <br />
            ORGANIZER              FOLDER 
            <br />
            AND MANY MORE{" "}
          </pre>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Features of our products are as follows:</b>
          <p className="text-gray-600">
          Durable
          <br />
          Excellent Designs
          <br />
          Aesthetic finish
          <br />
          Well Crafted{" "}
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Our Team</b>
          <p className="text-gray-600">
          Assisted by a team of talented professionals, we are able to meet specific requirements of our clients. Well versed in their respective fields, all our team members have rich industry experience. Moreover, all our team members conduct extensive researches and manufacture the entire product range as per the current trends of the market.{" "}
          </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default About;
