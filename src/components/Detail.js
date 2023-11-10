import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import BodypartImage from "../assets/icons/body-part.png";
import targetImage from "../assets/icons/target.png";
import equipmentImage from "../assets/icons/equipment.png";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, equipment, name, target } = exerciseDetail;

  const extraDetail = [
    { icon: BodypartImage, name: bodyPart },
    { icon: equipmentImage, name: equipment },
    { icon: targetImage, name: target },
  ];
  // console.log(exerciseDetail);

  return (
    <div>
      <Stack
        gap="60px"
        sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
      >
        <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
        <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
          <Typography variant="h3">{name}</Typography>
          <Typography variant="h5" textTransform="capitalize">
            Instructions.
          </Typography>
          <List component="nav" aria-label="mailbox folders">
            {exerciseDetail?.instructions?.map((ins) => {
              return (
                <>
                  <ListItem button>
                    <ListItemText primary={ins} />
                  </ListItem>
                  <Divider />
                </>
              );
            })}
          </List>
          <Stack
            direction="row"
            spacing={2}
            divider={<Divider orientation="vertical" flexItem />}
          >
            {extraDetail?.map(({ icon, name }) => {
              return (
                <Stack
                  key={name}
                  direction="row"
                  gap="24px"
                  alignItems="center"
                >
                  <Button
                    sx={{
                      background: "#fff2db",
                      borderRadius: "50%",
                      width: "100px",
                      height: "100px",
                    }}
                  >
                    <img
                      src={icon}
                      style={{ width: "50px", height: "50px" }}
                      alt={bodyPart}
                    />
                  </Button>
                  <Typography textTransform="capitalize" variant="h5">
                    {name}
                  </Typography>
                </Stack>
              );
            })}
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default Detail;
