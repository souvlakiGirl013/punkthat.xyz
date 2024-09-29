import React from 'react';
import Draggable from 'react-draggable';
import './Window.css';

const Window = ({title, category, content, width, top, right }) => {
    
    const position = {
        top: `${top}px`,
        right: `${right}px`,
      };

    const renderContent = () => {
        if (content.type === "video") {
          return <video loop={true} autoPlay={true} muted={true} width={width} src={content.src} alt="something wrong with this content" />
        } else if (content.type === "image") {
          return <img width={width} src={content.src} alt="something wrong with this content" />;
        } else {
          return <p>No content available</p>;
        }
      };

    return (
        <Draggable>
            <div className='Container' style={position}>
                <div className='ContainerHeader'>
                    <p className='ContainerHeaderTitle'>{title}</p>
                    <p className='ContainerHeaderCategory'>{category}</p>
                </div>
                <div className='ContainerContent'>
                    {renderContent()}
                </div>
            </div>
        </Draggable>
    )
}

export default Window;