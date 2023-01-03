import React from 'react';
import { View } from 'react-native';

interface SpaceProps {
    height?: number;
}

export const Space: React.FC<SpaceProps> = ({ height = 4 }) => {
    return <View style={{ height: 4 * height }} />;
};
