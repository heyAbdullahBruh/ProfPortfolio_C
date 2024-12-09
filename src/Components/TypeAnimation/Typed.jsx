'use client';
import React, { useState, useEffect } from 'react';

const Typed = ({ strings, speed = 150, delay = 1000 }) => {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentString = strings[index];
        const timeout = setTimeout(() => {
            if (isDeleting) {
                setText((prev) => prev.slice(0, -1));
            } else {
                setText((prev) => currentString.slice(0, prev.length + 1));
            }

            // Transition to deleting mode or loop to the next string
            if (!isDeleting && text === currentString) {
                setTimeout(() => setIsDeleting(true), delay);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setIndex((prev) => (prev + 1) % strings.length);
            }
        }, isDeleting ? speed / 2 : speed);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, index, strings, speed, delay]);

    return <span>{text}|</span>;
};

export default Typed;
