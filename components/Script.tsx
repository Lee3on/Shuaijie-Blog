import React, { useEffect } from 'react';

interface ScriptProps {
    src: string;
    integrity?: string;
    crossorigin?: string;
}

export const Script: React.FC<ScriptProps> = ({ src, integrity, crossorigin }) => {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = src;
        if (integrity) script.integrity = integrity;
        if (crossorigin) script.crossOrigin = crossorigin;

        document.body.appendChild(script);

        // Cleanup function to remove script when component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, [src, integrity, crossorigin]);

    return null;
};

export default Script;
