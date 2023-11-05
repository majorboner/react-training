import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Profile } from '@/entities/Profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../validateProfileData/validateProfileData';
import { ProfileValidationErrors } from '@/shared/const/error';

export const updateProfileData = createAsyncThunk<
	Profile,
	void,
	ThunkConfig<ProfileValidationErrors[]>
>('profile/updateProfileData', async (_, thunkApi) => {
	const { extra, rejectWithValue, getState } = thunkApi;
	const formData = getProfileForm(getState());
	const errors = validateProfileData(formData);

	if (errors.length) {
		return rejectWithValue(errors);
	}

	try {
		const response = await extra.api.put<Profile>(
			`/profile/${formData?.id}`,
			formData,
		);

		if (!response.data) {
			throw new Error();
		}

		return response.data;
	} catch (e) {
		return rejectWithValue([ProfileValidationErrors.SERVER_ERROR]);
	}
});
