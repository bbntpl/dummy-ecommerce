import { Dropdown } from 'semantic-ui-react'

export default function ItemCategory(props) {
	const { itemCategoryOptions, handleItemArranger } = props;
	return (
		<Dropdown
			text={'Filter by Item Categories: '}
			options={itemCategoryOptions}
			onChange={(e) => handleItemArranger(e, 'category')}
		/>
	)
}