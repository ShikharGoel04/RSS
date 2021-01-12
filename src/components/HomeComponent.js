import React from 'react';
import {Card,CardBody,CardImg,CardTitle,CardText,CardSubtitle} from 'reactstrap';
function RenderCardItem({item})
{
    return(
        <Card>
        <CardBody>
        <CardTitle>{item.title}</CardTitle>
        <CardSubtitle>{item.createdDate}</CardSubtitle>
        <CardText>{item.category}</CardText>
        </CardBody>
    </Card>
 );
}
const Home=(props) => {
    
      return (
        <div className="row align-items-start">
        <div className="col-12 col-md m-1">
        <RenderCardItem item={props.videos} />
        </div>
        </div>
      );
  
}
export default Home;