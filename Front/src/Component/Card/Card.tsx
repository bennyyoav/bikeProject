import { Bike } from "../../Bike";
import { SingleTrack } from "../../SingleTrack";
import "./Card.css";
import { Grading } from "../Grading/Grading";
import { BikeGradingForm } from "./GradingForm.tsx/BikeGradingForm";
import { SingleGradingForm } from "./GradingForm.tsx/SingleGradingForm";

export function BikeCard(props: {
  theBike: Bike;
  setCarrArr: React.Dispatch<React.SetStateAction<Bike[]>>;
  indexAtArr: number;
  cardArray: Bike[];
}) {
  return (
    //@ts-ignore
    <div className="Card" id_bike={props.theBike?.id}>
      <img src={props.theBike.PathToPicture} alt="" />

      <div className="ImageHeader">
        <div className="header">{props.theBike.BikeName} </div>
        <div className="footer">
          Manufacturer is {props.theBike.BikeManufacturer}{" "}
        </div>
      </div>
      <Grading theNum={props.theBike.grade} voteNumber={props.theBike.voters} />
      <BikeGradingForm
        indexAtArr={props.indexAtArr}
        theBike={props.theBike}
        setCarrArr={props.setCarrArr}
        cardArray={props.cardArray}
      />
    </div>
  );
}

export function SingleCard(props: {
  theTrail: SingleTrack;
  setCarrArr: React.Dispatch<React.SetStateAction<SingleTrack[]>>;
  indexAtArr: number;
  cardArray: SingleTrack[];
}) {
  console.log("at SingleCard");

  return (
    //@ts-ignore
    <div className="Card" id_trail={props.theTrail?.id}>
      <img src={props.theTrail.PathToPicture} alt="" />
      <div className="ImageHeader">
        <div className="header">{props.theTrail.TrailName} </div>
        <div className="footer">Level is {props.theTrail.TrailLevel} </div>
      </div>
      <Grading
        theNum={props.theTrail.grade}
        voteNumber={props.theTrail.voters}
      />
      <SingleGradingForm
        indexAtArr={props.indexAtArr}
        theTrail={props.theTrail}
        setCarrArr={props.setCarrArr}
        cardArray={props.cardArray}
      />
    </div>
  );
}
