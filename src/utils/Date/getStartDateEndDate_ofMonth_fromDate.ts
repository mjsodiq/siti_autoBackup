export const getStartDateEndDate_ofMonth_fromDate = (date: Date): { startDate: Date; endDate: Date } => {
	const year = date.getFullYear();
	const month = date.getMonth();
	const startDate = new Date(year, month, 1);
	const endDate = new Date(year, month + 1, 0);
	return {
		startDate,
		endDate,
	};
};
