import { IcStar } from "@/assets/icon";

const Mail = () => {
  return (
    <div className="flex flex-wrap items-center justify-between border-b-1 py-4">
      <div className="flex flex-wrap justify-between items-center w-[25%]">
        <input
          type="checkbox"
          name="all_select"
          className="color-[#ddd] mr-2 w-4 h-4"
        />
        <IcStar />
        <img
          src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
          alt="mail picture"
          className="w-1- h-10"
        />
        <p>Nasan Mahbub</p>
      </div>

      <div className="w-[50%] overflow-hidden h-12">
        <h2>Email Subject Lorem Ispum </h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
          facilis
        </p>
      </div>

      <p className="w-[15%]">March 24, 2020</p>
    </div>
  );
};

export default Mail;
