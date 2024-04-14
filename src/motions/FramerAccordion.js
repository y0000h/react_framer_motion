import React, { useState } from 'react';
import './FramerAccordion.css';
import { motion } from 'framer-motion';

const FramerAccordion = () => {
    const data = [
        {
            id: 1,
            title: "title 01",
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
    ];
    const [activeId, setActiveId] = useState(null);

    return (
        <div className='framer_accordion'>
            {data.map(item => (
                <React.Fragment key={item.id}>
                    <h3 onClick={() => setActiveId(activeId === item.id ? null : item.id)}>
                        {item.title}
                    </h3>
                    <motion.div className='content'
                        initial={{ height: 0 }}
                        animate={{ height: activeId === item.id ? 'auto' : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {item.body}
                    </motion.div>
                </React.Fragment>
            ))}
        </div>
    );
}

export default FramerAccordion;
