import { rtkApi } from '@/shared/api/rtkApi';
import { FeatureFlags } from '@/shared/types/featureFlags';

interface FeatureFlagsApiArgs {
	userId: string;
	features: Partial<FeatureFlags>;
}

const featureFlagsApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		updateFeatureFlags: build.mutation<void, FeatureFlagsApiArgs>({
			query: ({ userId, features }) => ({
				url: `/users/${userId}`,
				method: 'PATCH',
				body: {
					features,
				},
			}),
		}),
	}),
});

export const updateFeatureFlagsMutation =
	featureFlagsApi.endpoints.updateFeatureFlags.initiate;
