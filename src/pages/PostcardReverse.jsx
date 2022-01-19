import React from "react";
import { postcardData } from "../data/data";

import Card from "../styled-components/Card";
import Container from "../styled-components/Container";
import InfoCard from "../styled-components/InfoCard";

const PostcardReverse = () => {
  return (
    <Container id="container">
      {postcardData.slice(0).reverse().map((data, key) => { //key aspect here
        return (
          <Card key={key} style={{ backgroundImage: `url(${data.image})` }}>
            <InfoCard>
              {data.id}. {data.title}
              
            </InfoCard>
          </Card>
        );
      })}
    </Container>
  );
};

export default PostcardReverse;
