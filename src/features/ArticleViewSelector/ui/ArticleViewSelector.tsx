import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleView } from '@/entities/Article';
import ListIcon from '@/shared/assets/icons/list-24-24.svg';
import TilesIcon from '@/shared/assets/icons/tiled.svg';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
	className?: string;
	view: ArticleView;
	onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
	{
		view: ArticleView.BIG,
		icon: ListIcon,
	},
	{
		view: ArticleView.SMALL,
		icon: TilesIcon,
	},
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
	const { className, view, onViewClick } = props;

	const onClick = (newView: ArticleView) => () => {
		onViewClick?.(newView);
	};

	return (
		<div className={classNames('', {}, [className])}>
			{viewTypes.map((viewType) => (
				<Button
					key={viewType.view}
					theme={ThemeButton.CLEAR}
					onClick={onClick(viewType.view)}
				>
					<Icon
						Svg={viewType.icon}
						className={classNames(
							'icon',
							{ [cls.selected]: viewType.view === view },
							[],
						)}
						width={24}
						height={24}
					/>
				</Button>
			))}
		</div>
	);
});
