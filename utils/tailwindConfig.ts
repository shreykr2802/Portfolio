import { useMemo } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../tailwind.config';

const useTailwindConfig = () => {

    const fullConfig = useMemo(() => resolveConfig(tailwindConfig), [tailwindConfig]);
    return fullConfig;
}

export default useTailwindConfig;