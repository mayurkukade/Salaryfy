import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

interface AccordionCustomProps {
  heading: string;
  content: string;
}

const AccordionCustom: React.FC<AccordionCustomProps> = ({
  heading,
  content,
}) => {
  
  return (
    <center>
      <Accordion
        style={{
          backgroundColor: "#fff",
          borderBottom: "2px solid #FECD08",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <AddIcon className=" my-auto mx-4" style={{fontSize:"2rem", color:"#005F59"}}  />
          <Typography style={{ color: "#005F59", fontSize: "2rem" }}>
            {heading}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="text-[1.5rem] text-darkGreen">{content} </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </center>
  );
};

export default AccordionCustom;
