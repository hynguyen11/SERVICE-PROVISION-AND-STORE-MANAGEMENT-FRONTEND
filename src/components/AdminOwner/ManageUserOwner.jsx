/* eslint-disable react/prop-types */
import { Table } from 'antd';
import { Icon } from '@iconify/react/dist/iconify.js';

const ManageUserOwner = ({ allStore }) => {
	// column user
	const columns = [
		{
			title: 'Mã người dùng',
			dataIndex: 'id'
		},

		{
			title: 'Loại cửa hàng',
			dataIndex: 'category'
		},
		{
			title: 'Ngày đăng ký',
			dataIndex: 'start'
		},
		{
			title: 'Ngày hết hạn',
			dataIndex: 'end'
		},
		{
			title: 'Số điện thoại',
			dataIndex: 'phone'
		}
	];
	// bảng dữ liệu fix cứng user

	const dataTables = allStore.map(item => {
		const date = new Date(item.createdAt);
		date.setMonth(date.getMonth() + 3);
		const newEndDate = date.toISOString().split('T')[0];
		return {
			id: item.user,
			category: item.name,
			phone: item.phoneStore,
			start: item.createdAt.split('T')[0],
			end: newEndDate
		};
	});

	return (
		<div className='p-4'>
			<div className='flex items-center gap-2'>
				<button className='bg-green-600 text-white font-semibold text-base px-2 py-3 rounded-md flex items-center gap-1'>
					<Icon icon='ic:baseline-plus' />
					Thêm
				</button>
				<button className='bg-green-600 text-white font-semibold text-base px-2 py-3 rounded-md flex items-center gap-1'>
					<Icon icon='material-symbols:delete-outline' />
					Xóa
				</button>
				<button className='bg-green-600 text-white font-semibold text-base px-2 py-3 rounded-md flex items-center gap-1'>
					<Icon icon='lucide:edit' />
					Sửa
				</button>
			</div>
			<div className='mt-3'>
				<Table
					columns={columns}
					dataSource={dataTables}
				/>
			</div>
		</div>
	);
};

export default ManageUserOwner;
