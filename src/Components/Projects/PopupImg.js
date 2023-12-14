import React,{useEffect} from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PopupImg({ imgPath, currentImage, onClose }) {
    
    const handleImageClick = (event) => {
 
         event.stopPropagation();
    };
 
    useEffect(() => {
        document.querySelector('.Navbar').style.display="none";
        return () => {
          document.querySelector('.Navbar').style.display = "flex"; 
        };
      }, []);

    return (
        <div className='popUp' onClick={onClose}>
            <AnimatePresence>
                {currentImage && (
                    <motion.div
                        className='popUpContent'
                         initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                       
                        <motion.img
                            className="popupImg"
                            key={currentImage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.7 }}
                            alt=""
                            src={require(`../../Assets/Images/${imgPath}/projectImg${currentImage}.png`)}
                            onClick={handleImageClick}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
