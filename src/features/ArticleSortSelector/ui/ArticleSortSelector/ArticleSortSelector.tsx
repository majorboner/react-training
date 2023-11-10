import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOptions } from '@/shared/ui/deprecated/Select';
import { SortOrder } from '@/shared/types/sort';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { ArticleSortField } from '@/entities/Article';

interface ArticleSortSelectorProps {
	className?: string;
	order: SortOrder;
	sort: ArticleSortField;
	onChangeOrder: (newOrder: SortOrder) => void;
	onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
	const { t } = useTranslation('articles');
	const { className, order, sort, onChangeOrder, onChangeSort } = props;
	const orderOptions = useMemo<SelectOptions<SortOrder>[]>(
		() => [
			{
				value: 'asc',
				content: t('возрастанию'),
			},
			{
				value: 'desc',
				content: t('убыванию'),
			},
		],
		[t],
	);
	const sortFieldOptions = useMemo<SelectOptions<ArticleSortField>[]>(
		() => [
			{
				value: ArticleSortField.CREATED,
				content: t('дате создания'),
			},
			{
				value: ArticleSortField.TITLE,
				content: t('названию'),
			},
			{
				value: ArticleSortField.VIEWS,
				content: t('просмотрам'),
			},
		],
		[t],
	);

	return (
		<HStack
			gap="8"
			align="center"
			className={classNames('', {}, [className])}
		>
			<Select
				label={t('Сортировать по')}
				options={sortFieldOptions}
				value={sort}
				onChange={onChangeSort}
			/>
			<Select
				label={t('по')}
				options={orderOptions}
				value={order}
				onChange={onChangeOrder}
			/>
		</HStack>
	);
});
