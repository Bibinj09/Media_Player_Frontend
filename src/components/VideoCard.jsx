import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { addVideoHistory, deletVideoApi } from '../services/allApi';



function VideoCard({ video, setDeleteVideoStatus, isPresent }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    const caption = video?.caption
    const url = video?.embedLink
    const time = new Date()
    const timeStamp = new Intl.DateTimeFormat("en-GB", {year:'numeric', month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit',second:'2-digit' }).format(time)
    console.log(timeStamp);

    const reqBody={
      caption, url, timeStamp
    }


    const result = await addVideoHistory(reqBody)
    console.log(result);
  } 

  const handleDelete = async (id) => {
    const result = await deletVideoApi(id);
    setDeleteVideoStatus(true); 
  };

  const videoDrag = (e, video)=>{
    
    e.dataTransfer.setData("videoDetails", JSON.stringify(video))

    // console.log('draged video details is', video);
  }

  return (
    <>

      <Card style={{ width: '100%' }} draggable onDragStart={(e)=>videoDrag(e, video)} className='mt-4'>
        {!isPresent && <Card.Img variant="top" onClick={handleShow} src={video?.imageUrl} height={'300px'} />}
        <Card.Body>

          <div className='d-flex justify-content-between'><Card.Text>{video?.caption}</Card.Text>
            {!isPresent && <Button variant="danger" onClick={()=>handleDelete(video?.id)}><FontAwesomeIcon icon={faTrash} />
            </Button>
            
            }
          </div>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="514" src={`${video?.embedLink}?autoplay=1`} title="Illuminati|Aavesham|Jithu Madhavan|Fahadh Faasil|Sushin Shyam,Dabzee,Vinayak| Nazriya|Anwar Rasheed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Modal.Body>
      </Modal>
      


    </>
  );
}

export default VideoCard;
