import React, { FC } from 'react';
import { View, Text } from 'react-native';

export interface ISkeleton {
	loading: boolean;
}

export const Skeleton: FC<ISkeleton> = ({ loading, children }) => (
	<>
		{
			loading
				? (
					<View>
						<Text>loading...</Text>
					</View>
				)
				: children
		}
	</>
)
